// spaghetti monster code: 
// 1. Reading exercise: what does this code do?
// 2. Clean up and organize this code (MVC refactoring)

// These global variables are view code
const mainContent = document.getElementById('content'); // Defines variable for container; mainContent refered to a section without a heading, so I replaced the section element by a main element in the DOM
const newListButton = document.getElementById('newListButton'); // Defines variable for new-list button.

// Controller code (inside of it, there are view and model elements)
newListButton.addEventListener('click', () => {
    // Clear the content (view code)
    mainContent.innerHTML = ''; // Says container starts empty. This is also done in the global scope.
    
    // Create a section container (view code)
    const section = document.createElement('section');
    // Again, this section didn't have a heading (a mistake). I added a heading (view code).
    const h2ByMariePierreLessard = document.createElement('h2');
    h2ByMariePierreLessard.textContent = 'Building blocks for list-item creation';
    // Back-ticks are required because there is an apostrophe in the text node.
    const subtitleByMariePierreLessard = document.createElement('p');
    subtitleByMariePierreLessard.textContent = `Warning: it's not fully functional, and it may never be!`;
    
    // Create label (view code)
    const label = document.createElement('label');
    label.textContent = 'Name:';
    label.setAttribute('for', 'listName');
    
    // Create text input (view code)
    const input = document.createElement('input');
    /* input.type and input.id are an alternative to input.setAttribute(); the latter is used above for the label 
    Syntax: setAttribute(name, value) 
    https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute */
    input.type = 'text'; 
    input.id = 'listName';
    input.value = 'default name';
    
    // Create OK button (view code)
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    // Controller code
    /* To make the app functional, the found value should be displayed on the page, not just in the console. 
    The event listener is missing the code required to append a list item containing the user-defined text node. 
    Instead, the event listener makes the section created by the newListButton event listener (the one with an input) disappear and thereby replaces the input section by the text that was initially visible to the user, before the footer button was clicked. 
    The Cancel button does the same thing. */
    okButton.addEventListener('click', () => {
        console.log('OK clicked, list name:', input.value);
        firstElementsByMariePierreLessard();
    });
    
    // Create Cancel button (view code)
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    // Controller code
    /* The Cancel button's event listener makes the section created by the newListButton event listener (the one with an input) disappear and thereby replaces the input section by the text that was initially visible to the user, before the footer button was clicked. */
    cancelButton.addEventListener('click', () => {
        console.log('Cancel clicked');
        firstElementsByMariePierreLessard();
    });
    
    // Append all elements to the section (view code)
    section.appendChild(h2ByMariePierreLessard);
    section.appendChild(subtitleByMariePierreLessard);
    section.appendChild(label);
    section.appendChild(input);
    section.appendChild(okButton);
    section.appendChild(cancelButton);
    
    // Append section to content (view code)
    mainContent.appendChild(section);
});

// #region for view code only
function firstElementsByMariePierreLessard() {
    mainContent.innerHTML = '';
    const list = document.createElement('div');
    list.innerHTML = '<h2>List View</h2><ul></ul>';
    mainContent.appendChild(list);
};

firstElementsByMariePierreLessard();
// #endregion
