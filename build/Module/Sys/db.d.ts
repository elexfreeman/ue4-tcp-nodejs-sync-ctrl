/// <reference types="node" />
import { UserI } from "../User/UserE";
import * as net from "net";
import { VectorI } from "../../Lib/Interfaces";
export declare const db: any;
export interface ClientI {
    user?: UserI;
    loc: VectorI;
    socket: net.Socket;
}
export interface SocketClientI {
    [key: string]: ClientI;
}
export declare const aSocketClient: SocketClientI;
