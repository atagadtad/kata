
// made a function that upperCases the first letter of a single word
function camelPush(word) {
  let cameled = '';
  cameled += word[0].toUpperCase();

  for (i = 1; i < word.length; i++) {
    cameled += word[i];
  }
  
  return cameled;
};

let camelCase = function(input) {
  upperCase = [];
  inputSplit = input.split(' ');
  
  // inputSplit array is iterable so
  // inside the if statement
  // i told it if inputSplit[0] aka. the first word
  // matches the word variable within the forEach function
  // then push the lowercased word (aka the first word) into the empty upperCase array
  inputSplit.forEach((word) => {
    if (inputSplit[0] === word) {
      upperCase.push(inputSplit[0]);
      // else push the upperCased words into the empty upperCase array
      } else {
      upperCase.push(camelPush(word));
      }
  });
  // then i returned the upperCase array through the join function
  // to join the array into a single string!
  return upperCase.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
