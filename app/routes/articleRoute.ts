import * as restify from 'restify';
import ArticleRouteController from '../controllers/ArticleRouteController'

function articleRoute(api:restify.Server) {
  let routeCtrl = new ArticleRouteController();
  api.get('/api/article', routeCtrl.get);
  api.post('/api/article', routeCtrl.post);
}

module.exports.routes = articleRoute;