'use strict';
module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('Person', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    Person.associate = function (models) {
        Person.belongsToMany(models.Course, {
            foreignKey: 'personId',
            through: 'Enrollments',
            otherKey: 'courseId'
        })
    };
    return Person;
};
