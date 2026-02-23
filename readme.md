### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- ans : getElementbyId provides the element via its id and getElementsByClassName provides element by its classname .Both are provides HTML collection list from DOM Tree.On the other hand querySelector can provides element by tagname , ID, Class name .but it only provide the 1st element match by id , class or tag name . querySelectorAll is same as querySelector.But it provides the the element matched by , tag or class name . querySelector and querySelectorAll provides NodeList from DOM Tree.

### 2. How do you create and insert a new element into the DOM?
- ans : step-1 : get the parent where i want to insert the new created element. step-2 : write a new var and create elemet using createElement('element name') mathood. step-3 : set content by  innerText or innerHTML . Step-4 : append the element to the parent using appendChild() methood.

### 3. What is Event Bubbling? And how does it work?
- ans : Event bubbling is a DOM event management process that work from trigger child to parent elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?
- ans : Event delegation is a very useful DOM Event contorolling system . It is very useful cause it consume less memory , cleaner code and easier to controll event by parent .we can controll every event in child element just using event delegation in parent element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- ans : Differce between preventDefault() and stopPropagation() methods is preventDefault() works to stop browser regular behavior and stopPropagating() works to stop  event bubbling .