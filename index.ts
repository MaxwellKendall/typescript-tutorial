// dont know what the input will be and therefore the return.
// by convention, IDontKnow is T
const fill = <IDontKnow extends unknown>(arr:any[], value:IDontKnow) => {
    return arr.map(() => value);
};

const result = fill([1,2,3], 1);

// result.map((v) => v.toUpperCase()); shows error
result.map((v) => v.toExponential());