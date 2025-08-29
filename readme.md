1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  Answer: getElementById, getElementsByClassName, and querySelector / querySelectorAll are the way of selecting element of an html file.

   - getElementById: select elements by id name,it returns a single element.Event listner can be added to it.
   - getElementsByClassName: select elements by class name, it returns an array.To get the elements, we need to run loop.
   - querySelector: select elements by css seclector, it returns an object (the first matching element).
   - querySelectorAll: select elements by css seclector, it returns an object (all the matching element).

2. How do you create and insert a new element into the DOM?

  Answer: To create and insert a new element into the DOM:
  
   - First we have to select the parent element.
   - Create a new element.
   - Set the content by using innerText, innerHTML etc.
   - To insert, we need to append it into the DOM.
              
In this emergency-hotline-service, we have done it in the call history section:

      const callHistory  =getElement("call-history");
      const newHistory = document.createElement("div");
      newHistory.innerHTML=`
                <div class="mt-5 bg-gray-100 rounded-xl flex justify-between items-center p-4">
                    <div class="">
                        <h2 class="font-semibold text-sm">${title}</h2>
                        <p>${number}</p> 
                    </div>
                      <p class="text-sm">${currentTime}</p>
                </div>`;
    callHistory.append(newHistory); 
  
3. What is Event Bubbling and how does it work?

  Answer: When an event occurs on an element, the event first happens on the target/child element. Then it goes upward/to its parent elements- then grandparent until it gets the root of the DOM. This is called Event Bubbling. 
  Working Procedures-
  
  - An event occurs on a child element(like:click).
  - This click handles the target/child element.
  - Then it bubbles up to the parent, then grandparent, and so on, until it reaches the root of the DOM.
  - Whatever it gets as EventListener on the way to the root, executes all. 

4. What is Event Delegation in JavaScript? Why is it useful?

  Answer: Event Delegation is a process of setting event handler to the parent element instead of individual child elements. The event bubbles up to its parent and handle the event. It is useful because- 
  
  - we do not need to add event handler to each child separately.
  - it also works for the newly added child elements.
  - it takes less memory space. 
     
5. What is the difference between preventDefault() and stopPropagation() methods?

  Answer: 
  - preventDefault() is a function that prevents the default behaviour of an element from occuring. For example: In general, clicking on a link(<a>) takes to another page. If we use preventDefault(), it will not go to another page or stop the link from opening.
    
  - stopPropagation() is a function that stops the propagation of an event whether it is in bubbling phase or capturing phase. JS uses bubbling by default. So, it stops the child to parent propagation. For example: If we click a button inside the footer section, normally the event bubbles up to the footer's parent. But if we use stopPropagation(), it will not move to the footer's parent. 

