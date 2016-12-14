'use strict'

const Lucid = use('Lucid')

class Watchlist extends Lucid {

  // Set table
  static get table () {
    return 'watchlist'
  }

  // Set primary key
  static get primaryKey () {
    return 'watchlistID'
  }
}

module.exports = Watchlist
