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
Route.get('/movies', 'MovieController.list')    // Lists all movies

// Favorites resource
Route.get('/user/:id/favorites', 'UserController.listFavorites')              // Lists user's favorite movies
Route.post('/user/:user_id/favorites', 'UserController.createFavorite')       // creates user's favorite movies
Route.delete('/user/:user_id/favorites/:movie_id', 'UserController.deleteFavorite')    // deletes an user's favorite movie

// Seen resource
Route.get('/user/:id/seen', 'UserController.listSeen')                    // Lists user' seen movies
Route.post('/user/:id/seen', 'UserController.createSeen')                 // creates user' seen movie
Route.delete('/user/:id/seen/:idSeen', 'UserController.deleteSeen')       // deletes an user' seen movie

// Watchlist resource
Route.get('/user/:id/watchlist', 'UserController.watchlist')                      // Lists user' watchlist
Route.post('/user/:id/watchlist', 'UserController.createWatchlist')               // creates user' watchlist entry
Route.delete('/user/:id/watchlist/:idWlist', 'UserController.deleteWatchlist')    // deletes an existing user's watchlist entry
