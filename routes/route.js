var moduleDemoMock = require('../mock/demomock'),
    moduleCommon = require('../modules/common');

exports.getDemoMock = function(req,res,next) {
	logger.log('MOCK_INFO','====================');
	logger.log('MOCK_INFO','Receive a request");
	logger.log('MOCK_INFO',req.body);
	logger.log('MOCK_INFO','====================');
	moduleDemoMock.run(req,res);
}
