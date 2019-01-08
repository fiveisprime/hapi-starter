module.exports = (req, h) => {
  return h.view('home', {
    title: 'Home',
    message: 'Welcome to the home view'
  })
}
