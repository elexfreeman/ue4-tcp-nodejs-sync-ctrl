"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conf = void 0;
exports.conf = {
    env: 'dev',
    mysql: {
        "client": "mysql",
        "connection": {
            "host": "localhost",
            "user": "root",
            "password": "12345",
            "database": "mydb" // имя базы
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
    redis: {
        "url": "redis://127.0.0.1:6379"
    },
};
//# sourceMappingURL=Config.sample.js.map