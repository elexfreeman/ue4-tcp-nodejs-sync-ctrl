import { Components } from '@a-a-game-studio/aa-classes/lib';
import * as net from "net";
import { fBaseRequest } from '../Sys/ResponseSys';
/**
 * User controller
 */
export declare const faUserLogin: (socket: net.Socket, request: fBaseRequest, errorSys: Components.ErrorSys, db: any) => Promise<void>;
