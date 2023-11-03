import csvParser from 'csv-parser'
import fs from 'fs'
import sqlite3 from 'sqlite3'

const db = new sqlite3.Database(':memory:')

export const loadExternalData = () => {
  console.log('loading external data into db...')

  const schema = fs.readFileSync('./src/data-base/schema/movies.sql', 'utf-8')

  db.exec(schema)

  fs.createReadStream('./src/external-data/movielist.csv')
    .pipe(
      csvParser({
        separator: ';',
      })
    )
    .on('data', (data) => {
      db.serialize(() => {
        db.run(
          'INSERT INTO movies (year,title,studios,producers,winner) VALUES (?, ?, ?, ?, ?)',
          [data.year, data.title, data.studios, data.producers, data.winner]
        )
      })
    })
    .on('end', () => {
      console.log('data loded.')
    })
}

export default db
