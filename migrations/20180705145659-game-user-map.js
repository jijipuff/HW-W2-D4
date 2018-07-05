'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  db.createTable('game_user_map', {
    columns: {
      id: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: 'int',
        autoIncrement: true
      },
      game_id: 'int',
      type: 'int',
      autoIncrement: true
    },
    user_status: 'string',
    longitude: 'int',
    latitude: 'int',
    role: 'string',
    timer: 'int'
  }, callback
);

  exports.down = function (db) {
    db.dropTable('user', function(err) {
      if (err) return callback(err);
      return callback();
    });

  };

  exports._meta = {
    "version": 1
  };
}
