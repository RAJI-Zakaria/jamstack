import { Model, DataTypes } from 'sequelize';
import connection from '../connection'; 

 

class Todo extends Model<any> {
  public id!: number | null;
  public task!: string;
  public description!: string | null;
  public deadline!: Date | null;
  public user_id!: number | null;
 
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize: connection,
    modelName: 'Todo',
    tableName: 'todo', 
    timestamps: false,  
  }
);

 
export default Todo;
