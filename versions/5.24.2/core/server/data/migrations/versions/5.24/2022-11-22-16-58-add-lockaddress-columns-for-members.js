const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration("products", "lock_address", {
  type: "string",
  nullable: true,
  maxlength: 64,
});


