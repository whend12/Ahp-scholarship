import { Sequelize } from "sequelize";
import database from './config/database.js'

const { DataTypes } = Sequelize;

const Ratings = database.define('ratings',{
    id:{
        type: DataTypes.INTEGER,
    },
    criteria_id:{
        type: DataTypes.INTEGER,
    },
    alternative_id:{
        type: DataTypes.INTEGER,
    },
    value:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Ratings;