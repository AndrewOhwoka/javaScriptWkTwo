// first variable label
var label = "keyincollege";
// second variable tld
var tld = "ca";
// third variable domainName
var domainName = label + "." + tld;
// output
console.log(domainName);

// Method 2 for Question one
function schoolName(label, tld) {
  return label + "." + tld;
}
console.log(schoolName("keyincollege", "ca"));

// Question two -----------------------------------------------------------------
var isKeyin;

if (domainName === "keyincollege.ca") {
  isKeyin = true;
} else {
  isKeyin = false;
}
console.log(isKeyin);
// Question three -----------------------------------------------------------------
var isNotKeyin;

if (domainName !== "keyincollege.ca") {
  isNotKeyin = true;
} else {
  isNotKeyin = false;
}
console.log(isNotKeyin);
// Question four -----------------------------------------------------------------
var byte1 = Math.floor(Math.random() * 256);
console.log(" byte1:", byte1);
var byte2 = Math.floor(Math.random() * 256);
console.log(" byte2:", byte2);
var byte3 = Math.floor(Math.random() * 256);
console.log(" byte3:", byte3);
var byte4 = Math.floor(Math.random() * 256);
console.log(" byte4:", byte4);

// Question five -----------------------------------------------------------------
var ipAddress;
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(typeof ipAddress, ipAddress);

// Question six -----------------------------------------------------------------

var number = 15;

for (var i = 0; i <= 10; i++) {
  console.log(number + " x " + i + " = " + i * number);
}

// Question seven ternary -----------------------------------------------------------------

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
    console.log((i = +i));
  } else {
    console.log(i + " is odd");
  }
}

// Question eight -----------------------------------------------------------------

let sumEvenNumbers = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    // sumEvenNumbers += i;
    sumEvenNumbers = sumEvenNumbers + i;
    console.log(sumEvenNumbers);
  }
}

// Question nine -----------------------------------------------------------------
function isPerfectnumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}
console.log(isPerfectnumber(28));

// Question ten -----------------------------------------------------------------

function isprime(number) {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isprime(1));
