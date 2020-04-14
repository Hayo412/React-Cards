const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeded");
    }, 1000);
  } else {
    reject("try again");
  }
});

myPromise
  .then((value) => console.log(value + "!!!!"))
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
