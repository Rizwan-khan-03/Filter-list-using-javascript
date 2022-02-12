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
  "blueberry",
  "boysenberry",
  "breadfruit",
  "canary melon",
  "cantaloupe",
  "cherimoya",
  "cherry",
  "chili pepper",
  "clementine",
  "cloudberry",
  "coconut",
  "cranberry",
  "cucumber",
  "currant",
  "damson",
  "date",
  "dragonfruit",
  "durian",
  "eggplant",
  "elderberry",
  "feijoa",
  "fig",
  "goji berry",
  "gooseberry",
  "grape",
  "grapefruit",
  "guava",
  "honeydew",
  "huckleberry",
  "jackfruit",
  "jambul",
  "jujube",
  "kiwi fruit",
  "kumquat",
  "lemon",
  "lime",
  "loquat",
  "lychee",
  "mandarine",
  "mango",
  "mulberry",
  "nectarine",
  "nut",
  "olive",
  "orange",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "physalis",
  "pineapple",
  "plum",
  "pomegranate",
  "pomelo",
  "purple mangosteen",
  "quince",
  "raisin",
  "rambutan",
  "raspberry",
  "redcurrant",
  "rock melon",
  "salal berry",
  "satsuma",
  "star fruit",
  "strawberry",
  "tamarillo",
  "tangerine",
  "tomato",
  "ugli fruit",
  "watermelon"
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

// Get the app element
var app = document.querySelector('#app');
const ul = document.createElement("ul");
ul.setAttribute("id", "myUL")
const li=document.createElement("li");
li.setAttribute("id", "li")

ul.innerHTML=(fruits.map(function (item) {
	return '<li>' +item + '</li>';
})).join('');

app.appendChild(ul);
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