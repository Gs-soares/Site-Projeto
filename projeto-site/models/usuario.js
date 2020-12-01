	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeUser',
			type: DataTypes.STRING,
			allowNull: true
		},
		login: {
			field: 'loginUser',
			type: DataTypes.STRING,
			allowNull: true
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
