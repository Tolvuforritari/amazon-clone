function format(value, format, lng) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  new Intl.DateTimeFormat("en", options).format(new Date("2020-11-05")); 

  if (format === "date") {
    return formatDate(value, format, lng);
  }

  return value;
}

function formatDate(value, format, lng) {
  return new Intl.DateTimeFormat(lng).format(value);
}

export default format;
