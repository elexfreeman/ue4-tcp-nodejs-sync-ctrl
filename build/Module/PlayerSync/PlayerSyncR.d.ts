import { BaseResponseI } from "../Sys/ResponseSys";
import { VectorI } from "../../Lib/Interfaces";
/**
 * broadcast all msg
 * server ==> players
 */
export declare namespace PlayerEnterWorld {
    const sRequestRoute = "player_enter_world_req";
    const sResponseRoute = "player_enter_world_resp";
    interface RequestI {
    }
    interface ResponseI extends BaseResponseI {
        sToken: string;
    }
}
/**
 * server ==> players
 */
export declare namespace PlayerExitWorld {
    const sRequestRoute = "player_exit_world_req";
    const sResponseRoute = "player_exit_world_resp";
    interface RequestI {
    }
    interface ResponseI extends BaseResponseI {
    }
}
/**
 * Location of player player ctrl
 * server ==> player
 */
export declare namespace GetPlayerLoc {
    const sRequestRoute = "get_player_loc_req";
    const sResponseRoute = "get_player_loc_resp";
    interface RequestI {
    }
    interface ResponseI extends BaseResponseI {
        data: {
            loc: VectorI;
        };
    }
}
/**
 * player move to location
 * player ==> server
 */
export declare namespace MoveToLoc {
    const sRequestRoute = "move_to_loc_req";
    const sResponseRoute = "move_to_resp";
    interface RequestI {
    }
    interface ResponseI extends BaseResponseI {
        data: {
            loc: VectorI;
        };
    }
}
/**
 * Broadcast all, player move to location
 * server ==> players
 */
export declare namespace PlayerMoveToLoc {
    const sRequestRoute = "move_to_loc_req";
    const sResponseRoute = "move_to_resp";
    interface RequestI {
    }
    interface ResponseI extends BaseResponseI {
        data: {
            loc: VectorI;
            sToken: string;
        };
    }
}
