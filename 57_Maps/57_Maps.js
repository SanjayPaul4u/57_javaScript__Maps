console.log("This is tutorial 57");
// Maps in javaScript

const myMap = new Map();

const key1 = "mango",key2 ={},key3 =function (){};

myMap.set(key1, "key1 is a stirng");
myMap.set(key2, "key2 is a blanck object");
myMap.set(key3, "key3 is a empty function");

// console.log(myMap);

// GETTING VALUES OF MYmAP
let value1 = myMap.get(key1);
    // value1 = myMap.get(key2);
    // value1 = myMap.get(key3);
// console.log(value1);

// GET THE SIZE OF MAP
let size = myMap.size;
// console.log(size);


//YOU CAN USE FOR-OF-LOOP FOR GET VALUES AND KEYS
for(let [key, value] of myMap){
    // console.log(key, value);
}

//GET ONLY KEY FROM MYmAP
for(let key of myMap.keys()){//we don't have to use keys() if we write like that [key];
    // console.log(key);
}
//GET ONLY value FROM MYmAP
for(let value of myMap.values()){
    // console.log(value);
}


//YOU CAN USE FOR-EACH-LOOP FOR GET VALUES AND KEYS
myMap.forEach((value, key)=>{
    console.log("key is : ", key);
    console.log("value is : ", value);
})


//CONVERT MAP TO ARRAY
let mapArray = Array.from(myMap);
console.log("The map's array is: ", mapArray);

let valueOFmapArray = Array.from(myMap.values());
console.log("The  map's value's array is: ", valueOFmapArray);

let keyOFmapArray = Array.from(myMap.keys());
console.log("The map's key's array is: ", keyOFmapArray);





