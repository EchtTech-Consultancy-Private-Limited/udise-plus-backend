const client = require('../db/dbconfig')


class DistrictDataModel {
    tableName = 'district_master';

    findAll = async () => {
      
        const sql = `SELECT * FROM ${this.tableName}`;
        const result = await client.query(sql);
        return result.rows;
    }

    findById = async (state_id) => {
      
        const sql = `SELECT * FROM ${this.tableName} where state_id = ${state_id} AND inityear = '2019-20'`;
        const result = await client.query(sql);
        return result.rows;
    }
}

module.exports = new DistrictDataModel;