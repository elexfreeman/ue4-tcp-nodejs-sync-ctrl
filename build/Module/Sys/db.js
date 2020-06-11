"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aSocketClient = exports.db = void 0;
const Config_1 = require("../Config/Config");
exports.db = require('knex')(Config_1.conf.mysql); // knex connect
/* clients */
exports.aSocketClient = {};
//# sourceMappingURL=db.js.map