const {Person, Course} = require('../models');

async function lookupPersonAndCourses(personId) {
    // Find person and associated courses by `personId`
    const person = await Person.findByPk(personId, {include: Course});
    return person;
}

async function lookupPersonByLastName(lastName) {
    // Find person by `lastName`
    const personByLastName = await Person.findAll({
        where: {
            lastName
        }
    })
    return personByLastName;
}

async function lookupCoursesByPersonEmail(email) {
    // Find person by `email` and return associated courses
    const personByEmail = await Person.findOne({
        where: {
            email
        },
        include: Course
    })
    return personByEmail.Courses;
}

module.exports = {
    lookupPersonAndCourses,
    lookupPersonByLastName,
    lookupCoursesByPersonEmail,
};
