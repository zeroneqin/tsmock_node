moduleQueryString = require('querystring'),
	moduleUrl = require('url'),
	moduleBodyParser = require('body-parser');

	var myCustomerLevels ={
		levels:{
			MOCK_INFO:0,
			MOCK_WARN:1,
			MOCK_ERROR:2,
		},
	};

logger = new (moduleWinston.logger)({
	transports:[
		new(module
