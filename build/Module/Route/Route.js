"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.faRouter = void 0;
const ResponseSys_1 = require("../Sys/ResponseSys");
const UserR_1 = require("../User/UserR");
const UserCtrl_1 = require("../User/UserCtrl");
const db_1 = require("../Sys/db");
const AAClasses = __importStar(require("@a-a-game-studio/aa-classes/lib"));
/**
 *  Router for client
 * @param request
 * @param socket
 * @param sToken
 */
exports.faRouter = async (request, socket, sToken) => {
    const errorSys = new AAClasses.Components.ErrorSys();
    /* connect login controller */
    if (request.sRoute == UserR_1.UserLogin.sRequestRoute) {
        await UserCtrl_1.faUserLogin(socket, request, errorSys, db_1.db);
    }
    else {
        /* if the route did not match, sends empty line */
        ResponseSys_1.fResponse(socket, {
            sRoute: '',
            ok: true,
            data: {},
            errors: [],
        });
    }
};
//# sourceMappingURL=Route.js.map