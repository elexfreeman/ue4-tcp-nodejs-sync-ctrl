import { fBaseRequest, fResponse } from "../Sys/ResponseSys";
import { UserLogin } from "../User/UserR";
import * as PlayerSyncR from "../PlayerSync/PlayerSyncR"
import * as net from "net";
import { faUserLogin } from "../User/UserCtrl";

import { db } from "../Sys/db";
import * as AAClasses from '@a-a-game-studio/aa-classes/lib';
import { faPlayerMoveToLocCtrl } from "../PlayerSync/PlayerSyncCtrl";


/**
 *  Router for client
 * @param request 
 * @param socket 
 * @param sToken 
 */
export const faRouter = async (request: fBaseRequest, socket: net.Socket, sToken: string) => {
    const errorSys = new AAClasses.Components.ErrorSys();

    /* connect login controller */
    if (request.sRoute == UserLogin.sRequestRoute) {
        await faUserLogin(socket, request, errorSys, db);
    } else if (request.sRoute == PlayerSyncR.clientPlayerMoveToLoc.sRoute) {
        await faPlayerMoveToLocCtrl(socket, request, errorSys, db);
    } else {
        /* if the route did not match, sends empty data */
        fResponse(socket, {
            sRoute: '',
            ok: true,
            data: {},
            errors: [],
        });
    }

}