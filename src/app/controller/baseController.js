const templates = require("../views/template")

class BaseController {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        }
    }

    home() {
        
        return function(req, resp) {
            resp.marko(
                //require('../views/base/home/home.marko')
                templates.livros.home
            );
        };
    }

    login() {
        return function(req,resp) {
            resp.marko(
                templates.base.login
            );
        }
    }

    efetuaLogin() {
        return function (req,resp) {
            
        }
    }
}

module.exports = BaseController;