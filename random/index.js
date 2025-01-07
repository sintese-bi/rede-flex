// What is a Closure ?
// A closure gives you access to an outer functions's scope from an inner function.

const createSecret = (secret) => {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => {
      secret = newSecret;
    },
  };
};

const mySecret = createSecret("My secret");
console.log(mySecret.getSecret());

mySecret.setSecret("My new secret");
console.log(mySecret.getSecret());

const createCounter = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
};

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.getCount());
