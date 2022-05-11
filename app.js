const fruits= [
  "apple",
  "apricot",
  "avocado",
   "banana",
   "bell pepper",
   "bilberry",
   "blackberry",
   "blackcurrant",
   "blood orange",
  // "blueberry",
  // "boysenberry",
  // "breadfruit",
  // "canary melon",
  // "cantaloupe",
  // "cherimoya",
  // "cherry",
  // "chili pepper",
  // "clementine",
  // "cloudberry",
  // "coconut",
  // "cranberry",
  // "cucumber",
  // "currant",
  // "damson",
  // "date",
  // "dragonfruit",
  // "durian",
  // "eggplant",
  // "elderberry",
  // "feijoa",
  // "fig",
  // "goji berry",
  // "gooseberry",
  // "grape",
  // "grapefruit",
  // "guava",
  // "honeydew",
  // "huckleberry",
  // "jackfruit",
  // "jambul",
  // "jujube",
  // "kiwi fruit",
  // "kumquat",
  // "lemon",
  // "lime",
  // "loquat",
  // "lychee",
  // "mandarine",
  // "mango",
  // "mulberry",
  // "nectarine",
  // "nut",
  // "olive",
  // "orange",
  // "papaya",
  // "passionfruit",
  // "peach",
  // "pear",
  // "persimmon",
  // "physalis",
  // "pineapple",
  // "plum",
  // "pomegranate",
  // "pomelo",
  // "purple mangosteen",
  // "quince",
  // "raisin",
  // "rambutan",
  // "raspberry",
  // "redcurrant",
  // "rock melon",
  // "salal berry",
  // "satsuma",
  // "star fruit",
  // "strawberry",
  // "tamarillo",
  // "tangerine",
  // "tomato",
  // "ugli fruit",
  // "watermelon"
]
var fruitsobject = [
  {
   name: 'apple',
   number:777777 
 },
  { 
   name: 'mango',
   number:99999
  },
  {
    name: 'graps',
    number:1111
 },
  {
    name: 'watermelon',
    number:2222
 },
  {
    name: 'banan',
    number:333
  },
  {
    name: 'lichi',
    number:333
  },
  {
    name: 'papaya',
    number:333
  },
  {
    name: 'kivi',
    number:333
  },
  {
    name: 'kivi',
    number:333
  }
  ,
  {
    name: 'kivi',
    number:333
  },
  {
    name: 'kivi',
    number:333
  }

    ];
    //step-1-- get input value
    // step-2--submit input value in array
     let arr=["apple",
     "apricot",
     "avocado",];

    var app = document.querySelector('#app');
    const ul = document.createElement("ul");
    ul.setAttribute("id", "myUL")
    const li=document.createElement("li");
    li.setAttribute("id", "li");
    
      //make list with map
    ul.innerHTML=(fruits.map(function (item) {
      return '<li>' +item + '</li>';
    })).join('');
    app.appendChild(ul);

    var myForm=document.getElementById('myForm');
      myForm.addEventListener('submit',function(event){
      event.preventDefault();
      var formInput=document.getElementById('formInput');
      //remove extra apace from input
      // newStr = myStr.replace(/  +/g, '');
      
      var letterNumber = /^[0-9]+$/;
     
      if( formInput.value == null ||formInput.value.match(/^ *$/) !== null ||formInput.value.match(letterNumber) ) {
        alert("invalid text");
        formInput.value="";
        return false;
      }
      // else if(formInput.value.match(letterNumber)){
      //   alert("number not ecapt");
      //   formInput.value="";
      //   return false;
      // }
      else{
        fruits.push(formInput.value)
        //make list with map
        ul.innerHTML=(fruits.map(function (item) {
        return '<li>' +item + '</li>';
      })).join('');
      }
   

    })
    // console.log(arr)


 
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    console.log("ul"+ul.innerText)
    console.log(input)
    console.log("filter"+filter)

    for (i = 0; i < li.length; i++) {
        // a = li[i].getElementsByTagName("a")[0]; use while li contain anchor tag as below
       // txtValue = a.textContent || a.innerText;
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter)  > -1) {
            li[i].style.display ="";
        } else {
            li[i].style.display = "none";
        }
   
        
    }
}
 //  function onSubmit(){
  //  formInput=document.getElementById('formInput');
  //  inputValue=formInput.value;
  //  fruits.push(inputValue);

  //  formdata.innerHTML=(fruits.map(function (item) {
  //   return '<li>' +item + '</li>';
  // })).join('');

  //  console.log(arr)
  //  }
  //  formdata.innerHTML=(arr.map(function (item) {
  //    return '<li>' +item + '</li>';
  //  })).join('');
   


    //////form submit for add fruits

// Get the app element
// var app = document.querySelector('#app');
// const ul = document.createElement("ul");
// ul.setAttribute("id", "myUL")
// const li=document.createElement("li");
// li.setAttribute("id", "li")

// ul.innerHTML=(arr.map(function (item) {
// 	return '<li>' +item + '</li>';
// })).join('');

//////////////////////for next project compete form////////////

// var app = document.querySelector('#app');
// const ul = document.createElement("ul");
// ul.setAttribute("id", "myUL")
// const li=document.createElement("li");
// li.setAttribute("id", "li")
// ul.innerHTML=(fruitsobject.map(function (item) {
//   return '<li>' +item.name + '</li>';
// })).join('');
// app.appendChild(ul);

// var myForm=document.getElementById('myForm');
//   myForm.addEventListener('submit',function(event){
//   event.preventDefault();
//   var formInput=document.getElementById('formInput').value;
//   fruitsobject.push({name:formInput})
// console.log(arr)
// ul.innerHTML=(fruitsobject.map(function (item) {
//   return '<li>' +item.name + '</li>';
// })).join('');

// })
//////////////////////for next project compete form////////////
