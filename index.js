/*
 * Create and export getEmailCount function here
 * The function should take a string and return count of valid emails
 */

export const getEmailCount = (inputString) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = inputString.match(emailRegex);
    if(!matches){
        return 0
    } else {
        return matches.length;
    }    
}

