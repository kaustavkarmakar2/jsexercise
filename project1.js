/**
 * You have been tasked to create a function that finds all the inactive accounts in the list
 *
 * You know the accountList is an array and that if the account is active it has an active property on it with the value true
 */

const findInactive = (accountList) => {
  const inactive = accountList.filter((item) => item.active !== true);
  return inactive;
};

/**
 * TEST CODE. DO NOT EDIT
 */
const list = [
  {
    id: "a-123",
    name: "hackme28",
    active: true,
  },
  {
    id: "a-234",
    name: "niceguy02",
    active: false,
  },
  {
    id: "a-345",
    name: "someone",
  },
];

// should log niceguy02, someone
console.log(
  findInactive(list)
    .map((account) => account.name)
    .join(", ")
);
