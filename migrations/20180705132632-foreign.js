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

exports.up = function (db, callback) {
  db.addForeignKey('game_user_map', 'user', 'foreignkey',
    {
      'user_id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);


};

exports.up = function (db, callback) {
  db.addForeignKey('game_user_map', 'game_table', 'foreignkey',
    {
      'game_id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);

  db.addForeignKey('game_user_map', 'game_table', 'foreignkey',
    {
      'game_id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);

};





exports.down = function (db, callback) {

  db.dropTable('user', function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports._meta = {
  "version": 1
};
