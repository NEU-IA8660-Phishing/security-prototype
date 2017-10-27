/**
 * Security Prototype Functionality
 */

var AUTHORIZED = false;
var PORT = null;

const switchAuthorizationStatus = function (resp) {
    this.AUTHORIZED = true;
};

// Authenticate the extension with Google
authenticateExtension(switchAuthorizationStatus);

/*******************************************************************************
 * Email Analysis Functions:
 */

/**
 * Function to start our email analysis
 *   Triggered from the listeners.js file by URL change (if a permitted URL)
 * @param threadId
 */
this.triggerEmailAnalysis = function (threadId) {
    retrieveEmailThread(threadId)
        .then(analyzeEmail)
        .then(displayHtmlStatus)
};

function analyzeEmail (receivedEmailsInThread) {
    // TODO: Add email analysis algorithm here
    console.log(receivedEmailsInThread);

    // return our result:
    return false;
}

function displayHtmlStatus(isPhishingEmail) {
    console.log('display pre-port');
    // Wait for the port to be connected/established before sending data to the client
    // while (!PORT) {}
    console.log('display post-port');
    // Alert the listener in js/dom.js so that we can inform the user
    PORT.postMessage(isPhishingEmail);
}

/**
 * Listens for incoming port connections and opens the "backend" port connection
 */
chrome.runtime.onConnect.addListener(function(port) {
    console.log('port established');
    PORT = port;
});