import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'util/requests';

const findAllGenresResponse = [
    {
        "id": 1,
        "name": "Comedy"
    },
    {
        "id": 2,
        "name": "Horror"
    },
    {
        "id": 3,
        "name": "Romance"
    },
    {
        "id": 4,
        "name": "Action"
    },
    {
        "id": 5,
        "name": "Drama"
    },
    {
        "id": 6,
        "name": "Thriller"
    }
]

export const server = setupServer(
    rest.get(`${BASE_URL}/genres`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findAllGenresResponse),
        )
    }),
)