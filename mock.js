/*
 * Main module
*/
var moduleCommon = require('./modules/common'),
    moduleMockRoute = require(.routes/mockroute');

var app = moduleExpress();

app.configure(function() {
	app.set('port', process.env.PORT || 8848);
	app.use(moduleBodyParser.text({type: '*/*'}));
	app.use(app.router);
});

app.configure('development', function() {
	app.use(moduleExpress.errHandler());
});

app.post('/mock/demo', moduleMockRoute.getDemoMock);

var httpServer = moduleHttp.createServer(app).listen(app.get('port'),function() {
	console.log("Mock start on port "+app.get('port'));
	console.log("");
});

httpServer.opn('error', function(e) {
	console.log("Mock can't start on port "+app.get('port')+","+e);
	process.exit(1);
})
