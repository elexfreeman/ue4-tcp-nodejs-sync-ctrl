import { BaseResponseI } from "../Sys/ResponseSys";
import { UserI } from "./UserE";
/**
 * User Login
 */
export declare namespace UserLogin {
    const sRequestRoute = "user_login_req";
    const sResponseRoute = "user_login_resp";
    interface RequestI {
        login: string;
        pswd: string;
    }
    interface ResponseI extends BaseResponseI {
        data: {
            token: string;
            user: UserI;
        };
    }
}
