import * as AAClasses from '@a-a-game-studio/aa-classes/lib';
/**
 * Knex Query Writing Wrapper
 */
export declare class KnexSys {
    errorSys: AAClasses.Components.ErrorSys;
    constructor(errorSys: AAClasses.Components.ErrorSys);
    /**
     * Get string from SQL raw query
     * @param data
     */
    fOneRaw(data: any): any;
    /**
     * Get list from SQL raw query
     * @param data
     */
    fListRaw(data: any): Promise<any>;
    /**
     * Get field from SQL raw query
     * @param data
     * @param sField
     */
    fFieldRaw(sField: string, data: any): number | string | boolean | bigint;
    /**
     * Get row from SQL builder query
     * @param data
     */
    fOne(data: any): Promise<any>;
    /**
     * List
     * @param data
     */
    fList(data: any): Promise<any>;
    /**
     * Get field from SQL builder query
     * @param sField
     * @param data
     */
    fField(sField: string, data: any): Promise<number | string | boolean | bigint>;
}
