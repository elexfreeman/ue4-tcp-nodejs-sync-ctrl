import * as net from "net";
import { aSocketClient } from "./db";


/**
 * Basic client response
 */
export interface BaseResponseI {
    sRoute: string;
    ok: boolean;
    data: any;
    errors: any;
}

/**
 * basic request from client
 */
export interface fBaseRequest {
    sClientToken: string;
    sRoute: string;
    data: any;
    ok?: boolean;
    error?: any;
}

/**
 * Parsing request from client   server <== client
 * @param data 
 * @param sClientToken 
 */
export const fRequest = (data: Buffer, sClientToken: string): fBaseRequest => {
    let out: fBaseRequest = {
        sRoute: '',
        data: null,
        ok: true,
        error: null,
        sClientToken: sClientToken,
    }

    try {
        const req: fBaseRequest = JSON.parse(data.toString());

        if (req.sRoute) {
            out.sRoute = req.sRoute;
        }

        if (req.data) {
            out.data = req.data;
        }

        if (req.ok) {
            out.ok = true;
        }

    } catch (e) {
        out.ok = false;
        out.error = e;
    }

    return out;
}

/**
 * response from server ==> client
 * @param socket 
 * @param response 
 */
export const fResponse = (socket: net.Socket, response: BaseResponseI) => {
    socket.write(JSON.stringify(response))
}

/**
 * Send msg to all clients
 * @param socket 
 * @param response 
 */
export const fBroadcast = (response: BaseResponseI) => {

    // The fastest cycle-busting object elements
    const aClientKey = Object.keys(aSocketClient);
    for (let i = 0; i < aClientKey.length; i++) {
        // the socket may not exist, try..catch help us
        try {
            aSocketClient[aClientKey[i]].socket.write(JSON.stringify(response));
        } catch {}
    }
}
