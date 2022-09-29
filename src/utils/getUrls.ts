export const getUrls = (message: string) => {
  const regEx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

  const matches = message.match(regEx);
  if (!matches) return []; // matches is undefined

  return [...matches];
};
