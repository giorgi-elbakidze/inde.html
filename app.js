function assignGrade (score) {
    if(score == 25) {
        return "Your Level is A ";
    }
    else if(score == 30) {
        return "Your Level is B ";
    }
    else if(score == 40) {
        return "Your Level is C ";
    }
    else if(score == 50) {
        return "Your Level is D ";
    }
    else if(score == 80) {
        return "Your Level is F ";
    }

    else {
        return "Invalid Value";
    }
 }

 console.log(assignGrade(25));

 console.log(assignGrade(30));

 console.log(assignGrade(40));

 console.log(assignGrade(50));

 console.log(assignGrade(80));

 console.log(assignGrade(100));




  
  var people = [["a", "25"], ["b", "30"], ["c", "40"], ["d", "50"],["f", "80"]]
console.table(people);


// აბრუნებს შეფასებული ბოლო გამოთქმის მნიშვნელობას.

var str = 'if ( a ) { 1 + 1; } else { 1 + 2; }';
var a = true;
var b = eval(str);  // returns 2

console.log('b is : ' + b);

a = false;
b = eval(str);  // returns 3

console.log('b is : ' + b);
