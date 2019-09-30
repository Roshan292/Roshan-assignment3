function* anothergenerator(i){
    yield i+1;
    yield i+2;
    yield i+3;
}
function* generator(i){
    yield i;
    yield* anothergenerator(i);
    yield i+10;
}
var gen=generator(10);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);