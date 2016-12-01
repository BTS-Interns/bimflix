'use strict'

const Lucid = use('Lucid')

class Movie extends Lucid {

  // Set table
  static get table () {
    return 'movie'
  }

  // Set primary key
  static get primaryKey () {
    return 'movieID'
  }

}

module.exports = Movie
