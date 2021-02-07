const query = require("../db");
const { multipleColumnSet } = require("../utils");

class BaseModel {
  tableName = "";

  find = async (params = {}) => {
    let sql = `SELECT * FROM ${this.tableName}`;

    if (!Object.keys(params).length) {
      return await query(sql);
    }

    const { columnSet, values } = multipleColumnSet(params);
    sql += ` WHERE ${columnSet}`;

    return await query(sql, [...values]);
  };

  findOne = async (params) => {
    const { columnSet, values } = multipleColumnSet(params);

    const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

    const result = await query(sql, [...values]);

    // return back the first row
    return result[0];
  };

  create = async (params) => {
    const keys = Object.keys(params);
    const sql = `INSERT INTO ${this.tableName}
        (${keys.join(",")}) VALUES (${Array(keys.length).fill("?").join(",")})`;

    const result = await query(sql, Object.values(params));
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  update = async (params, id) => {
    const { columnSet, values } = multipleColumnSet(params);

    const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id = ?`;

    const result = await query(sql, [...values, id]);

    return result;
  };

  delete = async (id) => {
    const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
    const result = await query(sql, [id]);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };
}

module.exports = BaseModel;