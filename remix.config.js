const { flatRoutes } = require('remix-flat-routes');

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  routes: async defineRoutes => {
    const fr = flatRoutes(
      ['routes'],
      defineRoutes,
      {
        // patterns appear not to match folders/dirs
        ignoredRouteFiles: [
          "**/*.disabled.*",
          "**/*.{md,txt}"
        ],
        enableUniqueIdCheck: true
      }
    );
    console.log(JSON.stringify(fr, null, 2));
    return fr;
  },
  serverModuleFormat: "cjs",
  sourceMap: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
