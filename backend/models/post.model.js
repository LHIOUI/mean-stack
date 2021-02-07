const BaseModel = require('./base.model');
class PostModel extends BaseModel{
  tableName = "Post";
}

module.exports = new PostModel();
