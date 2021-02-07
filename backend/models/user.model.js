const BaseModel = require('./base.model');
class UserModel extends BaseModel{
  tableName = "User";
}

module.exports = new UserModel();
