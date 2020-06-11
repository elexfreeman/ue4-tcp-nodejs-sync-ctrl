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
const net = __importStar(require("net"));
const moment = require('moment');
const HashFunc_1 = require("./Lib/HashFunc");
const db_1 = require("./Module/Sys/db");
const AAClasses = __importStar(require("@a-a-game-studio/aa-classes/lib"));
const UserCtrl_1 = require("./Module/User/UserCtrl");
const ResponseSys_1 = require("./Module/Sys/ResponseSys");
const UserR_1 = require("./Module/User/UserR");
/**
 * The current date
 */
const fGetNowDataStr = () => moment().format('DD.MM.YYYY HH:mm:ss');
/**
 * Server handler
 */
const server = net.createServer((socket) => {
    /* we generate a token to the client */
    const clientToken = HashFunc_1.fGenerateToken();
    // add client info to shared memmory
    db_1.aSocketClient[clientToken] = {
        user: null,
        socket: socket,
    };
    setInterval(() => {
        ResponseSys_1.fBroadcast({
            sRoute: '',
            ok: true,
            data: clientToken,
            errors: [],
        });
    }, 3000);
    console.log(`[${fGetNowDataStr()}] Client connect ${clientToken}`);
    /* receiving data from a client */
    socket.on('data', async (data) => {
        const errorSys = new AAClasses.Components.ErrorSys();
        console.log(`[${fGetNowDataStr()}] Data from [${clientToken}]: `, data.toString());
        // router
        const request = ResponseSys_1.fRequest(data, clientToken);
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
    });
    /* client disconnect */
    socket.on('end', () => {
        delete db_1.aSocketClient[clientToken];
        console.log(`[${fGetNowDataStr()}] Client ${clientToken} disconnect`);
    });
    /* socket error */
    socket.on('error', (err) => {
        console.log(`[${fGetNowDataStr()}] Error:`, err);
    });
});
/* server error */
server.on('error', (err) => {
    console.log(`[${fGetNowDataStr()}] Error:`, err);
});
/* start the server */
server.listen({
    port: 3007, family: 'IPv4', address: '127.0.0.1'
}, () => {
    console.log('opened server on', server.address());
});
//# sourceMappingURL=tcpSrvLogin.js.map