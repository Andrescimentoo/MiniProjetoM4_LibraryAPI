import { DataTypes} from "sequelize";
import sequelize from "../dataBases/config.js";

const books_code = sequelize.define("books_database", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gener: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    target_audience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false //?
})

const books_experiences = sequelize.define("books_database", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gener: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    target_audience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false //?
})

const books_guides = sequelize.define("books_database", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gener: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    target_audience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false //?
})

export { books_code , books_experiences, books_guides };
