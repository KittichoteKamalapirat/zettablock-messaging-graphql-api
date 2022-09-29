import { Arg, Query, Resolver } from "type-graphql";
import { MessageOutput } from "../types/MessageOutput";
import { getEmoticons } from "../utils/getEmoticons";
import { getMentions } from "../utils/getMentions";
import { getUrls } from "../utils/getUrls";
import { scrapeUrls } from "../utils/scrapeUrls";

@Resolver()
export class MessageResolver {
  @Query(() => MessageOutput || undefined)
  async records(
    @Arg("message", () => String) message: string
  ): Promise<MessageOutput | Error> {
    try {
      const mentions = getMentions(message);
      const emoticons = getEmoticons(message);
      const urls = getUrls(message);
      const links = await scrapeUrls(urls);

      const output = {
        mentions,
        emoticons,
        links,
      };
      return output;
    } catch (error) {
      console.log(error);
      throw new Error("Some data cannot be fetched");
    }
  }
}
