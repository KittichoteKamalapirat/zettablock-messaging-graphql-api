"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMentions = void 0;
const getMentions = (message) => {
    const words = message.split(" ");
    return words
        .filter((word) => word[0] === "@")
        .map((word) => word.slice(1, word.length));
};
exports.getMentions = getMentions;
//# sourceMappingURL=getMentions.js.map