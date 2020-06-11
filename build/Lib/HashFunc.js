"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fGenerateToken = exports.fPassToHash = exports.fChecksum = void 0;
/**
 * Модуль для работы с паролем и токеном
 */
const uniqid = require('uniqid');
const crypto = require('crypto');
/**
 * Чек-сумма
 * @param str
 * @param algorithm
 * @param encoding
 */
function fChecksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}
exports.fChecksum = fChecksum;
/**
 * Выдает зашифрованный пароль
 * @param pass
 * @returns hash
 */
function fPassToHash(pass) {
    return fChecksum(pass);
}
exports.fPassToHash = fPassToHash;
/**
 * Генерирует токен
 */
function fGenerateToken() {
    return fChecksum(uniqid());
}
exports.fGenerateToken = fGenerateToken;
//# sourceMappingURL=HashFunc.js.map