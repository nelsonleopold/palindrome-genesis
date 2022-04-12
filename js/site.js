// Step One, get the information (controller, accept requests)
function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    // validate that input isn't an empty string
    if (msg !== '') {
        // convert to lowercase
        msg = msg.toLowerCase();

        // remove spaces and special characters using regex
        msg = msg.replace(/[^A-Z0-9]/ig, '');

        // check to see if palindrome
        let message = palindromeChecker(msg);

        displayMessage(message, msg);
        clrInputBox();
    } else { // if the string is empty
        alert("Please enter some text. Otherwise I'll be sad.");
        clrInputBox();
    }
}

function palindromeChecker(message) {

    let msg = message;
    let revMsg = "";
    // could also call reverse string function from other assignment
    revMsg = msg.split("").reverse().join("");

    // boolean used to track if palindrome
    let isPalindrome = true;

    // since palindrome is same backwards and forwards only need to check to halfway point
    // loop halfway through the array
    for (let i = 0; i < (message.length - 1) / 2; i++) {
        // check if value at array and reversed array match at each index up to one half the length
        if (msg[i] != revMsg[i]) {
            isPalindrome = false;
            return isPalindrome;
        }
    }
    return isPalindrome;
}

// Final Step, display the information (view, displays stuff on screen)
function displayMessage(isPalindrome, msg) {
    // reverse the message for the output
    let revMessage = msg.split("").reverse().join("");

    // first get the element from the page
    element = document.getElementById("results");

    if (isPalindrome == false) {
        // set the message for the element when not a palindrome
        element.innerHTML = `The word is: ${msg}<br>
            The word reversed is: ${revMessage}<br>
            Sorry, I'm not a palindrome. :(`;
    } else {
        // set the message for the element when a palindrome
        element.innerHTML = `The word is: ${msg}<br>
        The word reversed is: ${revMessage}<br>
        I'm a palindrome!!! :)`;
    }
}

function clrInputBox() {
    // this clears the input field after it's displayed
    document.getElementById("txtMessage").value = '';
}