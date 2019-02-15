// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/index.js")),
  "component---src-pages-moontains-js": preferDefault(require("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/moontains.js"))
}

