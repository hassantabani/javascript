// Question 1

// function randNum(num){
//     return function (n){
//         return num + n;
//     }
// }

// let random = randNum(5);
// console.log(random(70));
// console.log(random(45));


// // Question 2 

// function searchArray(arr, val) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === val) {
      
//       return true;
//     }
    
//     return searchArray(arr.slice(1), val);
//   };
//   const arr = [1, 2, 3, 4, 5];
//  console.log(searchArray(arr,8));

// Question 3
//   function addText(text){
//     let paragraph=document.createElement('p')
//     paragraph.textContent=text;
//     document.body.appendChild(paragraph);
//   }

//   addText('This is a paragraph');  

// Question 3  question 3 have another way please tell me which way is correct ??

//    function addText(text){
//     let paragraph=document.getElementById('para1')
//    paragraph.textContent=text;
//    document.body.appendChild(paragraph);
//   }

//    addText('This is a paragraph'); 

// // Question 4

// function addListItem(text) {
//     let list = document.getElementById('list');
//     list.textContent=text
//   }

//   addListItem("New list item");



// Question 4 question 4 also have another way please tell me which way is correct ??

// function addListItem(text) {
//      // let newListItem = document.createElement("li");
   
//     // newListItem.textContent = text;
  
//     // let list = document.querySelector("ul");
   
//     // list.appendChild(newListItem);
// }

// addListItem("New list item");



// Question 5
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  
//   let myElement = document.getElementById("my-element");
//   myElement.innerHTML='change background color'
// changeBackgroundColor(myElement, "blue");

// Question 6
// function saveLocalStorage(key, val) {
//     localStorage.setItem(key, JSON.stringify(val));
//   }

//   var myObject = { name: "Hassan", age: 21 };
//   saveLocalStorage("my-object", myObject);


// Question 7
  
// function getFromLocalStorage(key) {
//     let objectString = localStorage.getItem(key);
//     return JSON.parse(objectString);
//   }
//   let myObject = getFromLocalStorage("my-object");
  

// Question 8 