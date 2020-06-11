"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faUserLoginV = void 0;
/**
 * Input data validator
 * @param data
 * @param cValidator
 */
exports.faUserLoginV = (data, cValidator) => {
    cValidator.fSetData(data.login)
        .fSetErrorString('login')
        .fExist()
        .fMinLen(3)
        .fMaxLen(50);
    cValidator.fSetData(data.pswd)
        .fSetErrorString('paswd')
        .fExist()
        .fMinLen(3)
        .fMaxLen(50);
    if (!cValidator.fIsOk()) {
        throw 'error';
    }
    return cValidator;
};
//# sourceMappingURL=UserV.js.map