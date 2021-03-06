import { ConfI } from "./ConfigI";


export const conf: ConfI = {
    env: 'dev', 
    mysql: { 
        "client": "mysql",
        "connection": {
            "host": "localhost", 
            "user": "root", 
            "password": "12345", 
            "database": "ue4db" 
        },
        "pool": { "min": 0, "max": 7 },
        "migrations": {
            "tableName": "knex_migrations",
            "directory": "./lib/Infrastructure/SQL/Migrations"
        },
        "acquireConnectionTimeout": 60000
    },
    common: {
        port: 3007,
    },


    redis: { // Конфигруация редиса
        "url": "redis://127.0.0.1:6379"
    },

};
