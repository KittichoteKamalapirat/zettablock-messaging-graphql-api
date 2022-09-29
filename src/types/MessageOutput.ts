import { ObjectType, Field } from "type-graphql";
import { Link } from "./Link";

@ObjectType()
export class MessageOutput {
  @Field(() => [String])
  mentions: string[];

  @Field(() => [String])
  emoticons: string[];

  @Field(() => [Link])
  links: Link[];
}
