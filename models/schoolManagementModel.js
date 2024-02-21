const client = require('../db/dbconfig')


class schoolManagementModel {
    tableName = 'school_management';

    findAll = async () => {
      
        const sql = `SELECT * FROM ${this.tableName}`;
        const result = await client.query(sql);
        return result.rows;
    }

}

module.exports = new schoolManagementModel;