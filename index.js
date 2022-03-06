// xndir 1
let tiv = +prompt("tiv nermucel");
let reminder, sum = 0;

while (tiv) {
    reminder = tiv % 10;
    sum += reminder;
    tiv = Math.floor(tiv/10);
}    
alert(sum);

// xndir 3
let tiv1 = 123;
let count1 = 0;

while (tiv) {
    tiv = Math.floor(tiv1 /= 10);
    count1++;
}

alert(count1);

// xndir 2

let a = 2
let b = 3
let c = 5
if (a + b > c && a + c > b && b + c > a) {
    alert('yes')
} else {
    alert('no')
}

// xndir 4
let reminder4, number3 = 929, count2 = 0;


while (number) {
    reminder4 = number3 % 10;

    if (reminder == 9) {
      count2++;
    }

    number = Math.floor(number /= 10);
}

alert(count);

// xndir 5
let number2 = 33581, reminder6, newnum=0;

while (number) {
  reminder6 = number2 % 10;
  newnum = newnum * 10 + reminder6;
  number2 = Math.floor(number2/10);
}

alert(newnum);
