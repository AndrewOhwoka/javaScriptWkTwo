var csvData = `01321,Alan Smith,519-123-4567,62 inches
01322        ,        James      Lee,     2261234567, 149 cm
01323,                      Kim Thomas       ,5321234123,138cm`;

//  convert the data into an array

function convertcsvDataToArray(a) {
  return a.split(/\r?\n/);
}
console.log(convertcsvDataToArray(csvData)); // display array

// convert array into fields  + Each row contains information of a user: ID, Name, Phone number and Height..all separated by the commas. Split each row into an array with all diffferent fields. ...You need to deal with extra and/or no whitespace between commas in each row.
function removeExtraSpace(b) {
  return b.replace(/\s+/g, " ");
}
console.log(removeExtraSpace(csvData)); // display one row

/// 4. Using a RegExp, extract the Area Code from the Phone Number field. All the phone numbses are in one of two formats "555-523423423" or "555555555"

function normalPhoneNumber(phoneNumber) {
  let matches = phoneNumber.match(/(\d{3})-?(\d{3})-?(\d{4})/);

  if (matches) {
    return `${matches[1]}-${matches[2]}-${matches[3]}`;
  }
  return phoneNumber;
}
console.log(normalPhoneNumber(csvData)); // display one phone number

function normalHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  } else {
    let cm = parseFloat(height);
    let inches = cm * 0.36;
    return `${inches} inches`;
  }
}
console.log(normalHeight(csvData)); // display one height

// convert the row into fields. using this function to group the fields into one array- what we have so far
function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);
  fields[1] = removeExtraSpace(fields[1]);
  fields[2] = normalPhoneNumber(fields[2]);
  fields[3] = normalHeight(fields[3]);
  return fields.join(",");
}
console.log(rowToFields(csvData)); // display one row

// process the entire csv array using the intial split function

function processCSV(csv) {
  let rows = convertcsvDataToArray(csv);
  let data = rows.map((row) => rowToFields(row));
  return data.join("\n");
}
console.log(processCSV(csvData));
