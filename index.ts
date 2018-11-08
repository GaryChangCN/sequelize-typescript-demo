import { Sequelize } from 'sequelize-typescript'
import Person from './models/person'

const sequelize = new Sequelize({
    database: 'dev',
    dialect: 'mysql',
    username: 'root',
    password: 'root',
    storage: ':memory:',
    operatorsAliases: false
})

sequelize.addModels([Person])

async function main () {
    await sequelize.sync()

    const person = new Person({
        name: 'wwwwww'
    })
    await person.save()
}

main()
