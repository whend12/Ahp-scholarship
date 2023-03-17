import { Sequelize } from 'sequelize';


const db = new Sequelize ('ahp_node','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;