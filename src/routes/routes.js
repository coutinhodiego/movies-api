import express from 'express'
import db from '../data-base/database.js'
import { getProducers } from '../services/get-producers.service.js'

const router = express.Router()

router.get('/producers', (req, res) => {
  db.all('SELECT * FROM movies WHERE winner = "yes"', [], (err, rows) => {
    if (err) {
      console.error(err.message)
      return
    }
    const data = getProducers(rows)
    res.send(data)
  })
})

router.post('/movies', (req, res) => {
  const producers = req.body
  for (const producer of producers) {
    db.run(
      'INSERT INTO movies (year,title,studios,producers,winner) VALUES (?, ?, ?, ?, ?)',
      [
        producer.year,
        producer.title,
        producer.studios,
        producer.producers,
        producer.winner,
      ]
    )
    res.status(201).json({ message: 'success!' })
  }
})

router.get('/movies', (req, res) => {
  db.all('SELECT * FROM movies', [], (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    res.send(data)
  })
})

router.get('/movies/:id', (req, res) => {
  const id = req.params.id
  db.get(`SELECT * FROM movies WHERE id = ${id}`, [], (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    if (!data) {
      res.status(404).json({ message: 'Movie not found' })
    }
    res.send(data)
  })
})

export default router
