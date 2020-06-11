import { Components  } from '@a-a-game-studio/aa-classes/lib';
import * as net from "net";
import { fBaseRequest, fResponse } from '../Sys/ResponseSys';




/**
 * Sync players controllers
 */
export const faPlayerSyncCtrl = async (socket: net.Socket, request: fBaseRequest, errorSys: Components.ErrorSys, db: any) => {


   console.log('faUserLogin msg', request.data);

}