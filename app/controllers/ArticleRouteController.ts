import * as restify from 'restify';
import { logger } from '../services/logger';
import { DB_URI } from '../config/constants';
import { ResponseHandler } from '../services/ResponseHandler';
import { MongoClient } from 'mongodb';

export default class ArticleRouteController {
	private collectionName: string = 'article';
	private rh: ResponseHandler = new ResponseHandler();

	constructor() {
		this.post = this.post.bind(this);
		this.get = this.get.bind(this);
		this.put = this.put.bind(this);
		this.del = this.del.bind(this);
	}

	public get(req: restify.Request, res: restify.Response, next: restify.Next) {
		MongoClient.connect(DB_URI).then((db) => {
			db.collection(this.collectionName).find(req.query).toArray().then(
				r => this.rh.successHandler(r, res, next),
				e => this.rh.errorHandler(e, res, next)
			);
		});
	}

	public post(req: restify.Request, res: restify.Response, next: restify.Next) {
		MongoClient.connect(DB_URI).then((db) => {
			db.collection(this.collectionName).insert(req.params).then(
				r => this.rh.successHandler(req.params, res, next),
				e => this.rh.errorHandler(e, res, next)
			);
		});
	}

	public put(req: restify.Request, res: restify.Response, next: restify.Next) {
		MongoClient.connect(DB_URI).then((db) => {
			db.collection(this.collectionName).update(req.query, req.params).then(
				r => this.rh.successHandler(req.params, res, next),
				e => this.rh.errorHandler(e, res, next)
			);
		});
	}

	public del(req: restify.Request, res: restify.Response, next: restify.Next) {
		MongoClient.connect(DB_URI).then((db) => {
			db.collection(this.collectionName).deleteOne(req.query).then(
				r => this.rh.successHandler(r, res, next),
				e => this.rh.errorHandler(e, res, next)
			);
		});
	}

}