'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('user', {
    columns: {
      id: {
        type: 'int',
        autoIncrement: true
      },
      username: 'string',
      email: 'string',
      password: 'string',
      first_name: 'string',
      last_name: 'string',
      longitude: 'int',
      latitude: 'int'
    }, callback
  })

exports.down = function(db) {
  db.dropTable('user', function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports._meta = {
  "version": 1
  };
}
