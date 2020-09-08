export const dateStringtoDate = (dateString: string): Date => {
  const date = dateString
    .split("/")
    .map((value: string): number => parseInt(value));
  return new Date(date[2], date[1] - 1, date[0]);
};
