const templates = require("../views/template")

class BaseController {

    home() {
        
        return function(req, resp) {
            resp.marko(
                //require('../views/base/home/home.marko')
                templates.livros.home
            );
        };
    }
}

module.exports = BaseController;