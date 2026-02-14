let a = "somthing";
let w = "hello there";
let z = "Hello world";

// how to know the length of a?
let alen = a.length;
console.log({ alen });

// extract "thing" from somthing
let sliceThing = a.slice(4, 9);
console.log({ sliceThing });

// extract character at point 5
let charAt5 = a.charAt(5);
console.log({ charAt5 });

// how to remove traling spaces
let trimmed = w.trim();
console.log({ trimmed });

// how to convert string to upper/lower case?
let upper = z.toUpperCase();
let lower = z.toLowerCase();

console.log({ upper }, { lower });
