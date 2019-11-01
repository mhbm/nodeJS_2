const BaseController = require('../controller/baseController');
const baseController = new BaseController();

module.exports = (app) => {
    app.get('/', baseController.home());

}