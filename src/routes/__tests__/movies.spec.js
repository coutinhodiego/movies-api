import axios from 'axios'

describe('Get Winners producers', () => {
  it('should return the lower and bigger winners from /movies endpoint', async () => {
    const response = await axios.get('http://localhost:3000/movies')
    expect(response.status).toBe(200)
    expect(response.data).toStrictEqual({
      max: [
        {
          producer: 'Matthew Vaughn',
          interval: 13,
          previousWin: 2002,
          followingWin: 2015,
        },
        {
          producer: 'Avi Lerner',
          interval: 13,
          previousWin: 2006,
          followingWin: 2019,
        },
      ],
      min: [
        {
          producer: 'Joel Silver',
          interval: 1,
          previousWin: 1990,
          followingWin: 1991,
        },
        {
          producer: 'Jack Giarraputo',
          interval: 1,
          previousWin: 2011,
          followingWin: 2012,
        },
        {
          producer: 'Adam Sandler',
          interval: 1,
          previousWin: 2011,
          followingWin: 2012,
        },
      ],
    })
  })
})
