"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmoticons = void 0;
const getEmoticons = (message) => {
    const regEx = /\(([^)]+)\)/g;
    const matches = message.match(regEx);
    if (!matches)
        return [];
    return [...matches].map((surrounded) => surrounded.slice(1, surrounded.length - 1));
};
exports.getEmoticons = getEmoticons;
//# sourceMappingURL=getEmoticons.js.map