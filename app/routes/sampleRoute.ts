import * as restify from 'restify';
import sampleRouteController from '../controllers/SampleRouteController'

function sampleRoute(api:restify.Server) {
  let routeCtrl = new sampleRouteController();
  api.get('/api/music', routeCtrl.get);
  api.post('/api/music', routeCtrl.post);
  api.post('/api/music/create-table', routeCtrl.createDynamoDbTable);
}

module.exports.routes = sampleRoute;