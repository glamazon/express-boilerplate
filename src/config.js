module.exports = {
  const { PORT } = require('./config')

  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })
  NODE_ENV: process.env.NODE_ENV || 'development',
}