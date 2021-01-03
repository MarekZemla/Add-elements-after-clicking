### This is a simple program written mainly in JS, the task of which is to display numbered elements (squares). Every fifth element is a white circle.

### [click here to see how it works](https://marekzemla.github.io/Add-elements-after-clicking/)
### // 1. 
First, I get the item I will work on ... in this case using the querySelector method while assigning it to a constant variable. This method searches for the first item and stops searching after finding the first ...
### // 2.
using console.log, I check in the console if I entered the method correctly and whether the item was found ...
// console.log (btn)

### // 3.
Then I set up listening with addEventListener. Always at the ends before the BODY closing tag. I set the action to click and set the function to the declared variable that I previously created and to which I assigned the function to be performed. It has to be created above the listening method so that the interpreter finds it earlier and can assign it inside the method below.

 ### // 4.
 Create a new element with the method of the const variable and with document.createElement () puts the element in parentheses. In this case it will be div
### // 5.
With document.body.appendChild () I add a div to the page.
### // 6. 
I create a counter using let number which cannot be const because execution of the function must update it, and which must be outside the function so that its contents are not reset every time the function executes. Then, inside the function, I assign the textContent property to the diva and refer it to the value of that variable that is outside of that function.

### // 7.
CONDITIONAL if STATEMENT which will refer to every fifth div element.
### // 8.
For this I use the MODULO division method. I divide the variable number by 5 in it, which gives me a remainder of 0. That way in modulo method saying that if there is no remainder then div is assigned to a clase circle, which gives me every fifth div element, because 5/5 is 0 and there is no rest, 10/5 is 2 but no rest, and so on every five.
Otherwise specifying the quotient of a given number divided by itself does not give the remainder of the division.
