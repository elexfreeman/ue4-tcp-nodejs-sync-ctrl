import { conf } from "../Config/Config";
import { UserI } from "../User/UserE";
import * as net from "net";

export const db = require('knex')(conf.mysql); // knex connect

export interface ClientI {
    user?: UserI, // user info
    socket: net.Socket, // pointer to client socket
}

// clients
export interface SocketClientI {
    [key: string]: ClientI;
}

/* clients */
export const aSocketClient: SocketClientI = {};