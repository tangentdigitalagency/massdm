// Define a variable to store the extension state
let extensionState = {
    isOpen: false, // Indicates if the extension is open
    currentProfileIndex: 0, // Index of the current profile being processed
  };
  
  // Function to handle messages from content scripts
  /**
   * @description Updates an extension's state based on a message received from a sender.
   * 
   * @param { object } message - update message containing information about the extension
   * state to be updated.
   * 
   * @param { object } sender - sender of the message being processed, providing necessary
   * information for updating the extension state based on the received message.
   * 
   * @param { object } sendResponse - response to be sent in response to the received
   * message.
   */
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.updateState) {
      // Update the extension state based on the received message
      updateExtensionState(message.updateState);
    }
  });
  
  // Function to update the extension state
  /**
   * @description Updates the `extensionState` object by merging the new state with the
   * existing one, and handles the updated state based on the value of `isOpen`.
   * 
   * @param { object } newState - updated state of the extension, which is merged with
   * the existing state to generate the new state of the extension.
   */
  function updateExtensionState(newState) {
    // Merge the new state with the existing state
    extensionState = { ...extensionState, ...newState };
  
    // Handle the updated state as needed
    if (extensionState.isOpen) {
      // The extension is open, and you can perform actions here
      console.log("Extension is open");
      console.log("Current Profile Index: " + extensionState.currentProfileIndex);
    } else {
      // The extension is closed, and you can perform actions here
      console.log("Extension is closed");
    }
  }
  
  // Initialize the extension state when the extension is loaded
  updateExtensionState({ isOpen: false, currentProfileIndex: 0 });
  