import { fBaseRequest } from "../Sys/ResponseSys";
import * as net from "net";
/**
 *  Router for client
 * @param request
 * @param socket
 * @param sToken
 */
export declare const faRouter: (request: fBaseRequest, socket: net.Socket, sToken: string) => Promise<void>;
