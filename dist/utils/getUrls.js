"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrls = void 0;
const getUrls = (message) => {
    const regEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const matches = message.match(regEx);
    if (!matches)
        return [];
    return [...matches];
};
exports.getUrls = getUrls;
//# sourceMappingURL=getUrls.js.map