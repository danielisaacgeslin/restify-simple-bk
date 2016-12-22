import * as restify from 'restify';
import DynamooseRouteController from '../controllers/DynamooseRouteController'

function sampleRoute(api:restify.Server) {
  let routeCtrl = new DynamooseRouteController();
  api.get('/api/dynamoose', routeCtrl.get);
  api.post('/api/dynamoose', routeCtrl.post);
}

module.exports.routes = sampleRoute;