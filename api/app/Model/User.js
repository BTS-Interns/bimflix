'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  // Set table
  static get table () {
    return 'user'
  }

  // Set primary key
  static get primaryKey () {
    return 'userID'
  }
}

module.exports = User
