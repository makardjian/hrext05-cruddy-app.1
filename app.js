




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
  addItem.addEventListener('click',function(e){
    if (inputText.value.length > 0) {
      var currentItem = new Grocery(inputText.value);
      console.log(currentItem)
      localStorage.setItem(storageKey, JSON.stringify(currentItem));
      list.innerHTML += '<li>' + inputText.value + '</li>';
      inputText.value = '';
      storageKey++;
      // console.log(window.localStorage)  //for some reason my local storage values aren't printing to console??
    } else {
      alert('Add something to your Grocery List!')
    }
  });


  //check a grocery off the list
  list.addEventListener('click', function(e) {
    var clickedItem = event.target;
    $(clickedItem).addClass('complete')
    console.log(event.target)
  })



  // remove checked items from the list
  clearBtn.addEventListener('click', function() {
    $('.complete').remove();
  });

  //edit items on the list:


});


