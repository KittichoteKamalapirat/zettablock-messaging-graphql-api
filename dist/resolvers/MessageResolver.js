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
let Link = class Link {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Link.prototype, "url", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Link.prototype, "title", void 0);
Link = __decorate([
    (0, type_graphql_1.ObjectType)()
], Link);
let MessageOutput = class MessageOutput {
};
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MessageOutput.prototype, "mentions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], MessageOutput.prototype, "emoticons", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Link]),
    __metadata("design:type", Array)
], MessageOutput.prototype, "links", void 0);
MessageOutput = __decorate([
    (0, type_graphql_1.ObjectType)()
], MessageOutput);
let MessageResolver = class MessageResolver {
    async formatMessage(input) {
        const inputArray = input.split(" ");
        const mentions = inputArray
            .filter((word) => word[0] === "@")
            .map((word) => word.slice(1, word.length));
        const parenthesisRegEx = /\(([^)]+)\)/g;
        const emoticons = [...input.match(parenthesisRegEx)].map((surrounded) => surrounded.slice(1, surrounded.length - 1));
        const urlRegEx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
        const links = [...input.match(urlRegEx)];
        console.log("links", links);
        const output = {
            mentions,
            emoticons,
            links: [
                {
                    url: "www",
                    title: "titl",
                },
            ],
        };
        return output;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => MessageOutput),
    __param(0, (0, type_graphql_1.Arg)("input", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "formatMessage", null);
MessageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=MessageResolver.js.map