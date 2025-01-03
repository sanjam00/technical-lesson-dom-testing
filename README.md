# Technical Lesson: Testing DOM Manipulation with JavaScript

## Introduction

In this lesson, we’ll walk through the steps of testing DOM (Document Object Model) manipulation using JavaScript and Jest. This involves setting up the DOM, simulating user interactions, and ensuring that elements are dynamically updated or created as expected.

A web development team needs to ensure their application dynamically updates the DOM as expected when users interact with the interface. The goal is to write unit tests that validate these updates, ensuring reliability and maintainability in the application.

## Challenge

1. **Define the Problem:**
   - Identify the interactivity requirements for adding a new item to a list when a button is clicked.

2. **Access Elements:**
   - Select the DOM elements that need to be manipulated.

3. **Write a Function to Add Items:**
   - Dynamically add list items to the DOM.

4. **Attach Event Listeners:**
   - Add event listeners to trigger the function based on user actions.

5. **Test and Debug:**
   - Write tests using Jest to validate the functionality.
   - Simulate user interactions with jsdom and ensure elements are correctly added.

6. **Document and Maintain:**
   - Maintain proper documentation and version control for the project.

## Bonus Challenge

7. **Implement Additional Features and Improvements**

## Instructions

1. **Fork and Clone the Repository:**
   - Go to the provided GitHub repository link.
   - Fork the repository to your GitHub account.
   - Clone the forked repository to your local machine.
   - Open the project in VSCode.
   - Run `npm install` to install all necessary dependencies.

2. **Define the Problem:**
   - Identify interactivity requirements. Our goal is to add a new list item to the DOM when a button is clicked.
   - **User Action:** Clicking the "Add Item" button should add a new list item.
   - **Constraints:** Ensure the button click correctly triggers the function and that the function works consistently.

3. **Design and Develop the Code:**

   - **Step 1: Access Elements**
     - Select the button and list elements we want to manipulate in the DOM.
       ```javascript
       const button = document.getElementById("add-item");
       const list = document.getElementById("item-list");
       ```

   - **Step 2: Write the Function**
     - Create a function to dynamically add a list item.
       ```javascript
       function addItem() {
         const newItem = document.createElement("li");
         newItem.textContent = "New Item";
         list.appendChild(newItem);
       }
       ```

   - **Step 3: Attach Event Listeners**
     - Add an event listener to the button to call the function when clicked.
       ```javascript
       button.addEventListener("click", addItem);
       ```

4. **Test and Refine:**
   - Use Jest with jsdom to write a test for the function.
   - Simulate a button click and verify the new list item is added.

5. **Document and Maintain:**
   - Use version control to track changes and updates.
   - Schedule regular reviews to ensure content remains relevant and accurate.
   - Maintain a repository with all lesson materials and example code.

## Bonus Challenge: Implement Additional Features and Improvements

1. **Handling Edge Cases:**
   - Ensure the button cannot add empty or duplicate items.

2. **Add New Features:**
   - Allow users to customize the text of the new list item.
   - Provide a way to remove or edit existing items.

3. **Experiment with Other Event Types:**
   - Implement keyboard shortcuts to add items.
   - Allow users to drag and drop items within the list.

## Resources

- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
