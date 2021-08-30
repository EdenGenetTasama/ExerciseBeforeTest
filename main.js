// כתוב פונקציה המקבלת מערך ומדפיסה אותו 3 פעמים
// var counter=0;
// function print3Times(array){
//     for (var i=0; i<3 ; i++){
//         console.log(array);
      
//     }
// }

// var x = [1,2,3,4,5,6]
// print3Times(x);

// ======================================================
// הדפס את אורך הטקסט "hello"
    // var lengthString = "hello";

    // console.log(lengthString.length);


// ======================================================

// הדפס את אורך המערך: [2,5,7,1,9]

// var arrayLength = [2,5,7,1,9];
// console.log(arrayLength.length);

// ======================================================

// הוסף אלמנט למערך מהשאלה השנייה

// arrayLength.push(10,20,30,40)
// console.log(arrayLength.length);
// console.log(arrayLength);
// ======================================================
// מחק את האלמנט האחרון

// arrayLength.splice(arrayLength.length-1);
// console.log(arrayLength);

// arrayLength.pop();
// console.log(arrayLength);

// ======================================================

// מחק 3 אלמנטים אחרונים אלמנט למערך מהשאלה השנייה

// arrayLength.splice(2,3);
// console.log(arrayLength);
// var length = arrayLength.length;

// arrayLength.splice(length-3,3);
// console.log(arrayLength);

// ======================================================

// צור אובייקט של רכב: דגם, שנתון, מחיר, מהירות עם פונקציה של נוסע - מוסיף 10 למהירות

const car = {
    degem: "SUZUKI",
    year: 2016 , 
    price: 50000 ,
    speed :250, 
    passenger : function(person) {
        return this.speed+=90
    }
}

console.log(car.speed);
console.log(car.passenger());