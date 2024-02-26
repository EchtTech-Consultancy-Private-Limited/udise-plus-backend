const client = require('../db/dbconfig')


class schoolCategoryModel {
    tableName = 'school_category_details';

    findAll = async () => {

        const sql = `SELECT * FROM ${this.tableName}`;
        const result = await client.query(sql);
        return result.rows;
    }

    getSchoolCategoryAndManagement =async ()=>{
        const sql = `SELECT details_of_category,code as cate_code,broad_category FROM ${this.tableName}`;
        const result = await client.query(sql);

        const sql_mgt = `SELECT management_details,code as mgt_code FROM school_management`;
        const result_mgt = await client.query(sql_mgt);
        return [...result.rows,...result_mgt.rows];
    }

}

module.exports = new schoolCategoryModel;