class BaseController {

    home() {
        console.log('aaaa')
        return function(req, resp) {
            resp.marko(
                require('../views/base/home/home.marko')
            );
        };
    }
}

module.exports = BaseController;