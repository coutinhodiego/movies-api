import { getProducers } from '../get-producers.service.js'

describe('Get Winners producers', () => {
  const movies = [
    {
      id: 28,
      year: 1984,
      title: 'Bolero',
      studios: 'Cannon Films',
      producers: 'Bo Derek',
      winner: 'yes',
    },
    {
      id: 34,
      year: 1985,
      title: 'Rambo: First Blood Part II',
      studios: 'Columbia Pictures',
      producers: 'Buzz Feitshans',
      winner: 'yes',
    },
    {
      id: 72,
      year: 1990,
      title: "Ghosts Can't Do It",
      studios: 'Triumph Releasing',
      producers: 'Bo Derek',
      winner: 'yes',
    },
    {
      id: 103,
      year: 1994,
      title: 'Color of Night',
      studios: 'Hollywood Pictures',
      producers: 'Buzz Feitshans',
      winner: 'yes',
    },
    {
      id: 110,
      year: 1991,
      title: 'The game',
      studios: 'Triumph Releasing',
      producers: 'Jack Bro',
      winner: 'yes',
    },
    {
      id: 120,
      year: 1997,
      title: 'Only',
      studios: 'Hollywood Pictures',
      producers: 'Jack Bro',
      winner: 'yes',
    },
    {
      id: 150,
      year: 2001,
      title: 'Car',
      studios: 'Triumph Releasing',
      producers: 'Max Tim',
      winner: 'yes',
    },
    {
      id: 180,
      year: 2010,
      title: 'House',
      studios: 'Hollywood Pictures',
      producers: 'Max Tim',
      winner: 'yes',
    },
  ]

  it('should return the lower and bigger winners', () => {
    const winners = getProducers(movies)

    expect(winners.max).toStrictEqual([
      {
        producer: 'Buzz Feitshans',
        interval: 9,
        previousWin: 1985,
        followingWin: 1994,
      },
      {
        producer: 'Max Tim',
        interval: 9,
        previousWin: 2001,
        followingWin: 2010,
      },
    ])
    expect(winners.min).toStrictEqual([
      {
        producer: 'Bo Derek',
        interval: 6,
        previousWin: 1984,
        followingWin: 1990,
      },
      {
        producer: 'Jack Bro',
        interval: 6,
        previousWin: 1991,
        followingWin: 1997,
      },
    ])
  })
})
