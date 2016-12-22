import * as restify from 'restify';
import * as AWS from 'aws-sdk';
import { logger } from '../services/logger';
import { DYNAMO_CONFIG } from '../config/constants';
import { ResponseHandler } from '../services/ResponseHandler';

export default class AWSApkRouteController {
	private rh: ResponseHandler = new ResponseHandler();

	constructor() {
		this.createDynamoDbTable = this.createDynamoDbTable.bind(this);
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
	}

	public get(req: restify.Request, res: restify.Response, next: restify.Next) {
		const db = new AWS.DynamoDB();
		db.config.update(DYNAMO_CONFIG);
		new Promise((resolve, reject)=>{
			db.scan({TableName: 'Music'}, (error, data)=>{
				if(error) return reject(error);
				resolve(data);
			});
		})
		.then(
			data => this.rh.successHandler(data, res, next),
			error => this.rh.errorHandler(error, res, next)
		);
	}

	public createDynamoDbTable(req: restify.Request, res: restify.Response, next: restify.Next) {
		const db = new AWS.DynamoDB();
		db.config.update(DYNAMO_CONFIG);
		const params = {
			TableName: "Music",
			KeySchema: [
				{ AttributeName: "Artist", KeyType: "HASH" },  //Partition key
				{ AttributeName: "SongTitle", KeyType: "RANGE" }  //Sort key
			],
			AttributeDefinitions: [
				{ AttributeName: "Artist", AttributeType: "S" },
				{ AttributeName: "SongTitle", AttributeType: "S" }
			],
			ProvisionedThroughput: {
				ReadCapacityUnits: 10,
				WriteCapacityUnits: 10
			}
		};
		new Promise((resolve, reject)=>{
			db.createTable(params, (error, data)=>{
				if(error) return reject(error);
				resolve(data);
			});
		})
		.then(
			data => this.rh.successHandler(data, res, next),
			error => this.rh.errorHandler(error, res, next)
		);
	}

	public post(req: restify.Request, res: restify.Response, next: restify.Next) {
		const db = new AWS.DynamoDB();
		db.config.update(DYNAMO_CONFIG);
		const params = {
			"TableName": "Music",
			"Item": {
				"Artist": { "S": req.params.Artist },
				"SongTitle": { "S": req.params.SongTitle }
			}
		};

		new Promise((resolve, reject)=>{
			db.putItem(params, (error, data)=>{
				if(error) return reject(error);
				resolve(data);
			});
		})
		.then(
			data => this.rh.successHandler(data, res, next),
			error => this.rh.errorHandler(error, res, next)
		);
	}
}