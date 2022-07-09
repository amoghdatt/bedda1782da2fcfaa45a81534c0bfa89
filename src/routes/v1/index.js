const userRoutes = require('./user-routes');
const testRoutes = require('./test-routes');

module.exports = function v1Routes() {
  return { userRoutes, testRoutes };
};
