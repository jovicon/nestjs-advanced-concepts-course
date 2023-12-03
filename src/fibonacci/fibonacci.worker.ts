import { parentPort } from 'worker_threads';

const fibonacci = (n: number) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

parentPort.on('message', ({ n, id }) => {
  const result = fibonacci(n);
  parentPort.postMessage({ result, id });
});

module.exports = (n: number) => {
  return fibonacci(n);
};
