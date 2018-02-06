module.exports = (req, h) => {
  return h.view('home', {
    title: 'Hapi Views',
    message: 'Hello from the home view'
  })
}
