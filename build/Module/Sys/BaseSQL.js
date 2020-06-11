"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// System services
const KnexSys_1 = require("./KnexSys");
/**
 * SQL
 */
class BaseSQL {
    constructor(errorSys, db) {
        this.knexSys = new KnexSys_1.KnexSys(errorSys);
        this.errorSys = errorSys;
        this.db = db; // knex connect
    }
}
exports.default = BaseSQL;
//# sourceMappingURL=BaseSQL.js.map