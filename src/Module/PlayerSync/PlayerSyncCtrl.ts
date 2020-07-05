import { Components } from '@a-a-game-studio/aa-classes/lib';
import * as net from "net";
import { fBaseRequest, fResponse, fBroadcast } from '../Sys/ResponseSys';

import * as PlayerSyncR from "./PlayerSyncR";


/**
 * when the client connects
 * @param sToken 
 */
export const faPlayerEnterWorld = async (sToken: string) => {
   console.log('PlayerEnterWorld');

   fBroadcast({
      ok: true,
      sRoute: PlayerSyncR.PlayerEnterWorld.sResponseRoute,
      data: {
         sToken: sToken,
      },
      errors: null,
   }, sToken)

}

/**
 * When the client disconnects
 * @param sToken 
 */
export const faPlayerExitWorld = async (sToken: string) => {
   console.log('PlayerExitWorld');

   fBroadcast({
      ok: true,
      sRoute: PlayerSyncR.PlayerExitWorld.sResponseRoute,
      data: {
         sToken: sToken,
      },
      errors: null,
   }, sToken);

}



/**
 * Sync players controllers
 */
export const faPlayerMoveToLocCtrl = async (socket: net.Socket, request: fBaseRequest, errorSys: Components.ErrorSys, db: any) => {
   console.log('faPlayerMoveToLocCtrl msg', request);
}