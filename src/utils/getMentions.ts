export const getMentions = (message: string) => {
  const words = message.split(" ");
  return words
    .filter((word) => word[0] === "@")
    .map((word) => word.slice(1, word.length));
};
