'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Movies resource
Route.get('/users/:user_id/navigation', 'NavigationController.navigation')    // returns navigation data

// Movies resource
Route.get('/movies', 'MovieController.list')    // Lists all movies

// Users resource
Route.get('/users/:user_id', 'UserController.getUser')              // Lists user's favorite movies
Route.post('/users', 'UserController.createUser')              // Lists user's favorite movies

// Favorites resource
Route.get('/users/:user_id/favorites', 'UserController.listFavorites')              // Lists user's favorite movies
Route.post('/users/:user_id/favorites', 'UserController.createFavorite')       // creates user's favorite movies
Route.delete('/users/:user_id/favorites/:movie_id', 'UserController.deleteFavorite')    // deletes an user's favorite movie

// Seen resource
Route.get('/users/:user_id/seen', 'UserController.listSeen')                    // Lists user' seen movies
Route.post('/users/:user_id/seen', 'UserController.createSeen')                 // creates user' seen movie
Route.delete('/users/:user_id/seen/:movie_id', 'UserController.deleteSeen')       // deletes an user' seen movie

// Watchlist resource
Route.get('/users/:user_id/watchlist', 'UserController.listWatchlist')                      // Lists user' watchlist
Route.post('/users/:user_id/watchlist', 'UserController.createWatchlist')               // creates user' watchlist entry
Route.delete('/users/:user_id/watchlist/:movie_id', 'UserController.deleteWatchlist')    // deletes an existing user's watchlist entry
