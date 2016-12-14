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
  * getUser (request, response) {

    // Get userID from request
    const userID = request.param('user_id')

    // Get user table handle
    const query = Database.table('user')

    // Get user's favorite movies
    const userData = yield query
      .table('user')
      .where('userID', userID)

    response.json(userData)

  }

  * createUser (request, response) {

    // Get data from request
    const data = request.all()
    const username = data.username
    const email = data.email
    const password = data.password
    const avatar = data.avatar

    // Check if username already exists
    let query = Database.table('user')
    let alreadyExists = yield query
    .where({username: username})
    if (alreadyExists.length > 0) {
      response.status(422).send('Username already exists')
    }

    // Check if email already exists
    query = Database.table('user')
    alreadyExists = yield query
    .where({email: email})
    if (alreadyExists.length > 0) {
      response.status(422).send('Email already exists')
    }

    // Create favorite item
    let user = new User()
    user.username = username
    user.email = email
    user.password = password
    user.avatar = avatar
    let result = yield user.save()

    // Send response
    if (result) {

      // Get database handle
      const userQuery = Database.table('user')

      // Get movie data
      user = yield userQuery
        .table('user')
        .where('username', username)

      // Send status
      response.status(201).send(user)

    } else {

      // Return error
      response.status(500).send(
        {message: 'There was an error while creating user'}
      )
    }
  }

  // Returns the user's favorite movies
  * listFavorites (request, response) {

    // Get userID from request
    const userID = request.param('user_id')

    // Get user table handle
    const query = Database.table('users')

    // Get user's favorite movies
    const favorites = yield query
      .table('favorite')
      .where('userID', userID)
      .innerJoin('movie', 'movie.movieID', 'favorite.movieID')

    response.json(favorites)

  }

  // Marks the specified movie as favorite
  * createFavorite (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movieID
    const userID = request.param('user_id')

    // Check if movie has been already marked as favorite
    const query = Database.table('favorite')
    const isFavorite = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already marked
    if (isFavorite.length > 0) {
      response.status(304).send()
    }

    // Create favorite item
    let favorite = new Favorite()
    favorite.userID = userID
    favorite.movieID = movieID
    let result = yield favorite.save()

    // Send response
    if (result) {

      // Get database handle
      const movieQuery = Database.table('movie')

      // Get movie data
      const movie = yield movieQuery
        .table('movie')
        .where('movieID', movieID)

      // Send status
      response.status(201).send(movie)

    } else {

      // Return error
      response.status(500).send(
        {message: 'There was an error while marking movie as favorite.'}
      )
    }
  }

  // Deletes movie from favorites
  * deleteFavorite (request, response) {

    // vars
    let isDeleted = false

    // Get data from request
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Find movie in favorite list
    const query = Database.table('favorite')
    const favorite = yield query
    .where({userID: userID, movieID: movieID})

    // Delete
    if (favorite.length > 0) {
      let id = favorite[0].favoriteID
      const item = yield Favorite.findBy('favoriteID', id)
      isDeleted = yield item.delete()
    }

    // Do not process if already deleted
    if (isDeleted) {
      response.status(200).send()
    } else {
      response.status(404).send()
    }
  }


  /* Seen Movies Endpoints
     ------------------------------------- */
  // Returns the user' seen movies
  * listSeen (request, response) {

    // Get userID from request
    const userID = request.param('user_id')

    // Get user table handle
    const query = Database.table('users')

    // Get user's seen movies
    const seen = yield query
      .table('seen')
      .where('userID', userID)
      .innerJoin('movie', 'movie.movieID', 'seen.movieID')

     response.json(seen)

   }

   // Marks the specified movie as seen
   * createSeen (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movieID
    const userID = request.param('user_id')

    // Check if movie has been already marked as favorite
    const query = Database.table('seen')
    const isSeen = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already marked
    if (isSeen.length > 0) {
     response.status(304).send()
    }

    // Create seen item
    let seen = new Seen()
    seen.userID = userID
    seen.movieID = movieID
    let result = yield seen.save()

    // Send response
    if (result) {

     // Get database handle
     const movieQuery = Database.table('movie')

     // Get movie data
     const movie = yield movieQuery
       .table('movie')
       .where('movieID', movieID)

     // Send status
     response.status(201).send(movie)

    } else {

     // Return error
     response.status(500).send(
       {message: 'There was an error while marking movie as seen.'}
     )
    }
  }

  // Deletes the specified movie from seen list
  * deleteSeen (request, response) {

    // vars
    let isDeleted = false

    // Get data from request
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Find movie in seen list
    const query = Database.table('seen')
    const seen = yield query
    .where({userID: userID, movieID: movieID})

    // Delete
    if (seen.length > 0) {
      let id = seen[0].seenID
      const item = yield Seen.findBy('seenID', id)
      isDeleted = yield item.delete()
    }

    // Do not process if already deleted
    if (isDeleted) {
      response.status(200).send()
    } else {
      response.status(404).send()
    }
  }


  /* Watchlist Endpoints
     ------------------------------------- */
  // Returns the user' watchlist movies
  * listWatchlist (request, response) {

    // Get userID from request
    const userID = request.param('user_id')

    // Get user table handle
    const query = Database.table('users')

    // Get user's watchlist movies
    const watchlist = yield query
      .table('watchlist')
      .where('userID', userID)
      .innerJoin('movie', 'movie.movieID', 'watchlist.movieID')

     response.json(watchlist)

   }

  // Adds the specified movie to watchlist
  * createWatchlist (request, response) {

    // Get data from request
    const data = request.all()
    const movieID = data.movieID
    const userID = request.param('user_id')

    // Check if movie has been already added to watchlist
    const query = Database.table('watchlist')
    const isWatched = yield query
    .where({userID: userID, movieID: movieID})

    // Do not process if already added
    if (isWatched.length > 0) {
      response.status(304).send()
    }

    // Create watchlist item
    let watchlist = new Watchlist()
    watchlist.userID = userID
    watchlist.movieID = movieID
    let result = yield watchlist.save()

    // Send response
    if (result) {

      // Get database handle
      const movieQuery = Database.table('movie')

      // Get movie data
      const movie = yield movieQuery
      .table('movie')
      .where('movieID', movieID)

      // Send status
      response.status(201).send(movie)

    } else {

      // Return error
      response.status(500).send(
        {message: 'There was an error while adding movie to watchlist.'}
      )
    }
  }

  // Marks the specified movie as seen
  * deleteWatchlist (request, response) {

    // vars
    let isDeleted = false

    // Get data from request
    const movieID = request.param('movie_id')
    const userID = request.param('user_id')

    // Find movie in watchlist
    const query = Database.table('watchlist')
    const watchlist = yield query
    .where({userID: userID, movieID: movieID})

    // Delete
    if (watchlist.length > 0) {
      let id = watchlist[0].watchlistID
      const item = yield Watchlist.findBy('watchlistID', id)
      isDeleted = yield item.delete()
    }

    // Do not process if already deleted
    if (isDeleted) {
      response.status(200).send()
    } else {
      response.status(404).send()
    }
  }
}

module.exports = UserController
