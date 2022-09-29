import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Link {
  @Field(() => String)
  url: string;

  @Field(() => String)
  title: string;
}
