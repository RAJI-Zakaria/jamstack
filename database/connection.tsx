import { Sequelize } from 'sequelize';
import config from '../config/db.json';
 

const sequelizeOptions: any = {
  dialect: 'mysql', 
  host: config.production.host,
  database: config.production.database,
  username: config.production.username,
  password: config.production.password,
};

const sequelize = new Sequelize(sequelizeOptions);

const connection = sequelize;

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error.message);
  alert('Unable to connect to the database');
  process.exit(1); // Terminate the process or handle the error as needed
});


export default connection;
