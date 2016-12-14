'use strict'

/************************************************************
  Description:   Navigation controller
  Author:        Manuel Ramirez <manuelr@bluetrailsoft.com>
  Copyright:     2016 Blue Trail Software.
  Created:       11-25-2016
  Updated:       11-25-2016
  Updated by:    Manuel Ramirez
*************************************************************/

const Movie = use('App/Model/Movie')
const Database = use('Database')

class NavigationController {

  // Do no do anything on this controller, team, it's really really not performant!!!
  * navigation (request, response) {

    let navigation = []

    // Get userID from request
    const userID = request.param('user_id')

    // Get user table handle
    const query = Database.table('users')

    // Get all movies
    const movies = yield query
      .table('movie')
      .count('movieID as id')

    // Get user's favorite movies
    const favorites = yield query
      .table('favorite')
      .where('userID', userID)
      .count('movieID as id')

    // Get user's seen movies
    const seen = yield query
      .table('seen')
      .where('userID', userID)
      .count('movieID as id')

    // Get user's watchlist movies
    const watchlist = yield query
      .table('watchlist')
      .where('userID', userID)
      .count('movieID as id')

    // Add all movies item
    navigation.push({
      index: 0,
      title: "All Movies",
      count: movies[0].id,
      Url: "/all"
    })

    // Add seen movies item
    navigation.push({
      index: 1,
      title: "Seen",
      count: seen[0].id,
      Url: "/seen"
    })

    // Add favorites item
    navigation.push({
      index: 2,
      title: "Favorites",
      count: favorites[0].id,
      Url: "/favorites"
    })

    // Add watchlist item
    navigation.push({
      index: 3,
      title: "Watchlist",
      count: watchlist[0].id,
      Url: "/watchlist"
    })

    // Send response
    response.status(200).send(
      { navigation: navigation }
    )

  }
}

module.exports = NavigationController
