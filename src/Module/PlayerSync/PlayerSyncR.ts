import { BaseResponseI } from "../Sys/ResponseSys";
import { VectorI } from "../../Lib/Interfaces";


/**
 * broadcast all msg
 * server ==> players
 */
export namespace PlayerEnterWorld {

   export const sRequestRoute = 'player_enter_world_req';
   export const sResponseRoute = 'player_enter_world_resp';

   export interface RequestI { }

   export interface ResponseI extends BaseResponseI {
      sToken: string;
    }
}



/**
 * server ==> players
 */
export namespace PlayerExitWorld {

   export const sRequestRoute = 'player_exit_world_req';
   export const sResponseRoute = 'player_exit_world_resp';

   export interface RequestI {
   }


   export interface ResponseI extends BaseResponseI { }
}



/**
 * Location of player player ctrl
 * server ==> player
 */
export namespace GetPlayerLoc {

   export const sRequestRoute = 'get_player_loc_req';
   export const sResponseRoute = 'get_player_loc_resp';

   export interface RequestI { }

   export interface ResponseI extends BaseResponseI {
      data: {
         loc: VectorI;
      }
   }
}


/**
 * player move to location
 * player ==> server
 */
export namespace MoveToLoc {

   export const sRequestRoute = 'move_to_loc_req';
   export const sResponseRoute = 'move_to_resp';

   export interface RequestI {

   }

   export interface ResponseI extends BaseResponseI {
      data: {
         loc: VectorI;
      }
   }
}


/**
 * Broadcast all, player move to location
 * server ==> players
 */
export namespace srvPlayerMoveToLoc {

   export const sRoute = 'srv_move_to_loc';

   export interface input {
      loc: VectorI;
      sToken: string;
   }

   export interface ResponseI extends BaseResponseI {
      data: {
         loc: VectorI;
         sToken: string;
      }
   }
}


/**
 * client send player move to location
 * client ==> server
 */
export namespace clientPlayerMoveToLoc {

   export const sRoute = 'client_move_to_loc';

   export interface input {
      loc: VectorI;
      sToken: string;
   }

}






