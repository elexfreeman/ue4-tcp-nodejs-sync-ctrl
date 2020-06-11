"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fBroadcast = exports.fResponse = exports.fRequest = void 0;
const db_1 = require("./db");
/**
 * Parsing request from client   server <== client
 * @param data
 * @param sClientToken
 */
exports.fRequest = (data, sClientToken) => {
    let out = {
        sRoute: '',
        data: null,
        ok: true,
        error: null,
        sClientToken: sClientToken,
    };
    try {
        const req = JSON.parse(data.toString());
        if (req.sRoute) {
            out.sRoute = req.sRoute;
        }
        if (req.data) {
            out.data = req.data;
        }
        if (req.ok) {
            out.ok = true;
        }
    }
    catch (e) {
        out.ok = false;
        out.error = e;
    }
    return out;
};
/**
 * response from server ==> client
 * @param socket
 * @param response
 */
exports.fResponse = (socket, response) => {
    socket.write(JSON.stringify(response));
};
/**
 * Send msg to all clients
 * @param socket
 * @param response
 */
exports.fBroadcast = (response) => {
    // The fastest cycle-busting object elements
    const aClientKey = Object.keys(db_1.aSocketClient);
    for (let i = 0; i < aClientKey.length; i++) {
        // the socket may not exist, try..catch help us
        try {
            db_1.aSocketClient[aClientKey[i]].socket.write(JSON.stringify(response));
        }
        catch (_a) { }
    }
};
//# sourceMappingURL=ResponseSys.js.map