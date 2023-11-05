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

> /producers - GET

Response:

Status 200

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

> /movies - POST

Request:

Body:

```json
[
  {
    "year": 1990,
    "title": "O Teste",
    "studios": "MGM",
    "producers": "Jhon test",
    "winner": "yes"
  },
  {
    "year": 1991,
    "title": "O Teste2",
    "studios": "MGM",
    "producers": "Jhon test",
    "winner": "yes"
  }
]
```

Response:

Status 201

```json
{
  "message": "success!"
}
```

> /movies - GET

Response:

Status 200

```json
[
    {
        "id": 1,
        "year": 1980,
        "title": "Can't Stop the Music",
        "studios": "Associated Film Distribution",
        "producers": "Allan Carr",
        "winner": "yes"
    },
    {
        "id": 2,
        "year": 1980,
        "title": "Cruising",
        "studios": "Lorimar Productions, United Artists",
        "producers": "Jerry Weintraub",
        "winner": ""
    },
    ...
]
```

> /movies/{id} - GET

Response:

Status 200

```json
{
  "id": 1,
  "year": 1980,
  "title": "Can't Stop the Music",
  "studios": "Associated Film Distribution",
  "producers": "Allan Carr",
  "winner": "yes"
}
```
