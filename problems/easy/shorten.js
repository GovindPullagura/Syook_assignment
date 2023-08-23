//Function that shortens a string:

function shortenString(str) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      result += (count > 1 ? count : "") + str[i - 1];
      count = 1;
    }
  }
  return result;
}

//Function that gives back the original string:

function decodeString(str) {
  let result = "";
  let count = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isNaN(+char)) {
      count += char;
    } else {
      if (count !== "") {
        const repeatCount = +count;
        for (let j = 0; j < repeatCount; j++) {
          result += char;
        }
        count = "";
      } else {
        result += char;
      }
    }
  }
  return result;
}

// console.log(shortenString("aaaBBCZZZZZZ"));
// console.log(decodeString("2AB3c5D"));
