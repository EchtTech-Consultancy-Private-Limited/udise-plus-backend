const client = require('../db/dbconfig')


class StateDataModel {
    tableName = 'state_master';

    findAll = async () => {
        const sql = `SELECT * FROM ${this.tableName} WHERE id IN (SELECT MIN(id) FROM ${this.tableName} GROUP BY state_name) ORDER BY state_name ASC`;
        const result = await client.query(sql);
        return result.rows;
    }
}

module.exports = new StateDataModel;