const userRoutes = require('./user-routes');
const testRoutes = require('./test-routes');
const downloadLinkRoutes = require('./download-link-routes');

module.exports = function v1Routes() {
  return { userRoutes, testRoutes, downloadLinkRoutes };
};
