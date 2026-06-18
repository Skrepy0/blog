export function typeWriter(element: HTMLElement, text: string, speed: number = 100, callback?: () => void) {
  let index = 0
  element.textContent = '' // 清空原有内容

  const timer = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index)
      index++
    } else {
      clearInterval(timer)
      callback?.() // 打字完成回调
    }
  }, speed)
  return () => clearInterval(timer)
}
export function isElementVisible(el: HTMLElement): boolean {
  return !!(el.offsetParent || el.getBoundingClientRect().width)
}
