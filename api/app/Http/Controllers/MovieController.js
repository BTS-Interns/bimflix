'use strict'

/************************************************************
  Description:   Movie controller
  Author:        Manuel Ramirez <manuelr@bluetrailsoft.com>
  Copyright:     2016 Blue Trail Software.
  Created:       11-25-2016
  Updated:       11-25-2016
  Updated by:    Manuel Ramirez
*************************************************************/

class MovieController {

  * list (request, response) {
    response.status(200).send(
      { movies:
        [
          {
            "Title": "Almost Famous",
            "Year": "2000",
            "Rated": "R",
            "Released": "22 Sep 2000",
            "Runtime": "122 min",
            "Genre": "Adventure, Comedy, Drama",
            "Director": "Cameron Crowe",
            "Writer": "Cameron Crowe",
            "Actors": "Billy Crudup, Frances McDormand, Kate Hudson, Jason Lee",
            "Plot": "A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.",
            "Language": "English, French",
            "Country": "USA",
            "Awards": "Won 1 Oscar. Another 52 wins & 102 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
            "Metascore": "90",
            "imdbRating": "7.9",
            "imdbVotes": "209,376",
            "imdbID": "tt0181875",
            "Type": "movie",
            "Response": "True"
          }
        ]
      }
    )
  }
}

module.exports = MovieController
