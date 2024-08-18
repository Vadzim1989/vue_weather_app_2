export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString("ru-RU", {
    timeZone: "Atlantic/Reykjavik",
  });
};

export const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
