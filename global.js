console.log(global);

global.setTimeout(() => {
    console.log('In the timeout');
    clearInterval(int);
}, 2000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);