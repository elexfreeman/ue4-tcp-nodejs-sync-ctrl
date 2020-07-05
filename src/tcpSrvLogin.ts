import * as net from "net";
const moment = require('moment');

import { fGenerateToken } from "./Lib/HashFunc";
import { aSocketClient, db } from "./Module/Sys/db";
import * as AAClasses from '@a-a-game-studio/aa-classes/lib';
import { faUserLogin } from "./Module/User/UserCtrl";
import { fBaseRequest, fRequest, fResponse, fBroadcast } from "./Module/Sys/ResponseSys";
import { UserLogin } from "./Module/User/UserR";
import { faPlayerEnterWorld, faPlayerExitWorld } from "./Module/PlayerSync/PlayerSyncCtrl";
import { faRouter } from "./Module/Route/Route";

/**
 * The current date
 */
const fGetNowDataStr = (): string => moment().format('DD.MM.YYYY HH:mm:ss');

/**
 * Server handler
 */
const server = net.createServer((socket: net.Socket) => {

    /* we generate a token to the client */
    const clientToken = fGenerateToken();

    // add client info to shared memmory
    aSocketClient[clientToken] = {
        user: null,
        socket: socket,
        loc: null,
    };

    console.log(`[${fGetNowDataStr()}] Client connect ${clientToken}`);

    // say all new player enter
    faPlayerEnterWorld(clientToken);

    /* receiving data from a client */
    socket.on('data', async (data: Buffer) => {
        //console.log(`[${fGetNowDataStr()}] Data from [${clientToken}]: `, data.toString());
        // router
        await faRouter(fRequest(data, clientToken), socket, clientToken);       

    });

    /* client disconnect */
    socket.on('end', () => {
        delete aSocketClient[clientToken];
        console.log(`[${fGetNowDataStr()}] Client ${clientToken} disconnect`);
        // say all player exit
        faPlayerExitWorld(clientToken);
    });

    /* socket error */
    socket.on('error', (err) => {
        console.log(`[${fGetNowDataStr()}] Error:`, err);
    });

});

/* server error */
server.on('error', (err: any) => {
    console.log(`[${fGetNowDataStr()}] Error:`, err);
});


/* start the server */
server.listen({
    port: 3007, family: 'IPv4', address: '127.0.0.1'
}, () => {
    console.log('opened server on', server.address());
});