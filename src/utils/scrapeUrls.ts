import axios from "axios";
import { load } from "cheerio";
import puppeteer from "puppeteer";

export const scrapeUrls = async (urls: string[]) => {
  // scrape with axios and cheerio for static website
  // use puppeteer if it is dynamic

  return await Promise.all(
    urls.map(async (url) => {
      let title = "";
      const response = await axios.get(url);
      const $ = load(response.data);
      title = $("title").text();

      // case where data is dynamically rendered
      if (title === "") {
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        // Got "browser not support" error without this line
        await page.setUserAgent(
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
        );

        await page.goto(url, { waitUntil: "networkidle0" }); //consider navigation to be finished when there are no more than 0 network connections for at least 500 ms.
        await page.screenshot({ path: "image.png" });

        const pageData = await page.evaluate(() => {
          return {
            html: document.documentElement.innerHTML,
          };
        });

        const $ = load(pageData.html);

        title = $("title").text();

        await browser.close();
      }

      const newLink = {
        url,
        title,
      };

      return newLink;
    })
  );
};
