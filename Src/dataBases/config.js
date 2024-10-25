import { Sequelize } from "sequelize"

const sequelize = new Sequelize("books_database","root","A19551947b",{
  host: "localhost",
  dialect: "mysql"
})

export default sequelize