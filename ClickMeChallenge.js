// Write a simple component called App that displays a button with the text
//  "Click me!" and logs a “Clicked!” message to the console when clicked. 
//  We have already written some starting code for you.

const App = () => {
	// Edit this component
	return <button onClick={() => console.log("Clicked!")} data-testid="button">Click me!</button>
}

export default App
