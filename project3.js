/**
 * You have been tasked to create a function to calculate the amount of positive reviews.
 *
 * The function will get an array of reviews
 * A review can have a `numberOfStars` property which is a number between 1 and 5 (NOTE: sometimes data is broken and will not have one)
 * A review is positive if it is more than 3 stars. So a review of 3 stars is NOT positive
 */

const positiveReviewPercentage = (reviews) => {
  let highestReview = reviews.filter((item) => {
    if (item.numberOfStars >= 3) {
      return item.numberOfStars;
    }
  });
  let highest = highestReview.map((item) => {
    return item.numberOfStars;
  });
  return highest.reduce((a, b) => a * b);
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testReviews = [
  {
    description: "Awful product",
    numberOfStars: 1,
  },
  {
    description: "Amazing product",
    numberOfStars: 5,
  },
  {
    description: "Awesome product",
    numberOfStars: 4,
  },
  {
    description: "Expected better",
    numberOfStars: 3,
  },
  {
    description: "Not a fan",
  },
];
// should log 50
console.log(positiveReviewPercentage(testReviews));
