import express from 'express'
import { loadExternalData } from './src/data-base/database.js'
import routes from './src/routes/routes.js'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

loadExternalData()

const port = process.env.PORT || 3000

app.use('/', routes)

app.listen(port, () => {
  console.log(`listen on port: ${port}`)
})
