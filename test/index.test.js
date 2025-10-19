/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

//load the html file into jsdom
const html = fs.readFileSync(path.resolve("index.html"), "utf-8");

let dom;
let document;

beforeAll(() => {
    document.body.innerHTML = html;

    //Load and run the script once
    require("../index.js");

    //Fire DOMContentLoaded once so the event listener gets attached
    document.displatchEvent(new Event("DOMContentLoaded"));
})

beforeEach(() => {
    //Clear list for each test
    document.getElementByID("item-list").innerHTML = "";
});

describe("Add Item Button", () => {
    test("add a new item to the list when the button is clicked", () => {
        //grab add item button and list where items are displayed
        const button = document.getElementByID("add-item");
        const list = document.getElementByID("item-list");

        //check the list is initially empty
        expect(list.children.length).toBe(0);

        //simulate button click
        button.click();

        //Get all the <li> elements in the list and verify the count and text
        expect(list.children.length).toBe(1);

        expect(list.children[0].textContent).toBe("New Item");
    })
})