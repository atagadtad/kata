const count = function(num, multiple) {
  let output1 = '';

  for (i = 1; i <= num; i++) {
    output1 += (i * multiple) + ' ';
  }
  return output1;
}
// console.log(count(5, 1));


const multiplicationTable = function(maxValue) {

  let output = '';
  
  for (let i = 1; i <= maxValue; i++) {
    // console.log('hai')
    console.log(count(maxValue, i));
  }

  return output;
};

multiplicationTable(1);
multiplicationTable(5);
multiplicationTable(10);






