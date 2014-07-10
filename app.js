var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('this is blue text'));
//blue text rendering as orange...strange
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.green('I am a green line'));

var evens = [2,4,6,8,10,12,14,16,18,20];
console.log(evens);
console.log(chalk.red(evens[1]));

//how to print array in multiple colors using 'chalk' node module

for(var i = 0; i < 10; i++){
  if (i%2 === 0){
    //even
    console.log(chalk.red(i));
  }else{
    //odd
    console.log(chalk.green(i));
  }
}

//how to loop an array and print numbers

for(var j = 0;j < evens.length; j++){
  console.log('evens -> ' + evens[j]);
}

//getting array elements from user and finding sum

var numbers = [];

var response = prompt('Enter a number or (q)uit: ');
while(response != 'q'){
  response = parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ');
}

console.log(numbers);

var sum = 0

for(var i = 0;i < numbers.length; i++){
  sum += numbers[i];
}

console.log('sum is', sum);
