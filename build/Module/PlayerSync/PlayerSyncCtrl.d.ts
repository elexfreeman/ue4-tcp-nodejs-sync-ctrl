import { Components } from '@a-a-game-studio/aa-classes/lib';
import * as net from "net";
import { fBaseRequest } from '../Sys/ResponseSys';
/**
 * когда подключается клиент
 * @param sToken
 */
export declare const faPlayerEnterWorld: (sToken: string) => Promise<void>;
/**
 * Когда клиент отключается
 * @param sToken
 */
export declare const faPlayerExitWorld: (sToken: string) => Promise<void>;
/**
 * Sync players controllers
 */
export declare const faPlayerSyncCtrl: (socket: net.Socket, request: fBaseRequest, errorSys: Components.ErrorSys, db: any) => Promise<void>;
