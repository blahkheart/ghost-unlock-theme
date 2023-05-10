const {createAddColumnMigration} = require('../../utils');

module.exports = createAddColumnMigration("members", "eth_address", {
  type: "string",
  nullable: true,
  maxlength: 64,
});


