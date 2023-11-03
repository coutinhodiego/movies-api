# Movies API

A API for list movies idicated a Raspberry Awards

## Run API

To run the API

```
npm start
```

## Run test

To run the tests you need the API still runing.

```
npm test
```

## Endpoints

> /movies - GET

Status 200:

```json
{
  "min": [
    {
      "producer": "Joel Silver",
      "interval": 1,
      "previousWin": 1990,
      "followingWin": 1991
    }
  ],
  "max": [
    {
      "producer": "Matthew Vaughn",
      "interval": 13,
      "previousWin": 2002,
      "followingWin": 2015
    }
  ]
}
```
