const BaseModel = require('./base.model');
class ProfileModel extends BaseModel{
  tableName = "Profile";
}

module.exports = new ProfileModel();
