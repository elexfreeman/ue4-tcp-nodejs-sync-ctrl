"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSQL = void 0;
const BaseSQL_1 = __importDefault(require("../Sys/BaseSQL"));
const UserE_1 = require("./UserE");
class UserSQL extends BaseSQL_1.default {
    /**
     * Gives a token by login and password
     * @param login
     * @param pass
     * @returns token
     */
    async faGetTokenByLoginAndPass(sLogin, sPass) {
        let res = '';
        let sql = `
            SELECT ut.token FROM ${UserE_1.UserE.NAME} u
            JOIN ${UserE_1.UserTokenE.NAME} ut ON u.id=ut.id_user
            WHERE            
                u.login= :login
            AND
                u.pswd= :pswd 
            LIMIT 1
        `;
        try {
            let result = await this.db.raw(sql, {
                'login': sLogin,
                //'pswd': HashFunc.fPassToHash(sPass),  // example
                'pswd': sPass,
            });
            res = result[0][0]['token'];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'get_token_by_login_and_pass', 'Failed to get token by login and password');
        }
        return res;
    }
    /**
     * Gives a user
     * @param login
     * @param pass
     * @returns token
     */
    async faGetUserInfoByToken(sToken) {
        let res;
        let sql = `
            SELECT u.id, u.user_name, u.login FROM ${UserE_1.UserE.NAME} u
            JOIN ${UserE_1.UserTokenE.NAME} ut ON u.id=ut.id_user
            WHERE            
                ut.token = :token
            LIMIT 1
        `;
        try {
            let result = await this.db.raw(sql, {
                'token': sToken,
            });
            res = result[0][0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'get_user_info_by_token', 'Failed to get user by token');
        }
        return res;
    }
}
exports.UserSQL = UserSQL;
//# sourceMappingURL=UserSQL.js.map