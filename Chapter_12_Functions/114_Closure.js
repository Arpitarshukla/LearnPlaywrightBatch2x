function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.increment();             // 3 times increment from 0 (++)
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();            // 1 decrement
console.log(counter.get());