
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'util/requests';

const findMovieResponse =
{
    "id": 1,
    "title": "Home Alone",
    "subTitle": "A family commedy without the family",
    "year": 1990,
    "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/home_alone.jpg",
    "synopsis": "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
    "genre": {
        "id": 1,
        "name": "Comedy"
    },
    "reviews": [
        {
            "id": 1,
            "text": "This is one of my favourite films but I have read that a new version is to be filmed in early 2020. NOooooooooo! It does not need to be remade. It stands the test of time and is as funny now as it was on its release.",
            "user": {
                "id": 1,
                "name": "Bob Brown",
                "email": "bob@gmail.com"
            },
            "movieId": 1
        },
        {
            "id": 2,
            "text": "Seen this classic so many times and never ceases to get old. With a bunch of great scenery, adorableness, original vibes, and comedy! Macaulay Culkin shined so much, he deserved the millions earned for his role. I love how Joe Pesci went from Scorsese films where he swore so much where as in this he had to bite his tongue. John Hughe was a gifted writer that helmed some gems!",
            "user": {
                "id": 2,
                "name": "Ana Green",
                "email": "ana@gmail.com"
            },
            "movieId": 1
        }
    ]
}

export const server = setupServer(
    rest.get(`${BASE_URL}/movies/1`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findMovieResponse),
        )
    }),
)