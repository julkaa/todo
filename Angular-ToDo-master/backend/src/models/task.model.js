module.exports = (sequelize, Sequelize) => {
	const Task = sequelize.define('tasks', {
	  id: {
          type: Sequelize.INTEGER,
          primaryKey: true
      },
        text: {
		  type: Sequelize.STRING
      },
      user_id:{
        type:Sequelize.INTEGER
      },
      list_id: {
        type: Sequelize.INTEGER
    },
      done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
	  
    },
    {
        timestamps: false
    });
	
	return Task;
}
