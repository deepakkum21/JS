const promiseAll = (promises) => {
  const outputs = [];
  let settledPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          outputs[index] = value;
          settledPromiseCount++;
          if (settledPromiseCount === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });
};

let slowPromise = new Promise((resolve) => {
  setTimeout(resolve(10), 9000);
});
promises = [slowPromise, Promise.resolve(9)];

promiseAll(promises).then((value) => console.log(value));
