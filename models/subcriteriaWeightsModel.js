import { Sequelize } from "sequelize";
import database from './config/database.js'

const { Datatypes } = Sequelize;

const SubcriteriaWeights = database.define('subcriteria_weights',{
    id:{
        type: Datatypes.INTEGER,
    },
    criteria_id:{
        type: Datatypes.INTEGER,
    },
    subcriteria_id:{
        type: Datatypes.INTEGER,
    },
    weight:{
        type: Datatypes.INTEGER
    }
},{
    freezeTableName: true
});

export default SubcriteriaWeights;