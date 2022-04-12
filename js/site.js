// Step One, get the information (controller, accept requests)
function getMessage() {

    let msg = document.getElementById("txtMessage").value;

    // validate that input isn't an empty string
    if (msg !== '') {
        // convert to lowercase
        msg = msg.toLowerCase();
        // remove spaces
        msg = msg.replace(/\s+/g, '');

        // check to see if palindrome
        let message = palindromeChecker(msg);

        displayMessage(message, msg);
        clrInputBox();
    } else {
        alert("Please enter some text. Otherwise I'll be sad.");
        clrInputBox();
    }
}

function palindromeChecker(message) {

    let msg = message;
    let revMsg = "";
    revMsg = msg.split("").reverse().join("");
    let isPalindrome = true;

    for (let i = 0; i < message.length - 1; i++) {

        if (msg[i] != revMsg[i]) {
            isPalindrome = false;
            return isPalindrome;
        }
    }
    return isPalindrome;
}

// Final Step, display the information (view, displays stuff on screen)
function displayMessage(isPalindrome, msg) {

    if (isPalindrome == false) {
        let revMessage = msg.split("").reverse().join("");
        // first get the ol element from the page
        element = document.getElementById("results");
        // set the message for the li element
        element.innerHTML = `The word is: ${msg}<br>
            The word reversed is: ${revMessage}<br>
            Sorry, I'm not a palindrome. :(`;
    } else {
        let revMessage = msg.split("").reverse().join("");
        element = document.getElementById("results");
        element.innerHTML = `The word is: ${msg}<br>
        The word reversed is: ${revMessage}<br>
        I'm a palindrome!!! :)`;
    }
    // first get the ol element from the page


    // styling
    // // next create a new li element
    // let item = document.createElement("li");

    // // add classes to li element
    // item.classList.add("list-group-item");

    // set the message for the li element

    // element.innerHTML = revMessage;

    // element.appendChild(item);
}

function clrInputBox() {
    // this clears the input field after it's displayed
    document.getElementById("txtMessage").value = '';
}