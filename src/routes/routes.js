import express from 'express'
import db from '../data-base/database.js'
import { loadmovies } from '../controller/get-movies.js'
const router = express.Router()

router.get('/movies', (req, res) => {
  db.all('SELECT * FROM movies WHERE winner = "yes"', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      return
    }
    const data = loadmovies(rows)
    res.send(data)
  })
})

export default router
