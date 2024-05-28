// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    // let cats = ["Milo", "Otis", "Garfield"];
    cats.push(name);
}

function destructivelyPrependCat(name){
    // let cats = ["Milo", "Otis", "Garfield"];
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    // let cats = ["Milo", "Otis", "Garfield"];
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    // let cats = ["Milo", "Otis", "Garfield"];
    cats.shift();
}

function appendCat(name){
    // let cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name){
    // let cats = ["Milo", "Otis", "Garfield"];
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(){
    // let cats = ["Milo", "Otis", "Garfield"];
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat(){
    // let cats = ["Milo", "Otis", "Garfield"];
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}	