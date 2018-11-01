### Cruddy App Todo

#### Basic Improvments (requirements)

Goal of the App: Grocery List

- [ ] create indivdiual items
      -> create an array that stores the individual grocery objects as they're created (on click) and adds them into localStorage.
          -> This way grocery items won't get deleted when the page reloads

      -> Create an 'Add Item' button with associated 'Enter New Grocery' input text field 

      -> Each item display should be DOUBLE clickable so that you can check off an item. 
          --> A property name on the grocery object named 'checked' will go from false to true on click.

- [ ] delete individual items
    -> Button at the top of the page to "Clear checked groceries"
      -> On click, this button will itterate over the array of grocery objects and remove the ones where the 'checked' property is true

- [ ] edit individual items    
    -> add a 'update item' button at top of page 
    -> clicking an individual display div should change the placeholder text in the input field to "Edit item"
      ->once user inputs new text in the input field and clicks 'update item', then that text field should overwrite the text-value property on the grocery object, and change the date-created property to the new date.

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)


#### Plan for Basic Requirements:
- [ ] 
- [ ] 

#### My Spin
  -> Implement animations on the groceries when they are double clicked. 
    -checkboxes, strikethrough to show they're complete.

  ->add a fun grocery cart image to the title of the page 

  ->Try to integrate a bootstrap library if you have time. 




