import express from 'express'
import { loadExternalData } from './src/data-base/database.js'
import routes from './src/routes/routes.js'

const app = express()
loadExternalData()

const port = process.env.PORT || 3000

app.use('/', routes)

app.listen(port, () => {
  console.log(`listen on port: ${port}`)
})
