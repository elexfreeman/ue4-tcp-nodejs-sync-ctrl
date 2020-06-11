"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faUserLogin = void 0;
const lib_1 = require("@a-a-game-studio/aa-components/lib");
const UserSQL_1 = require("./UserSQL");
const UserV_1 = require("./UserV");
const db_1 = require("../Sys/db");
const UserR_1 = require("./UserR");
const ResponseSys_1 = require("../Sys/ResponseSys");
/**
 * User controller
 */
exports.faUserLogin = async (socket, request, errorSys, db) => {
    const userSQL = new UserSQL_1.UserSQL(errorSys, db);
    let cValidator = new lib_1.FieldValidator(errorSys, {});
    let sToken = '';
    let user;
    try {
        const data = request.data;
        /* validate input */
        cValidator = UserV_1.faUserLoginV(data, cValidator);
        if (!cValidator.fIsOk()) {
            throw 'error';
        }
        /* we get a response from DB */
        sToken = await userSQL.faGetTokenByLoginAndPass(data.login, data.pswd);
        /* check if there is a token */
        cValidator.fSetErrorString('token')
            .fSetData(sToken)
            .fExist()
            .fMinLen(32)
            .fMaxLen(32);
        if (cValidator.fIsOk()) {
            user = await userSQL.faGetUserInfoByToken(sToken);
        }
    }
    catch (e) {
        /* everything is bad with the base */
        cValidator.fSetErrorString('all bad')
            .fSetData(null)
            .fExist(e);
    }
    /* we form the answer */
    const resp = {
        sRoute: UserR_1.UserLogin.sResponseRoute,
        ok: cValidator.fIsOk(),
        data: {
            token: sToken,
            user: user,
        },
        errors: cValidator.fGetErrorSys().getErrors()
    };
    /* send a message to the client */
    ResponseSys_1.fResponse(socket, resp);
    user.token = sToken;
    /* if everything is well written user information in the shared memory */
    if (cValidator.fIsOk()) {
        db_1.aSocketClient[request.sClientToken].user = user;
    }
    console.log('faUserLogin msg', request.data);
};
//# sourceMappingURL=UserCtrl.js.map