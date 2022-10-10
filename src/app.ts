const names: Array<string> = []; //string []

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise ....");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
