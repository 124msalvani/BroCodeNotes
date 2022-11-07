let userName = "ABC DEF GHI";
//userful string properties and methods

//length, counts spaces
console.log(userName.length);
//first letter
console.log(userName.charAt(0));
let graduationYear = "2024";
let firstName = "Margaret";
let lastName = "Salvani";
//Salvani = 0123456
let schoolUserName = "1" + graduationYear.charAt(2) + graduationYear.charAt(3) + firstName.charAt(0) + lastName;
console.log(schoolUserName.toLowerCase());

//looks for the first E in the variable
console.log(userName.indexOf("E"));
//looks for first lowercase m in the variable
console.log(schoolUserName.toLowerCase().indexOf("m"));
//gets rid of any spaces before and after string
console.log("              aaaaaaa                 ".trim());
//replaces first character in () with second character, replaces all instances
let phoneNumber = "123-456-7890";
console.log(phoneNumber.replaceAll("-", "/"));

//Slice method - extracts a section of a string and returns it as a new sting without modifying the old string

let fullName = "Margaret Salvani";
firstName = fullName.slice(0,8); //2 arguments = start number to the end point = letter 0 to letter 7, excluding 8
lastName = fullName.slice(9) // 1 argument = start number to the end of the string
console.log(firstName);
console.log(lastName);


