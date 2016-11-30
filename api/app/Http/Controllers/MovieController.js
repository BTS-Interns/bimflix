'use strict'

/************************************************************
  Description:   Movie controller
  Author:        Manuel Ramirez <manuelr@bluetrailsoft.com>
  Copyright:     2016 Blue Trail Software.
  Created:       11-25-2016
  Updated:       11-25-2016
  Updated by:    Manuel Ramirez
*************************************************************/

const Movie = use('App/Model/Movie')

class MovieController {

  * list (request, response) {

    // Get all movies
    const movies = yield Movie.all()

    // Send response
    response.status(200).send(
      { movies: movies }
    )
  }
}

module.exports = MovieController
