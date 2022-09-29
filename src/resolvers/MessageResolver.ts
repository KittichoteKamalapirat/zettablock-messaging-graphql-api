/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { Arg, Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class Link {
  @Field(() => String)
  url: string;

  @Field(() => String)
  title: string;
}

@ObjectType()
class MessageOutput {
  @Field(() => [String])
  mentions: string[];

  @Field(() => [String])
  emoticons: string[];

  @Field(() => [Link])
  links: Link[];
}

@Resolver()
export class MessageResolver {
  @Query(() => MessageOutput)
  async formatMessage(
    @Arg("input", () => String) input: string
  ): Promise<MessageOutput> {
    const inputArray = input.split(" ");
    const mentions = inputArray
      .filter((word) => word[0] === "@")
      .map((word) => word.slice(1, word.length));

    const parenthesisRegEx = /\(([^)]+)\)/g;
    // const regEx2 = /(?<=\[)(.*?)(?=\])/g;
    // const regEx3 = /\((.*?)\)/g;

    const emoticons = [...input.match(parenthesisRegEx)].map((surrounded) =>
      surrounded.slice(1, surrounded.length - 1)
    );

    // match url, no need http protocal
    const urlRegEx =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

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
}
