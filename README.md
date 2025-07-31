# Technical Lesson: Testing DOM Manipulation with JavaScript

## Introduction

In this lesson, we’ll walk through the steps of testing DOM (Document Object Model) manipulation using JavaScript and Jest. This involves setting up the DOM, simulating user interactions, and ensuring that elements are dynamically updated or created as expected.

A web development team needs to ensure their application dynamically updates the DOM as expected when users interact with the interface. The goal is to write unit tests that validate these updates, ensuring reliability and maintainability in the application.

## Tools & Resources

- [GitHub Repo](https://github.com/learn-co-curriculum/course-3-module-6-dom-testing-technical-lesson)
- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)
- [removeChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- [element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

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
      - Note: we've included `jest@^30.0.5`, `jest-environment-jsdom@^30.0.5"`, and `jsdom@^26.1.0`
      - In `package.json`, we've also included a test script and set up for jest to run.
```json
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "testEnvironment": "jsdom"
  },
  "devDependencies": {
    "jest": "^30.0.5",
    "jest-environment-jsdom": "^30.0.5",
    "jsdom": "^26.1.0"
  }
```

2. **Define the Problem:**
   - Identify interactivity requirements. Our goal is to add a new list item to the DOM when a button is clicked.
   - **User Action:** Clicking the "Add Item" button should add a new list item.
   - **Constraints:** Ensure the button click correctly triggers the function and that the function works consistently.

3. **Design and Develop the Code:**

   - **Step 1: Access Elements**
     - After checking for DOMContentLoaded, select the button and list elements we want to manipulate in the DOM.
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

```javascript
/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

beforeAll(() => {
   document.body.innerHTML = html;

   // Load and run the script once
   require("../index.js");

   // Fire DOMContentLoaded once so the event listener gets attached
   document.dispatchEvent(new Event("DOMContentLoaded"));
});

beforeEach(() => {
   // Clear the list before each test
   document.getElementById("item-list").innerHTML = "";
});

describe("Add Item Button", () => {
   test("adds a new <li> with 'New Item' when the button is clicked", () => {
      // grab add item button and list where items are displayed
      const button = document.getElementById("add-item");
      const list = document.getElementById("item-list");

      // check the list is initially empty
      expect(list.children.length).toBe(0);

      // simulate a button click event
      button.click();

      // get all items in the item list and verify the count and text
      const items = list.querySelectorAll("li");
      expect(items.length).toBe(1);
      expect(items[0].textContent).toBe("New Item");
   });
});
```

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


