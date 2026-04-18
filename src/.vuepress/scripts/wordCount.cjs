const fs = require('fs')
const path = require('path')
const { glob } = require('glob')
const matter = require('gray-matter')

// 文章存放的根目录（根据你的项目结构调整）
const POSTS_DIR = path.resolve(__dirname, '../../') // 假设脚本在 src/.vuepress/scripts/，则向上两级到 src/

// 计算中英文字数（简单版）
function countWords(text) {
  // 移除 Markdown 标记（可选）
  const plainText = text.replace(/[#*`~>\[\](){}|\\]/g, '')
  // 统计中文字符 + 英文单词（字母数字）
  const chinese = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length
  const english = (plainText.match(/[a-zA-Z0-9]+/g) || []).length
  return chinese + english
}

// 递归获取所有 .md 文件（简单实现）
function getAllMdFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllMdFiles(fullPath, fileList)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      fileList.push(fullPath)
    }
  }
  return fileList
}

let totalWords = 0
const mdFiles = getAllMdFiles(POSTS_DIR)
mdFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8')
  const { content: markdownContent } = matter(content)
  totalWords += countWords(markdownContent)
})

console.log(`博客总字数（估算）：${totalWords} 字`)

// 可选：将结果写入文件
const outputPath = path.join(POSTS_DIR, '.vuepress/dist', 'totalWords.json')
const outputDir = path.dirname(outputPath)
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify({ totalWords }, null, 2))
