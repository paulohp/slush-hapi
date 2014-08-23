var Hapi = require('hapi');

var server = new Hapi.Server(3009, {
  views: {
    path: __dirname + '/../views',
    engines: {
      'html': {
        module: require('handlebars'),
        compileMode: 'async'
      }
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
      reply.view('index');
  }
});
