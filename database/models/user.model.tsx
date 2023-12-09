import { Model, DataTypes } from 'sequelize';
import connection from '../connection'; 

 
class User extends Model<any> {
  public id!: number | null;
  public username!: string;
  public email!: string;
  public created_at!: Date;
 
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'User',
    tableName: 'user', 
    timestamps: false, 
  }
);

export default User;
