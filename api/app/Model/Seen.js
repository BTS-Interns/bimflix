'use strict'

const Lucid = use('Lucid')

class Seen extends Lucid {

  // Set table
  static get table () {
    return 'seen'
  }

  // Set primary key
  static get primaryKey () {
    return 'seenID'
  }
}

module.exports = Seen
