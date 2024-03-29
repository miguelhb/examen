'use strict';

module.exports = {
	up(queryInterface, Sequelize){
		return queryInterface.createTable(
			'favourites',
			{
				quizId: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					unique:"compositeKey",
					allowNull: false
			},
			userId: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				unique: "compositeKey",
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		},
		{
			sync: {force: true}
		}
	);
},
down(queryInterface, Sequelize){
	return queryInterface.dropTable('favourites');
	}
};



