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
const ResponseSys_1 = require("./Module/Sys/ResponseSys");
const PlayerSyncCtrl_1 = require("./Module/PlayerSync/PlayerSyncCtrl");
const Route_1 = require("./Module/Route/Route");
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
        loc: null,
    };
    console.log(`[${fGetNowDataStr()}] Client connect ${clientToken}`);
    // say all new player enter
    PlayerSyncCtrl_1.faPlayerEnterWorld(clientToken);
    /* receiving data from a client */
    socket.on('data', async (data) => {
        console.log(`[${fGetNowDataStr()}] Data from [${clientToken}]: `, data.toString());
        // router
        await Route_1.faRouter(ResponseSys_1.fRequest(data, clientToken), socket, clientToken);
    });
    /* client disconnect */
    socket.on('end', () => {
        delete db_1.aSocketClient[clientToken];
        console.log(`[${fGetNowDataStr()}] Client ${clientToken} disconnect`);
        // say all player exit
        PlayerSyncCtrl_1.faPlayerExitWorld(clientToken);
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