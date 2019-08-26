
let twentyDollars = function(initialChange) {
  let difference = initialChange % 2000;
  let change = initialChange - difference;
  return change / 2000;
};

let tenDollars = function(initialChange) {
  let difference = initialChange % 1000;
  let change = initialChange - difference;
  return change / 1000;
};

let fiveDollars = function(initialChange) {
  let difference = initialChange % 500;
  let change = initialChange - difference;
  return change / 500;
};

let twoDollars = function(initialChange) {
  let difference = initialChange % 200;
  let change = initialChange - difference;
  return change / 200;
};

let oneDollars = function(initialChange) {
  let difference = initialChange % 100;
  let change = initialChange - difference;
  return change / 100;
};

let quarters = function(initialChange) {
  let difference = initialChange % 25;
  let change = initialChange - difference;
  return change / 25;
};

let dimes = function(initialChange) {
  let difference = initialChange % 10;
  let change = initialChange - difference;
  return change / 10;
};

let nickels = function(initialChange) {
  let difference = initialChange % 5;
  let change = initialChange - difference;
  return change / 5;
};

let pennies = function(initialChange) {
  let difference = initialChange % 1;
  let change = initialChange - difference;
  return change / 1;
};

let calculateChange = function(total, cash) {
  let difference = cash - total;
  let finalChange = {
    twentyDollars: 0, tenDollars: 0, fiveDollars: 0, oneDollars: 0, quarters: 0, dimes: 0, nickels: 0, pennies: 0
  };
  if (difference >= 2000) {
    finalChange.twentyDollars = twentyDollars(difference);
    difference = difference - (finalChange.twentyDollars * 2000);
  };
  if (difference >= 1000) {
    finalChange.tenDollars = tenDollars(difference);
    difference = difference - (finalChange.tenDollars * 1000);
  };
  if (difference >= 500) {
    finalChange.fiveDollars = fiveDollars(difference);
    difference = difference - (finalChange.fiveDollars * 500);
  };
  if (difference >= 200) {
    finalChange.twoDollars = twoDollars(difference);
    difference = difference - (finalChange.twoDollars * 200);
  };
  if (difference >= 100) {
    finalChange.oneDollars = oneDollars(difference);
    difference = difference - (finalChange.oneDollars * 100);
  };
  if (difference >= 25) {
    finalChange.quarters = quarters(difference);
    difference = difference - (finalChange.quarters * 25);
  };
  if (difference >= 10) {
    finalChange.dimes = dimes(difference);
    difference = difference - (finalChange.dimes * 10);
  };
  if (difference >= 5) {
    finalChange.nickels = nickels(difference);
    difference = difference - (finalChange.nickels * 5);
  };
  if (difference >= 1) {
    finalChange.pennies = pennies(difference);
    difference = difference - (finalChange.pennies * 500);
  };
  for (element in finalChange) {
    if (finalChange[element] === 0) {
      delete finalChange[element];
    }
  };

  return finalChange;
};



console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));





// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
