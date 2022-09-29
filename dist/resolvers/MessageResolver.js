"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const MessageOutput_1 = require("../types/MessageOutput");
const getEmoticons_1 = require("../utils/getEmoticons");
const getMentions_1 = require("../utils/getMentions");
const getUrls_1 = require("../utils/getUrls");
const scrapeUrls_1 = require("../utils/scrapeUrls");
let MessageResolver = class MessageResolver {
    async records(message) {
        try {
            const mentions = (0, getMentions_1.getMentions)(message);
            const emoticons = (0, getEmoticons_1.getEmoticons)(message);
            const urls = (0, getUrls_1.getUrls)(message);
            const links = await (0, scrapeUrls_1.scrapeUrls)(urls);
            const output = {
                mentions,
                emoticons,
                links,
            };
            return output;
        }
        catch (error) {
            console.log(error);
            throw new Error("Some data cannot be fetched");
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => MessageOutput_1.MessageOutput || undefined),
    __param(0, (0, type_graphql_1.Arg)("message", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "records", null);
MessageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=MessageResolver.js.map