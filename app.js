

//NEED TO FIGURE OUT HOW TO KEEP GROCERY ITEMS ON THE PAGE WHEN THE PAGE RELOADS


$(document).ready(function(){

  //variables
  var list = document.querySelector('#list');
  var addItem = document.querySelector('.add-item-btn');
  var clearBtn = document.querySelector('.clear-checked-btn');
  var updateBtn = document.querySelector('.update-item-btn')
  var inputText = document.querySelector('.text-input');
  var storageKey = 0
  var storageKeysForRemoval =[];

  //functions
  var Grocery = function(groceryName) {
    this.groceryName = groceryName;
    this.createdAt = new Date();
    this.complete = false;
  }


  // add an item to the list
  addItem.addEventListener('click',function(e){
    if (inputText.value.length > 0) {
      var currentItem = new Grocery(inputText.value);
      // console.log(currentItem)
      localStorage.setItem(storageKey, JSON.stringify(currentItem));
      list.innerHTML += '<li>' + inputText.value + '</li>';
      inputText.value = '';
      storageKey++;
      // console.log(window.localStorage)  //for some reason my local storage values aren't printing to console??
    } else {
      alert('Add something to your Grocery List!')
    }
  });


  //add an item by pressing 'Enter' on keyboard instead of clicking 'Add Item' button
    inputText.addEventListener('keydown',function(e){
    if (inputText.value.length > 0 && e.which === 13) {
      var currentItem = new Grocery(inputText.value);
      // console.log(currentItem)
      localStorage.setItem(inputText.value, JSON.stringify(currentItem));
      list.innerHTML += '<li id= ' + inputText.value + '>' + inputText.value + '</li>';
      inputText.value = '';
      storageKey++;
      // console.log(window.localStorage)  //for some reason my local storage values aren't printing to console??
    } 
  });


  //check a grocery item off the list
  list.addEventListener('dblclick', function(e) {
    var clickedItem = e.target;
    $(clickedItem).addClass('complete');
    storageKeysForRemoval.push(e.target.id);

    console.log(storageKeysForRemoval);

  });


  // remove checked items from the list
  clearBtn.addEventListener('click', function() {
    $('.complete').remove();

    for (var i = 0; i < storageKeysForRemoval.length; i++) {
      localStorage.removeItem(storageKeysForRemoval[i])
    }

    storageKeysForRemoval = [];
    console.log(storageKeysForRemoval)
  });



  //edit items on the list:
  updateBtn.addEventListener('click', function(){
  });


});




