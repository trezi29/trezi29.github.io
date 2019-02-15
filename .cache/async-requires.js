// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-moontains-js": () => import("/Users/user/Documents/GitHub/trezi29.github.io/src/pages/moontains.js" /* webpackChunkName: "component---src-pages-moontains-js" */)
}

exports.data = () => import("/Users/user/Documents/GitHub/trezi29.github.io/.cache/data.json")

