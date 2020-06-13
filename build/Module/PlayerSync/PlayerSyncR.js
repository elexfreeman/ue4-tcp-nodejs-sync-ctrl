"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerMoveToLoc = exports.MoveToLoc = exports.GetPlayerLoc = exports.PlayerExitWorld = exports.PlayerEnterWorld = void 0;
/**
 * broadcast all msg
 * server ==> players
 */
var PlayerEnterWorld;
(function (PlayerEnterWorld) {
    PlayerEnterWorld.sRequestRoute = 'player_enter_world_req';
    PlayerEnterWorld.sResponseRoute = 'player_enter_world_resp';
})(PlayerEnterWorld = exports.PlayerEnterWorld || (exports.PlayerEnterWorld = {}));
/**
 * server ==> players
 */
var PlayerExitWorld;
(function (PlayerExitWorld) {
    PlayerExitWorld.sRequestRoute = 'player_exit_world_req';
    PlayerExitWorld.sResponseRoute = 'player_exit_world_resp';
})(PlayerExitWorld = exports.PlayerExitWorld || (exports.PlayerExitWorld = {}));
/**
 * Location of player player ctrl
 * server ==> player
 */
var GetPlayerLoc;
(function (GetPlayerLoc) {
    GetPlayerLoc.sRequestRoute = 'get_player_loc_req';
    GetPlayerLoc.sResponseRoute = 'get_player_loc_resp';
})(GetPlayerLoc = exports.GetPlayerLoc || (exports.GetPlayerLoc = {}));
/**
 * player move to location
 * player ==> server
 */
var MoveToLoc;
(function (MoveToLoc) {
    MoveToLoc.sRequestRoute = 'move_to_loc_req';
    MoveToLoc.sResponseRoute = 'move_to_resp';
})(MoveToLoc = exports.MoveToLoc || (exports.MoveToLoc = {}));
/**
 * Broadcast all, player move to location
 * server ==> players
 */
var PlayerMoveToLoc;
(function (PlayerMoveToLoc) {
    PlayerMoveToLoc.sRequestRoute = 'move_to_loc_req';
    PlayerMoveToLoc.sResponseRoute = 'move_to_resp';
})(PlayerMoveToLoc = exports.PlayerMoveToLoc || (exports.PlayerMoveToLoc = {}));
//# sourceMappingURL=PlayerSyncR.js.map