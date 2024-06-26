////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
// Convert n to a positive number if it's negative
if (n < 0) {
  n = -n;
}

if (n === 0) {
  return true;
} else if (n === 1) {
  return false;
} else {
  return isEven(n - 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, character) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      counter++;
    }
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      counter++;
    }
  }
  return counter;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};