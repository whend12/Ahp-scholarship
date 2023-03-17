import { Sequelize } from "sequelize";
import database from './config/database.js'

const { DataTypes } = Sequelize;

const Criteria = database.define('criteria',{
    id:{
        type: DataTypes.INTEGER,
    },
    parent_id:{
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING
    },
    weight:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Criteria;