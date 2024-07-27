//ASSIGNMENT
//CHAP 14-16
//QUESTION NO1
let studentNames = [];
//in future we can enter anything

console.log(studentNames);

//QUESTION NO2

var fruits = ["Apple", "Banana", "Cherry", "Date"];


console.log(fruits); 

//QUESTION NO3
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//QUESTION NO5
let booleanArray = [true, false, true, false];
console.log(booleanArray);

//QUESTION N06

var mixedArray = [10, "Hello", true, [1, 2, 3], { name: "John", age: 30 }];

console.log(mixedArray);


//QUESTION NO7
var qualifications = [
    "SSC (Secondary School Certificate)",
    "HSC (Higher Secondary Certificate)",
    "BCS (Bachelor of Computer Science)",
    "BS (Bachelor of Science)",
    "BCOM (Bachelor of Commerce)",
    "MS (Master of Science)",
    "M. Phil. (Master of Philosophy)",
    "PhD (Doctor of Philosophy)"
  ];
  
 
  document.write("<ul>");
  
  
  for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
  }

  document.write("</ul>");
  
//Question no8
var studentsNames = ["Alice", "Bob", "Charlie"];
var scores = [430, 380, 450];
var percentages = [];


for (var i = 0; i < scores.length; i++) {
    percentages[i] = (scores[i] / 500) * 100;
}

for (var i = 0; i < studentsNames.length; i++) {
    var studentName = studentsNames[i];
    var score = scores[i];
    var percentage = percentages[i];

    document.write(studentName + " scored " + score + " out of 500, which is " + percentage.toFixed(2) + "%<br>");
}

//QUESTIONNO9

let colors = ['Red', 'Green', 'Blue'];


document.write('<b>Initial Array:</b> ' + colors.join(', ') + '<br>');


let colorToAddBeginning = prompt('Enter a color to add to the beginning:');
colors.unshift(colorToAddBeginning);

document.write('<b>After adding color to beginning:</b> ' + colors.join(', ') + '<br>');

let colorToAddEnd = prompt('Enter a color to add to the end:');
colors.push(colorToAddEnd);


document.write('<b>After adding color to end:</b> ' + colors.join(', ') + '<br>');

colors.unshift('Purple', 'Yellow');

document.write('<b>After adding two colors to beginning:</b> ' + colors.join(', ') + '<br>');


colors.shift();


document.write('<b>After deleting first color:</b> ' + colors.join(', ') + '<br>');

colors.pop();

document.write('<b>After deleting last color:</b> ' + colors.join(', ') + '<br>');

let indexToAdd = parseInt(prompt('Enter the index where you want to add a color:'));
let colorToAdd = prompt('Enter the color to add:');
colors.splice(indexToAdd, 0, colorToAdd);


document.write('<b>After adding color at index ' + indexToAdd + ':</b> ' + colors.join(', ') + '<br>');


let indexToDelete = parseInt(prompt('Enter the index from where you want to delete color(s):'));
let numberOfColorsToDelete = parseInt(prompt('Enter how many colors you want to delete:'));

colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array
document.write('<b>After deleting ' + numberOfColorsToDelete + ' color(s) from index ' + indexToDelete + ':</b> ' + colors.join(', ') + '<br>');

//QUESTION NO 10

let studentScores = [320, 230, 480, 120];


console.log("Initial Array of Scores:", studentScores);


studentScores.sort(); // Sorts the array in ascending order

console.log("Sorted Array of Scores (Ascending Order):", studentScores);


//QUESTION NO11

let cities = ['Peshawar', 'Karachi', 'Lahore', 'Kashmir', 'Islamabad'];


let selectedCities = [];


selectedCities = cities.slice(0, 3);


console.log("Cities Array:", cities);
console.log("Selected Cities Array:", selectedCities);

//QUESTION NO 12

var arr = ["This ", " is ", " my ", " cat"];


var singleString = arr.join('');


console.log("Single String:", singleString);

//QUESTION NO 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write('<select name="manufacturers">')
for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
}


document.write('</select>');