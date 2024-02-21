const client = require('../db/dbconfig')


class schoolCategoryModel {
    tableName = 'school_category_details';

    findAll = async () => {
      
        const sql = `SELECT * FROM ${this.tableName}`;
        const result = await client.query(sql);
        return result.rows;
    }

}

module.exports = new schoolCategoryModel;