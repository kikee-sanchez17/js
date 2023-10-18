// Define an array to store generated dates
let array = [];

// Function to generate a random date
function generateDate() {
  // Define months with different days
  const daysmonths_31 = [1, 3, 5, 7, 8, 10, 12];
  const daysmonths_30 = [4, 6, 9, 11];

  // Generate a random month number between 1 and 12
  const monthNumber = randomIntFromInterval(1, 12);

  // Calculate the day based on the month
  let day;
  if (daysmonths_31.includes(monthNumber)) {
    day = randomIntFromInterval(1, 31);
  } else if (daysmonths_30.includes(monthNumber)) {
    day = randomIntFromInterval(1, 30);
  } else {
    day = randomIntFromInterval(1, 28);
  }

  // Create the date in the format "day - month - "
  const date_generated = day + "- " + monthNumber + " - ";

  return date_generated;
}

// Function to generate a random integer within a range
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate dates and display them in the table
function generateDates() {
 

  // Generate 5 random dates and store them in the array
  for (let i = 0; i < 5; i++) {
    array[i] = generateDate();
  }

  // Sort the array of dates
  array = sortDates();

  // Display the dates in the table
  for (let i = 0; i < 5; i++) {
    document.getElementById(i).innerHTML = array[i];
  }

  // Select the language
  selectLanguage(document.getElementById("langu").value);
}

// Function to sort the dates in the array
function sortDates() {
  let cambio;
  do {
    cambio = false;
    for (let i = 0; i < array.length - 1; i++) {
      let parts1 = array[i].split("-");
      let parts2 = array[i + 1].split("-");
      let numero1 = parseInt(parts1[1]);
      let numero2 = parseInt(parts2[1]);
      let numero3 = parseInt(parts1[0]);
      let numero4 = parseInt(parts2[0]);

      if (numero1 > numero2 || (numero1 === numero2 && numero3 > numero4)) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        cambio = true;
      }
    }
  } while (cambio);

  return array;
}

// Function to select the language and display dates in the selected language
function selectLanguage(lang) {
  let year = "2023";

  // Define month names in different languages
  const cat_month = [
    " de gener de ",
    " de febrer de ",
    " de març de ",
    " de abril de ",
    " de maig de ",
    " de juny de ",
    " de juliol de ",
    " d'agost de ",
    " de setembre de ",
    " d'octubre de ",
    " de novembre de ",
    " de desembre de ",
  ];

  const eng_month = [
    " of January of ",
    " of February of ",
    " of March of ",
    " of April of ",
    " of May of ",
    " of June of ",
    " of July of ",
    " of August of ",
    " of September of ",
    " of October of ",
    " of November of ",
    " of December of ",
  ];

  const esp_month = [
    " de enero del ",
    " de febrero del ",
    " de marzo del ",
    " de abril del ",
    " de mayo del ",
    " de junio del ",
    " de julio del ",
    " de agosto del ",
    " de septiembre del ",
    " de octubre del ",
    " de noviembre del ",
    " de diciembre del ",
  ];

  
  
  // Display the dates in the corresponding language
  for (let i = 0; i < 5; i++) {

    let month =parseInt(array[i].split("-")[1]) - 1;
    let day=array[i].split("-")[0];


    if (lang == "cat") {
      document.getElementById(i).innerHTML =
        "Data " +
        (i + 1) +
        ": " +
        day +
        cat_month[month] +
        year;
    } else if (lang == "eng") {
      document.getElementById(i).innerHTML =
        "Date " +
        (i + 1) +
        ": " +
        addSuffixToDay(day) +
        eng_month[month] +
        year;
    } else if (lang == "esp") {
      document.getElementById(i).innerHTML =
        "Fecha " +
        (i + 1) +
        ": " +
        day +
        esp_month[month] +
        year;
    }
  }
}

// Function to add suffixes to days (st, nd, rd)
function addSuffixToDay(day) {
  if (day >= 11 && day <= 13) {
    return day + "th"; // Numbers from 11 to 13 use "th" as a suffix
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}
