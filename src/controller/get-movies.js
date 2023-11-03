export const loadmovies = (moviesList) => {
  const winners = []

  const moviesByProducer = getMoviesByProducer(moviesList)
  const result = groupMoviesByProducer(moviesByProducer)

  Object.keys(result).map((key) => {
    if (result[key].length >= 2) {
      winners.push({ [key]: result[key] })
    }
  })

  return getIntervals(winners)
}

const getMoviesByProducer = (moviesList) => {
  let moviesByProducer = []

  for (let movie of moviesList) {
    const producers = movie.producers.split(/,| and /g)
    for (let producer of producers) {
      producer = producer.trim()
      if (producer !== ' ' && producer !== '') {
        moviesByProducer.push({
          year: movie.year,
          title: movie.title,
          producer,
        })
      }
    }
  }
  return moviesByProducer
}

const groupMoviesByProducer = (moviesList) => {
  const movies = {}
  for (let movie of moviesList) {
    if (!movies[movie.producer]) {
      movies[movie.producer] = [movie]
    } else {
      movies[movie.producer].push(movie)
    }
  }

  return movies
}

const getIntervals = (data) => {
  const result = { max: [], min: [] }
  let maxInterval = 0
  let minInterval = Infinity
  let producers = []

  for (const winnerData of data) {
    for (const winner in winnerData) {
      const movies = winnerData[winner]
      movies.sort((a, b) => a.year - b.year)

      for (let i = 1; i < movies.length; i++) {
        const interval = movies[i].year - movies[i - 1].year
        producers.push({
          producer: winner,
          interval: interval,
          previousWin: movies[i - 1].year,
          followingWin: movies[i].year,
        })
      }
    }
  }

  for (let producer of producers) {
    if (producer.interval > maxInterval) {
      result.max = [producer]
      maxInterval = producer.interval
    } else if (producer.interval === maxInterval) {
      result.max.push(producer)
      maxInterval = producer.interval
    }

    if (producer.interval < minInterval) {
      result.min = [producer]
      minInterval = producer.interval
    } else if (producer.interval === minInterval) {
      result.min.push(producer)
      minInterval = producer.interval
    }
  }

  return result
}
