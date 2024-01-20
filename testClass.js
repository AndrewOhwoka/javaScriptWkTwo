var csvData = `01321,Alan Smith,519-123-4567,62 inches
01322        ,        James      Lee,     2261234567, 149 cm
01323,                      Kim Thomas       ,5321234123,138cm`;

// Clean the above data and make it looks like normal data...
/*
var data = `01321,Alan Smith,519-123-4567,62 inches
    01322,James Lee,226-123-4567,56 inches
    01323,Kim Thomas,532-123-4567,60 inches`;
*/

// 1. Split the string into an array of separate rows (i.e an array with rows separated  by \n).

// function splitIntoRows(s) {
//     return s.split(/\r?\n/)}
// console.log(splitIntoRows(csvData))

// // or
// function splitIntoRows (csvData){
//     return csvData.split(/\r?\n/)
// }

// console.log(splitIntoRows(csvData))

// // split rows into  big fields
// function rowIntoFields(row) {
//     return row.split(",");
// }

// //  iterate and split into fields  -- this does not really do anything

// for (i=0; i<csvData.length; i++) {
//     let row = csvData[i];
//     let fields = rowIntoFields(row);
//     // console.log(fields);
//     console.log(csvData);
// }
// console.log(csvData);

// // fuction to remove extra spaces

// function removeExtraSpaces(csvData) {
//     return csvData.split(/\s*,\s*/);
// }
// console.log(removeExtraSpaces(csvData))

// split the string into an array
function splitIntoRows(a) {
  return a.split(/\r?\n/);
}
// console.log(splitIntoRows(csvData));

//  replace extra spaces /\S+/, " " with a single space ""
function replaceextraSpaces(s) {
  return s.replace(/\s+/, " ");
}
// console.log(replaceextraSpaces(csvData));

//  extra number and match it with the pattern and return the one that is in order
function extraphonenumber(phoneNumber) {
  let matches = phoneNumber.match(/(\d{3})-?(\d{3})-?(\d{4})/);

  if (matches) {
    return `${matches[1]}-${matches[2]}-${matches[3]}`;
  }
  return phoneNumber;
}
console.log(extraphonenumber(csvData));

// remove cm and height and convert it to inches and return

function standardizeHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  }
  let cm = parseFloat(height);
  let inches = cm *0.39;

  return `${inches} inches`;
  // return inches;
}
console.log(standardizeHeight(csvData));
// convert rows into fields
function rowToFields (row) {
  let fields = row.split(/\s*,\s*/);
  fields[1] = replaceextraSpaces(fields[1]);
  fields[2] = extraphonenumber(fields[2]);
  fields[3] = standardizeHeight(fields[3]); 
  return fields.join(","); //join converts an array to a string with separated by the given character...
}
console.log(rowToFields(csvData))

function processCSV(csv) {
  //Step1: break the csv into rows

  let rows = splitIntoRows(csv);
  let data = rows.map((row) => rowToFields(row));
  return data.join("\n");
}

console.log(processCSV(csvData))