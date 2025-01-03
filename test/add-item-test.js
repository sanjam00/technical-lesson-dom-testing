/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

// Load the HTML file into jsdom
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8')

let dom
let document

beforeEach(() => {
  // Create a fresh DOM for each test
  dom = new JSDOM(html, { runScripts: 'dangerously' })
  document = dom.window.document
  require('../script') // Load the script file to apply the event listener
})

describe('Add Item Functionality', () => {
  test('adds a new item to the list when the button is clicked', () => {
    // Select the button element
    const button = document.getElementById('add-item')

    // Simulate a button click
    button.click()

    // Get all <li> elements in the list
    const items = document.querySelectorAll('#item-list li')

    // Verify that one item has been added
    expect(items.length).toBe(1)
    expect(items[0].textContent).toBe('New Item')
  })

  test('adds multiple items to the list on repeated button clicks', () => {
    const button = document.getElementById('add-item')

    // Simulate multiple button clicks
    button.click()
    button.click()
    button.click()

    // Get all <li> elements in the list
    const items = document.querySelectorAll('#item-list li')

    // Verify the correct number of items are in the list
    expect(items.length).toBe(3)
    expect(items[0].textContent).toBe('New Item')
    expect(items[2].textContent).toBe('New Item')
  })

  test('does not add an item if the list is missing', () => {
    // Remove the list element from the DOM
    const list = document.getElementById('item-list')
    list.remove()

    // Select the button element
    const button = document.getElementById('add-item')

    // Simulate a button click
    button.click()

    // Verify that no error is thrown and no items are added
    const items = document.querySelectorAll('#item-list li')
    expect(items.length).toBe(0)
  })
})
