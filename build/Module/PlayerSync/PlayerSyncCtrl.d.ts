import { Components } from '@a-a-game-studio/aa-classes/lib';
import * as net from "net";
import { fBaseRequest } from '../Sys/ResponseSys';
/**
 * Sync players controllers
 */
export declare const faPlayerSyncCtrl: (socket: net.Socket, request: fBaseRequest, errorSys: Components.ErrorSys, db: any) => Promise<void>;
