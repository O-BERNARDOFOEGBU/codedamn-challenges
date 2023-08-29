/*
 * Create and export getEmailCount function here
 * The function should take a string and return count of valid emails
 */

export const getEmailCount = (inputString) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = inputString.match(emailRegex);
    if(!matches){
        return 0
    }
    return matches.length;  
}

// study regex

// Write a simple component called App that displays a button with the text
//  "Click me!" and logs a “Clicked!” message to the console when clicked. 
//  We have already written some starting code for you.

const App = () => {
	// Edit this component
	return <button onClick={() => console.log("Clicked!")} data-testid="button">Click me!</button>
}

export default App
