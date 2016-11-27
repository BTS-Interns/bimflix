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
Route.get('/user/:idUser/favorites', 'UserController.favorites')              // Lists user's favorite movies
Route.post('/user/:idUser/favorites', 'UserController.favorites')             // creates user's favorite movies
Route.put('/user/:idUser/favorites/:idFav', 'UserController.favorites')       // updates an user's favorite movie
Route.delete('/user/:idUser/favorites/:idFav', 'UserController.favorites')    // deletes an user's favorite movie

// Seen resource
Route.get('/user/:idUser/seen', 'UserController.listSeen')                    // Lists user' seen movies
Route.post('/user/:idUser/seen', 'UserController.createSeen')                 // creates user' seen movie
Route.put('/user/:idUser/seen/:idSeen', 'UserController.updateSeen')          // updates an user' seen movie
Route.delete('/user/:idUser/seen/:idSeen', 'UserController.deleteSeen')       // deletes an user' seen movie

// Watchlist resource
Route.get('/user/:idUser/watchlist', 'UserController.watchlist')                      // Lists user' watchlist
Route.post('/user/:idUser/watchlist', 'UserController.createWatchlist')               // creates user' watchlist entry
Route.put('/user/:idUser/watchlist/:idWlist', 'UserController.updateWatchlist')       // updates an existing user's watchlist entry
Route.delete('/user/:idUser/watchlist/:idWlist', 'UserController.deleteWatchlist')    // deletes an existing user's watchlist entry
