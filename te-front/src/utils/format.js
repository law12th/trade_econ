export const toDate = (timestamp) => {
  const date = timestamp.split("T");

  const datePart = date[0];

  return datePart;
};
