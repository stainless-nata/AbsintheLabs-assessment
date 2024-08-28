export const reduceString = (code: string) => {
  const length = code.length;
  return code.substring(0, 5) + '...' + code.substring(length - 4, length);
};
