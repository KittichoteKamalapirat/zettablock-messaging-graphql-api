"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeUrls = void 0;
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = require("cheerio");
const puppeteer_1 = __importDefault(require("puppeteer"));
const scrapeUrls = async (urls) => {
    return await Promise.all(urls.map(async (url) => {
        let title = "";
        const response = await axios_1.default.get(url);
        const $ = (0, cheerio_1.load)(response.data);
        title = $("title").text();
        if (title === "") {
            const browser = await puppeteer_1.default.launch();
            const page = await browser.newPage();
            await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36");
            await page.goto(url, { waitUntil: "networkidle0" });
            await page.screenshot({ path: "image.png" });
            const pageData = await page.evaluate(() => {
                return {
                    html: document.documentElement.innerHTML,
                };
            });
            const $ = (0, cheerio_1.load)(pageData.html);
            title = $("title").text();
            await browser.close();
        }
        const newLink = {
            url,
            title,
        };
        return newLink;
    }));
};
exports.scrapeUrls = scrapeUrls;
//# sourceMappingURL=scrapeUrls.js.map