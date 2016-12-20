import * as restify from 'restify';
import ArticleRouteController from '../controllers/ArticleRouteController'

function articleRoute(api:restify.Server) {
  let routeCtrl = new ArticleRouteController();
  api.get('/api/article', routeCtrl.get);
}

module.exports.routes = articleRoute;