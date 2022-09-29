export const getEmoticons = (message: string) => {
  const regEx = /\(([^)]+)\)/g;

  const matches = message.match(regEx);

  if (!matches) return []; // matches is undefined

  return [...matches].map((surrounded) =>
    surrounded.slice(1, surrounded.length - 1)
  );
};
