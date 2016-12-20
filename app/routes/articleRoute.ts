import * as restify from 'restify';
import ArticleRouteController from '../controllers/ArticleRouteController'

function articleRoute(api:restify.Server) {
  let routeCtrl = new ArticleRouteController();
  api.get('/api/article', routeCtrl.get);
  api.post('/api/article', routeCtrl.post);
  api.put('/api/article', routeCtrl.put);
  api.del('/api/article', routeCtrl.del);
}

module.exports.routes = articleRoute;