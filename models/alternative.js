import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize;

const Alternative = db.define('alternative',{
    id:{
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default Alternative;