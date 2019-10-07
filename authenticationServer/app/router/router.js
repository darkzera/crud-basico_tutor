const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function (app) {

	const controller = require('../controller/controller.js');
	//const starshipsPilotController = require('../../../server src/controllers/starship_pilotController');

	const starPilotControl= require('../../../server/build/controllers/starship_pilotController'); 

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

	app.post('/api/auth/signin', controller.signin);

	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

	//app.post('/api/starships/add' [authJwt.verifyToken, authJwt.isAdmin], starPilotControl.create);

}