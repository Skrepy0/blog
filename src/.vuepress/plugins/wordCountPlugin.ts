import { App } from 'vuepress'
import fs from 'fs'
import path from 'path'

export const wordCountPlugin = (app: App) => {
  return {
    name: 'vuepress-plugin-word-count',
    onPrepared: async () => {
      let totalWords = 0
      for (const page of app.pages) {
        const readingTime = page.data.readingTime as any
        if (readingTime?.words) {
          totalWords += readingTime.words
        }
      }

      const publicDir = path.join(app.dir.source(), '.vuepress/public')
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true })
      }

      const outputPath = path.join(publicDir, 'totalWords.json')
      fs.writeFileSync(outputPath, JSON.stringify({ totalWords }), 'utf-8')
      console.log(`totalWords.json 已生成，总字数: ${totalWords}`)
    },
  }
}
