import * as restify from 'restify';
import { logger } from '../services/logger';
import { DB_URI } from '../config/constants';
import { MongoClient, Db } from 'mongodb';

export default class ArticleRouteController {
	public get(req: restify.Request, res: restify.Response, next: restify.Next) {
		MongoClient.connect(DB_URI).then((db: Db) => {
			logger.info(JSON.stringify(req.query));
			res.json(200, 'pong');
			return next();
		});
	}

}