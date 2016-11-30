'use strict'

/************************************************************
  Description:   User controller
  Author:        Manuel Ramirez <manuelr@bluetrailsoft.com>
  Copyright:     2016 Blue Trail Software.
  Created:       11-25-2016
  Updated:       11-25-2016
  Updated by:    Manuel Ramirez
*************************************************************/

const User = use('App/Model/User')
const Movie = use('App/Model/Movie')
const Seen = use('App/Model/Seen')
const Favorite = use('App/Model/Favorite')
const Watchlist = use('App/Model/Watchlist')

const Database = use('Database')

class UserController {

  // Returns the user's favorite movies
  * listFavorites (request, response) {

    // Get userID from request
    const id = request.param('id')

    const query = Database.table('users')

    // Get user's favorite movies
    const favorites = yield query
      .table('favorite')
      .where('userID', id)
      .innerJoin('movie', 'movie.movieID', 'favorite.movieID')

    response.json(favorites)

  }

  // Marks the specified movie as favorite
  * createFavorite (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movie
    const userID = request.param('user_id')

    // Check if movie has been already marked as favorite
    const query = Database.table('favorite')
    const isFavorite = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already marked
    if (isFavorite.length > 0) {
      response.status(304).send()
    }

    // Get all favorite movies
    let favorite = new Favorite()

    favorite.userID = userID
    favorite.movieID = movieID
    let result = yield favorite.save()

    // Send response
    if (result) {
      response.status(201).send({id: favorite.favoriteID})
    } else {
      response.status(500).send(
        {message: 'There was an error while marking movie as favorite.'}
      )
    }
  }

  // Marks the specified movie as favorite
  * deleteFavorite (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Delete movie from favorites list
    const query = Database.table('favorite')
    const isDeleted = yield query
    .where({userID: userID, movieID: movieID})
    .delete()

    // Do not process if already deleted
    if (isDeleted) {
      response.status(202).send()
    }
  }


  /* Seen Movies Endpoints
     ------------------------------------- */
  // Returns the user' seen movies
  * listSeen (request, response) {

    // Get userID from request
    const id = request.param('id')

    const query = Database.table('users')

    // Get user's seen movies
    const seen = yield query
      .table('seen')
      .where('userID', id)
      .innerJoin('movie', 'movie.movieID', 'seen.movieID')

     response.json(seen)

   }

  // Marks the specified movie as seen
  * createSeen (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movie
    const userID = request.param('user_id')

    // Check if movie has been already marked as seen
    const query = Database.table('seen')
    const isSeen = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already marked
    if (isSeen.length > 0) {
      response.status(304).send()
    }

    // Get all seen movies
    let seen = new Seen()

    Seen.userID = userID
    Seen.movieID = movieID
    let result = yield seen.save()

    // Send response
    if (result) {
      response.status(201).send({id: seen.seenID})
    } else {
      response.status(500).send(
        {message: 'There was an error while marking movie as seen.'}
      )
    }
  }

  // Marks the specified movie as seen
  * deleteSeen (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Delete movie from seen list
    const query = Database.table('seen')
    const isDeleted = yield query
    .where({userID: userID, movieID: movieID})
    .delete()

    // Do not process if already deleted
    if (isDeleted) {
      response.status(202).send()
    }
  }


  /* Watchlist Endpoints
     ------------------------------------- */
  // Returns the user' watchlist movies
  * listWatchlist (request, response) {

    // Get userID from request
    const id = request.param('id')

    const query = Database.table('users')

    // Get user's watchlist movies
    const watchlist = yield query
      .table('watchlist')
      .where('userID', id)
      .innerJoin('movie', 'movie.movieID', 'watchlist.movieID')

     response.json(watchlist)

   }

  // Adds the specified movie to watchlist
  * createWatchlist (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movie
    const userID = request.param('user_id')

    // Check if movie has been already added to watchlist
    const query = Database.table('watchlist')
    const inWatchlist = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already marked
    if (inWatchlist.length > 0) {
      response.status(304).send()
    }

    // Get all watchlist movies
    let watchlist = new Watchlist()

    Watchlist.userID = userID
    Watchlist.movieID = movieID
    let result = yield watchlist.save()

    // Send response
    if (result) {
      response.status(201).send({id: seen.seenID})
    } else {
      response.status(500).send(
        {message: 'There was an error while adding the movie to watchlist.'}
      )
    }
  }

  // Marks the specified movie as seen
  * deleteWatchlist (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Check if movie has been already marked as seen
    const query = Database.table('watchlist')
    const isDeleted = yield query
    .where({userID: userID, movieID: movieID})
    .delete()

    // Do not process if already deleted
    if (isDeleted) {
      response.status(202).send()
    }
  }
}

module.exports = UserController
