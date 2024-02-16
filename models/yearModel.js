const client = require('../db/dbconfig')


class YearDataModel {
    tableName = 'year_master';

    findAll = async (id) => {
      
        const sql = `SELECT * FROM ${this.tableName}`;
        const result = await client.query(sql);
        return result.rows;
    }
}

module.exports = new YearDataModel;