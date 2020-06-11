"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexSys = void 0;
/**
 * Knex Query Writing Wrapper
 */
class KnexSys {
    constructor(errorSys) {
        this.errorSys = errorSys;
    }
    /**
     * Get string from SQL raw query
     * @param data
     */
    fOneRaw(data) {
        let ok = this.errorSys.isOk();
        let one = null;
        if (ok) { // We get the base row LIMIT 1
            try {
                one = data[0][0];
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'faOneRaw');
            }
        }
        return one;
    }
    /**
     * Get list from SQL raw query
     * @param data
     */
    async fListRaw(data) {
        let list = null;
        if (this.errorSys.isOk()) {
            try {
                list = data[0];
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'fListRaw');
            }
        }
        return list;
    }
    /**
     * Get field from SQL raw query
     * @param data
     * @param sField
     */
    fFieldRaw(sField, data) {
        let ok = this.errorSys.isOk();
        let field = null;
        if (this.errorSys.isOk()) {
            try {
                field = data[0][0][sField];
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'fFieldRaw');
            }
        }
        return field;
    }
    // ==========================================
    /**
     * Get row from SQL builder query
     * @param data
     */
    async fOne(data) {
        let ok = this.errorSys.isOk();
        let one = null;
        if (this.errorSys.isOk()) {
            try {
                one = data[0];
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'fOne');
            }
        }
        return one;
    }
    /**
     * List
     * @param data
     */
    async fList(data) {
        let list = null;
        if (this.errorSys.isOk()) {
            try {
                list = data;
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'fList');
            }
        }
        return list;
    }
    /**
     * Get field from SQL builder query
     * @param sField
     * @param data
     */
    async fField(sField, data) {
        let ok = this.errorSys.isOk();
        let field = null;
        if (this.errorSys.isOk()) {
            try {
                field = data[0][sField];
            }
            catch (e) {
                throw this.errorSys.throwDB(e, 'fField');
            }
        }
        return field;
    }
}
exports.KnexSys = KnexSys;
//# sourceMappingURL=KnexSys.js.map