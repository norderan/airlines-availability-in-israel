const monthNames = {
  english: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  hebrew: [
    "בינואר",
    "בפברואר",
    "במרץ",
    "באפריל",
    "במאי",
    "ביוני",
    "ביולי",
    "באוגוסט",
    "בספטמבר",
    "באוקטובר",
    "בנובמבר",
    "בדצמבר",
  ],
};

export default function dateProcessor(dateStr, language) {
  // dateStr: "dd/mm/yyyy"
  const [day, month, year] = dateStr.split("/").map(Number);
  const now = new Date();
  const currentYear = now.getFullYear();

  let result;
  if (day === 0) {
    result = `${monthNames[language][month - 1]}`;
  } else {
    result = `${day} ${monthNames[language][month - 1]}`;
  }
  if (year !== currentYear) {
    result += ` ${year}`;
  }
  return result;
}
