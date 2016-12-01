'use strict'

const Lucid = use('Lucid')

class Favorite extends Lucid {

  // Set table
  static get table () {
    return 'favorite'
  }

  // Set primary key
  static get primaryKey () {
    return 'favoriteID'
  }
}

module.exports = Favorite
