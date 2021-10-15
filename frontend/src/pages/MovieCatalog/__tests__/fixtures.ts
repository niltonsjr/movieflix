import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BASE_URL } from 'util/requests';

const findAllMoviesResponse = {
    "content": [
        {
            "id": 6,
            "title": "Emma",
            "subTitle": "Love knows best.",
            "year": 2020,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/emma.jpg",
            "synopsis": "In 1800s England, a well meaning but selfish young woman meddles in the love lives of her friends.",
            "genre": {
                "id": 3,
                "name": "Romance"
            },
            "reviews": []
        },
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
            "reviews": []
        },
        {
            "id": 13,
            "title": "Inception",
            "subTitle": "The dream is real.",
            "year": 2010,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/inception.jpg",
            "synopsis": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            "genre": {
                "id": 6,
                "name": "Thriller"
            },
            "reviews": []
        },
        {
            "id": 11,
            "title": "Interstellar",
            "subTitle": "Mankind was born on Earth. It was never meant to die here.",
            "year": 2014,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/interstellar.jpg",
            "synopsis": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "genre": {
                "id": 5,
                "name": "Drama"
            },
            "reviews": []
        },
        {
            "id": 12,
            "title": "Joker",
            "subTitle": "Put on a happy face.",
            "year": 2019,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/joker.jpg",
            "synopsis": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
            "genre": {
                "id": 6,
                "name": "Thriller"
            },
            "reviews": []
        },
        {
            "id": 2,
            "title": "Love Actually",
            "subTitle": "The ultimate romantic comedy",
            "year": 2003,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/love_actually.jpg",
            "synopsis": "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
            "genre": {
                "id": 1,
                "name": "Comedy"
            },
            "reviews": []
        },
        {
            "id": 3,
            "title": "Run",
            "subTitle": "You can't escape a mother's love.",
            "year": 2020,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/run.jpg",
            "synopsis": "A homeschooled teenager begins to suspect her mother is keeping a dark secret from her.",
            "genre": {
                "id": 2,
                "name": "Horror"
            },
            "reviews": []
        },
        {
            "id": 9,
            "title": "Spider-Man: Into the Spider-Verse",
            "subTitle": "What makes you different is what makes you Spider-Man.",
            "year": 2018,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/spider_man_into_the_spider_verse.jpg",
            "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
            "genre": {
                "id": 4,
                "name": "Action"
            },
            "reviews": []
        },
        {
            "id": 4,
            "title": "The New Mutants",
            "subTitle": "It's time to face your demons",
            "year": 2020,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/the_new_mutants.jpg",
            "synopsis": "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
            "genre": {
                "id": 2,
                "name": "Horror"
            },
            "reviews": []
        },
        {
            "id": 10,
            "title": "The Trial of the Chicago 7",
            "subTitle": "In 1968, democracy refused to back down.",
            "year": 2020,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/the_trial_of_the_chicago_7.jpg",
            "synopsis": "The story of 7 people on trial stemming from various charges surrounding the uprising at the 1968 Democratic National Convention in Chicago, Illinois.",
            "genre": {
                "id": 5,
                "name": "Drama"
            },
            "reviews": []
        },
        {
            "id": 7,
            "title": "Titanic",
            "subTitle": "Nothing on earth could come between then.",
            "year": 1997,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/titanic.jpg",
            "synopsis": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            "genre": {
                "id": 3,
                "name": "Romance"
            },
            "reviews": []
        },
        {
            "id": 5,
            "title": "Underwater",
            "subTitle": "7 miles below the ocean surface something has awakened",
            "year": 2020,
            "imgUrl": "https://raw.githubusercontent.com/niltonsjr/movieflix/main/images/underwater.jpg",
            "synopsis": "A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.",
            "genre": {
                "id": 2,
                "name": "Horror"
            },
            "reviews": []
        }
    ],
    "pageable": {
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "offset": 0,
        "pageNumber": 0,
        "pageSize": 12,
        "paged": true,
        "unpaged": false
    },
    "totalPages": 2,
    "totalElements": 13,
    "last": false,
    "size": 12,
    "number": 0,
    "sort": {
        "sorted": true,
        "unsorted": false,
        "empty": false
    },
    "first": true,
    "numberOfElements": 12,
    "empty": false
}

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
    rest.get(`${BASE_URL}/movies`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findAllMoviesResponse),
        )
    }),
    rest.get(`${BASE_URL}/genres`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(findAllGenresResponse),
        )
    }),
)