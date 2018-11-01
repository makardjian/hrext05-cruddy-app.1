




$(document).ready(function(){

  //variables
  var list = document.querySelector('#list');
  var addItem = document.querySelector('.add-item-btn');
  var clearBtn = document.querySelector('.clear-checked-btn');
  var inputText = document.querySelector('.text-input');
  var storageKey = 0

  //functions
  var Grocery = function(groceryName) {
    this.groceryName = groceryName;
    this.createdAt = new Date();
    this.complete = false;
  }




  // add an item to the list
/*
    Strategy:
      /if the inputText.value.length is > 0:
        -Concatenate a new List element together 
        -appnd the new list item to 'list' which is equal to the ul div.
        -put the new list item into localStorage
        -

    */

  addItem.addEventListener('click',function(e){
    if (inputText.value.length > 0) {
      var currentItem = new Grocery(inputText.value)
      localStorage.setItem(storageKey, currentItem.groceryName)
      list.innerHTML += '<li>' + inputText.value + '</li>';
      inputText.value = '';
      storageKey++
      console.log(localStorage)
      // console.log(currentItem)
    }


  });

  // remove item from app

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".show-text").empty();
  });
});