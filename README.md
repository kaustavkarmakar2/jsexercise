# jsexercise
# project1
* You have been tasked to create a function that finds all the inactive accounts in the list
* You know the accountList is an array and that if the account is active it has an active property on it with the value true
# project2
* There is an evil hacker on the loose that is trying to brute force our isPasswordCorrect function

* Let's do a quick fix and block brute force attempts by only allowing five FAILED attempts. After that the function should always return false!
/**
 * EVIL HACKER CODE. DO NOT EDIT
 */

for (let i = 0; i <= 100; i++) {
  const passwordToTry = "password" + i.toString();

  if (isPasswordCorrect(passwordToTry)) {
    console.log("MUWHAHAHAHA, I found your password: ", passwordToTry);
  }
}
# project3
* You have been tasked to create a function to calculate the amount of positive reviews.
* The function will get an array of reviews
* A review can have a `numberOfStars` property which is a number between 1 and 5 (NOTE: sometimes data is broken and will not have one)
* A review is positive if it is more than 3 stars. So a review of 3 stars is NOT positive

