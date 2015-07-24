module.exports = function (req, reply) {
  reply.view('home', {
    title: 'Hapi Views',
    message: 'Hello from the home view'
  });
};
