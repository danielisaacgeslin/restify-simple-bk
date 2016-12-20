import * as restify from 'restify';

export class ResponseHandler {
    public errorHandler(e: any, res: restify.Response, next: restify.Next) {
		res.json(500, e);
		return next();
	}

	public successHandler(response: any, res: restify.Response, next: restify.Next) {
		res.json(200, response);
		return next();
	}
}