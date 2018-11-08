import {Table, Column, Model, HasMany} from 'sequelize-typescript'

@Table
class Person extends Model<Person> {

  @Column
  name: string

}

export default Person
