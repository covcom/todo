
'use strict'

exports.status = {
	ok: 200,										// the request has succeeded
	created: 201,								// a new resource has been created
	badRequest: 400,						// request not understood due to malformed syntax
	unauthorized: 401,					// request requires valid authentication
	notFound: 404,							// no resource found matching the url
	MethodNotAllowed: 405,			// the method specified is not allowed on the resource
	notAcceptable: 406,					// not able to supply the required respresentation
	unsupportedMediaType: 415		// the request body format is not valid
}

exports.format = {
	json: 'application/json',
	xml: 'application/xml'
}

exports.indent = 2
