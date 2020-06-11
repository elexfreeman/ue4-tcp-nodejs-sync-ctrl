/// <reference types="node" />
import * as net from "net";
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
export declare const fRequest: (data: Buffer, sClientToken: string) => fBaseRequest;
/**
 * response from server ==> client
 * @param socket
 * @param response
 */
export declare const fResponse: (socket: net.Socket, response: BaseResponseI) => void;
/**
 * Send msg to all clients
 * @param socket
 * @param response
 */
export declare const fBroadcast: (response: BaseResponseI) => void;
