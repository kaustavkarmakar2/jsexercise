/**
 * There is an evil hacker on the loose that is trying to brute force our isPasswordCorrect function
 *
 * Let's do a quick fix and block brute force attempts by only allowing five FAILED attempts. After that the function should always return false!
 */

const isPasswordCorrect = (password) => {
  let correctPasswordList = ["password@12", "123456", "qwertyuiop"];

  if (password !== correctPasswordList[0]) {
    return console.log(false);
  } else {
    return console.log(true);
  }
};
isPasswordCorrect("password12");

/**
 * EVIL HACKER CODE. DO NOT EDIT
 */

for (let i = 0; i <= 100; i++) {
  const passwordToTry = "password" + i.toString();

  if (isPasswordCorrect(passwordToTry)) {
    console.log("MUWHAHAHAHA, I found your password: ", passwordToTry);
  }
}
