import * as restify from 'restify';
import AWSApkRouteController from '../controllers/AWSApkRouteController'

function sampleRoute(api:restify.Server) {
  let routeCtrl = new AWSApkRouteController();
  api.get('/api/music', routeCtrl.get);
  api.post('/api/music', routeCtrl.post);
  api.post('/api/music/create-table', routeCtrl.createDynamoDbTable);
}

module.exports.routes = sampleRoute;