import BaseSQL from "../Sys/BaseSQL";
import { UserI } from "./UserE";
export declare class UserSQL extends BaseSQL {
    /**
     * Gives a token by login and password
     * @param login
     * @param pass
     * @returns token
     */
    faGetTokenByLoginAndPass(sLogin: string, sPass: string): Promise<string>;
    /**
     * Gives a user
     * @param login
     * @param pass
     * @returns token
     */
    faGetUserInfoByToken(sToken: string): Promise<UserI>;
}
