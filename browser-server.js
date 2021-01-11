const { chromium } = require('playwright')
const fs = require('fs')

const main = async () => {
  const browserServer = await chromium.launchServer({ headless: false })
  fs.writeFileSync('wsEndpoint', browserServer.wsEndpoint())
}

main()
