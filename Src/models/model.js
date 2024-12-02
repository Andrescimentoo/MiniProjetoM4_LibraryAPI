import { DataTypes} from "sequelize";
import sequelize from "../dataBases/config.js";

const dataCodes = sequelize.define("books_Code", {
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

const dataExperiences = sequelize.define("books_experiences", {
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

const dataGuides = sequelize.define("books_guides", {
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

export { dataCodes, dataExperiences, dataGuides };
