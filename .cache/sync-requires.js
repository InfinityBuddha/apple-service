// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/maksimo/gatsby-apple-service/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/.cache/dev-404-page.js")),
  "component---src-pages-basket-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/basket.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/index.js")),
  "component---src-pages-ipad-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/ipad.js")),
  "component---src-pages-iphone-sell-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/iphone-sell.js")),
  "component---src-pages-iphone-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/iphone.js")),
  "component---src-pages-other-js": preferDefault(require("/Users/maksimo/gatsby-apple-service/src/pages/other.js"))
}

exports.json = {
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "basket.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/basket.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/index.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "ipad.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/ipad.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "iphone-sell.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/iphone-sell.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "iphone.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/iphone.json"),
  "layout-index.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/layout-index.json"),
  "other.json": require("/Users/maksimo/gatsby-apple-service/.cache/json/other.json")
}