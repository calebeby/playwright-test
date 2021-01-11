const { chromium } = require('playwright')
const fs = require('fs')

const main = async () => {
  const wsEndpoint = fs.readFileSync('wsEndpoint', 'utf8')
  console.log(`connecting to ${wsEndpoint}`)
  const browser = await chromium.connect({ wsEndpoint, headless: false })
  const ctx = await browser.newContext()
  const page = await ctx.newPage()
  await page.goto('https://google.com')
  browser.close()
}

main()
