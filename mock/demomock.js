moduleCommon = requer('../modules/common';


exports.run = function(req,res) {
	var body = JSON.parse(req.body)
	var resJsonStr;

	fs.readFile('data/demo/demo.json','utf8', funtion(err,data) {
		if(err) {
			resJsonStr = JSON.stringfy(err);
		}
		else {
			resJsonStr = JSON.stringfy(data);
		}
		logger.log('MOCK_INFO','Send back a response');
		logger.log('MOCK_INFO', resJsonStr);
		res.writeHead(200,{'ContentType':'application/json'});
		res.write(resJsonStr);
		res.end();
	});
};
