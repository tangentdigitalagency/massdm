// Define a variable to store the extension state
let extensionState = {
    isOpen: false, // Indicates if the extension is open
    currentProfileIndex: 0, // Index of the current profile being processed
  };
  
  // Function to handle messages from content scripts
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.updateState) {
      // Update the extension state based on the received message
      updateExtensionState(message.updateState);
    }
  });
  
  // Function to update the extension state
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
  