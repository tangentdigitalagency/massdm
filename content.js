function createUI() {

    const elementStyle = {
        width: "88%",
        padding: "10px",
        marginBottom: "30px",
        border: "1px solid #ccc", // Ensure border is consistent
        borderRadius: "5px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif", // Set the font family to Poppins
        fontSize: "16px" // Include padding and border in the element's total width and height
    };
    
    const inputButtonStyle = {
        ...elementStyle,
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "1px solid #ccc" // Added to match other inputs, can be set to "none" if you prefer no border
    };
    const floatingDiv = document.createElement("div");
    floatingDiv.style.position = "fixed";
    floatingDiv.style.bottom = "20px";
    floatingDiv.style.left = "20px";
    floatingDiv.style.backgroundColor = "transparent";
    floatingDiv.style.width = "100px";
    floatingDiv.style.height = "100px";
    floatingDiv.style.zIndex = "9999";

    const iconButton = document.createElement("button");
    iconButton.style.backgroundColor = "blue";
    iconButton.style.color = "white";
    iconButton.style.borderRadius = "50%";
    iconButton.style.width = "60px";
    iconButton.style.height = "60px";
    iconButton.style.border = "none";
    iconButton.style.cursor = "pointer";
    iconButton.style.position = "absolute";
    iconButton.style.top = "20px";
    iconButton.style.left = "20px";
    iconButton.style.fontFamily = "Poppins, sans-serif";
    iconButton.innerHTML = '<i class="fas fa-rocket"></i>';

    const mainUI = document.createElement("div");
    mainUI.style.backgroundColor = "white";
    mainUI.style.borderRadius = "10px";
    mainUI.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    mainUI.style.padding = "20px";
    mainUI.style.position = "absolute";
    mainUI.style.bottom = "20px";
    mainUI.style.left = "20px";
    mainUI.style.zIndex = "10000";
    mainUI.style.width = "300px";
    mainUI.style.height = "400px";
    mainUI.style.fontFamily = "Poppins, sans-serif";
    mainUI.style.display = "none";

    const apiKeyScreen = document.createElement("div");
    apiKeyScreen.id = "apiKeyContainer";
    apiKeyScreen.style.display = "block";
    apiKeyScreen.style.padding = "20px";
    apiKeyScreen.style.backgroundColor = "white";
    apiKeyScreen.style.borderRadius = "10px";
    apiKeyScreen.style.textAlign = "center";

    const bheading = document.createElement("h2");
    bheading.style.textAlign = "center";
    bheading.style.fontSize = "24px";
    bheading.style.marginBottom = "20px";
    bheading.textContent = "Auto DM";
    apiKeyScreen.appendChild(bheading);    

    const apiKeyHeading = document.createElement("h2");
    apiKeyHeading.textContent = "Enter API Key";
    apiKeyHeading.style.textAlign = "center";
    apiKeyHeading.style.fontSize = "20px";
    apiKeyHeading.style.marginBottom = "40px";
    apiKeyScreen.appendChild(apiKeyHeading);
    
   
    
    const apiKeyInput = document.createElement("input");
    apiKeyInput.type = "text";
    apiKeyInput.id = "apiKeyInput";
    apiKeyInput.style.marginBottom = "20px";
    Object.assign(apiKeyInput.style, elementStyle);
    apiKeyInput.type = "text";
    apiKeyInput.placeholder = "API Key";
    apiKeyInput.style.paddingTop = "10px";
    apiKeyInput.style.paddingBottom = "10px";
    
    apiKeyScreen.appendChild(apiKeyInput);
    

    const continueButton = document.createElement("button");
    continueButton.id = "continueButton";
    continueButton.style.width = "88%";
    continueButton.style.border = "1px solid #ccc";
    continueButton.style.padding = "10px";
    continueButton.style.backgroundColor = "green";
    continueButton.style.color = "white";
    continueButton.style.border = "none";
    continueButton.style.borderRadius = "5px";
    continueButton.style.cursor = "pointer";
    continueButton.textContent = "Continue";
    apiKeyScreen.appendChild(continueButton);

    mainUI.appendChild(apiKeyScreen);

    const messageContainer = document.createElement("div");
    messageContainer.id = "messageContainer";
    messageContainer.style.display = "none";
    messageContainer.style.textAlign = "center"; // Centering everything in the message container

    const closeButton = document.createElement("div");
    closeButton.id = "closeButton";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.left = "10px";
    closeButton.style.width = "30px";
    closeButton.style.height = "30px";
    closeButton.style.backgroundColor = "red";
    closeButton.style.borderRadius = "50%";
    closeButton.style.display = "flex";
    closeButton.style.alignItems = "center";
    closeButton.style.justifyContent = "center";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "white";
    closeButton.style.fontWeight = "bold";
    closeButton.textContent = "X";
    messageContainer.appendChild(closeButton);

    const heading = document.createElement("h2");
    heading.style.textAlign = "center";
    heading.style.fontSize = "24px";
    heading.style.marginTop = "30px";
    heading.style.marginBottom = "20px";
    heading.textContent = "Auto DM";
    messageContainer.appendChild(heading);

    

    const balanceDisplay = document.createElement("p");
    balanceDisplay.id = "balanceDisplay";
    balanceDisplay.textContent = "Message Balance: "; 
    balanceDisplay.style.display = "none"; 
    balanceDisplay.style.textAlign = "center";
    balanceDisplay.style.width = "88%";
    balanceDisplay.style.fontFamily = "Poppins, sans-serif";
    balanceDisplay.style.fontSize = "16px";
    balanceDisplay.style.margin = "10px auto";
    messageContainer.appendChild(balanceDisplay);

    // Update the style for the usernamesTextArea to match apiKeyInput
    const usernamesTextArea = document.createElement("textarea");
    Object.assign(usernamesTextArea.style, elementStyle);
    usernamesTextArea.id = "usernames";
    usernamesTextArea.placeholder = "Enter usernames (one per line)";
    usernamesTextArea.style.height = "100px";
    usernamesTextArea.style.marginTop = "30px"; // Keep the height suitable for multiple lines
    messageContainer.appendChild(usernamesTextArea);

    // Update the style for the messageInput to match apiKeyInput and adjust height for one line
    const messageInput = document.createElement("input");
    Object.assign(messageInput.style, elementStyle);
    messageInput.type = "text";
    messageInput.id = "messageInput";
    messageInput.placeholder = "Enter your message";
    messageInput.style.paddingTop = "10px";
    messageInput.style.paddingBottom = "10px";
    messageContainer.appendChild(messageInput);

    const startButton = document.createElement("button");
    Object.assign(startButton.style, inputButtonStyle);
    startButton.id = "startButton";
    startButton.textContent = "Start";
    messageContainer.appendChild(startButton);
    
    mainUI.appendChild(messageContainer);

    // Append the circle icon button and main UI to the floating div
    floatingDiv.appendChild(iconButton);
    floatingDiv.appendChild(mainUI);

    // Append the floating div to the document body
    document.body.appendChild(floatingDiv);

    // Event listener for toggling the main UI visibility
    iconButton.addEventListener("click", function() {
        mainUI.style.display = mainUI.style.display === "none" ? "block" : "none";
    });
    let globalApiKey = "";
    let globalBalance = 0
    continueButton.addEventListener("click", function() {
        const apiKeyValue = document.getElementById("apiKeyInput").value;
        console.log("Continue button clicked!");
        globalApiKey = apiKeyValue
        // Fetch and display the message balance using the provided API key
        get_balance(apiKeyValue).then(balance => {
            // Set the text of the balanceDisplay element to show the balance
            balanceDisplay.textContent = "Message Balance: " + balance;
            balanceDisplay.style.display = "block"; // Make it visible
            globalBalance = balance
            if (parseInt(balance, 10) > 0) {
                // Hide API Key Screen and show the message content
                apiKeyScreen.style.display = "none";
                messageContainer.style.display = "block";
            } else {
                // If balance is 0 or less, indicate that user cannot continue
                continueButton.style.backgroundColor = "red";
                alert("Your message balance is insufficient to continue.");
            }
        }).catch(error => {
            console.error('Error fetching message balance:', error);
            continueButton.style.backgroundColor = "red";
            alert("Failed to retrieve message balance.");
        });
    });
    
    function get_balance(apiKeyValue) {
        return new Promise((resolve, reject) => {
            // Define the API endpoint with the apiKeyValue included in the query parameter
            const bubbleApiEndpoint = `https://massdm.bubbleapps.io/api/1.1/obj/user?constraints=[{"key": "apikey", "constraint_type": "equals", "value": "${apiKeyValue}"}]`;
        
            // Define the headers for the GET request
            const headers = {
                "Content-Type": "application/json"
            };
    
            // Make the GET request to the API endpoint
            fetch(bubbleApiEndpoint, {headers: headers})
                .then(response => response.json()) // Parse the JSON response body
                .then(data => {
                    // Extract the message balance from the response, assuming the JSON structure is as expected
                    const results = data.response?.results || [];
                    const user = results[0] || {};
                    const messageBalance = user.messagebalance || '0';
                    console.log('Message Balance:', messageBalance);
                    resolve(messageBalance); // Resolve the promise with the message balance
                })
                .catch(error => {
                    console.error('Error fetching message balance:', error);
                    reject(error); // Reject the promise if there's an error
                });
        });
    }
    


    
    // Function to click the Messages tab
    function clickMessagesTab() {
        const messagesTab = document.querySelector('a[href="/direct/inbox/"]');
        if (messagesTab) {
            messagesTab.click();
            console.log("Clicked the Messages tab");
        }
    }
    
    // function clickNewMessageButton() {
    //     // Select the button based on its HTML structure
    //     const newMessageButton = document.querySelector('');
        
    //     // console.log('clicked button')
    //     if (newMessageButton) {
    //         newMessageButton.click();
    //         console.log("Clicked the New Message button");
    //     } else {
    //         console.log("Not found!")
    //     }
        
    

    // }

    function clickNewMessageButton() {
        const newMessageButton = document.querySelector('.x1i10hfl.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x6s0dn4.xjbqb8w.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x1ypdohk.x78zum5.xl56j7k.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xcdnw81');
    
        if (newMessageButton) {
            console.log('Clicked the message button');
            newMessageButton.click();
        } else {
            console.log('No button found');
        }
    }
    

    function enterUsernameInSearch(username) {
        const searchInput = document.querySelector('input[placeholder="Search..."]');
        if (searchInput) {
            searchInput.value = username;
            searchInput.dispatchEvent(new Event("input", { bubbles: true }));
            console.log(`Entered username in search: ${username}`);
        } else {
            console.log('Search input not found');
        }
    }
    
    function clickCheckboxByUsername(username) {
        const spans = Array.from(document.querySelectorAll('span.x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft'));
        const targetSpan = spans.find(span => span.textContent.trim().toLowerCase() === username.toLowerCase());
    
        if (targetSpan) {
            let parent = targetSpan.closest('.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1');
            if (parent) {
                const checkbox = parent.querySelector('input[type="checkbox"][aria-label="Toggle selection"]');
                if (checkbox) {
                    checkbox.click();
                    console.log("Clicked the checkbox for user: " + username);
                } else {
                    console.log("Checkbox not found for user: " + username);
                }
            } else {
                console.log("Parent div not found for user: " + username);
            }
        } else {
            console.log("Username not found!");
        }
    }

    
    function clickChatButton() {
        const chatButton = document.querySelector('div[role="button"][tabindex="0"].x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x972fbf.xcfux6l.x1qhh985.xm0m39n.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x18d9i69.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x9bdzbf.x1ypdohk.x78zum5.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x1n2onr6.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xn3w4p2.x5ib6vp.xc73u3c.x1tu34mt.xzloghq');
        if (chatButton) {
            chatButton.click();
            console.log("Clicked the Chat button");
        } else {
            console.log("Chat button not found!");
        }
    }
    
    function inputMessage(message) {
        const textbox = document.querySelector('.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw.x1iyjqo2.x1gh3ibb.xisnujt.xeuugli.x1odjw0f');
      
        if (textbox) {
            textbox.focus();
            const selection = window.getSelection();
            const range = document.createRange();
      
            if (selection.rangeCount > 0) {
                range.setStart(selection.focusNode, selection.focusOffset);
            } else {
                range.selectNodeContents(textbox);
                range.collapse(false);
            }
      
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('insertText', false, message);
      
            console.log("Message inserted into the textbox: " + message);
        } else {
            console.log("Textbox not found!");
        }
    }
    
      
    
    function clickSendButton() {
        const selector = '.x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt0psk2.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp.x173jzuc.x1yc6y37.xfs2ol5';
        const button = document.querySelector(selector);
      
        if (button) {
            button.click();
            console.log("Send button clicked!");
        } else {
            console.log("Send button not found!");
        }
    }
    
      
    function updateMessages(apikey, username) {
        const bubbleApiEndpoint = "https://massdm.bubbleapps.io/api/1.1/wf/messagesent";
        const bubbleApiToken = "0524cc33885747ae0493174cf44c251f";

        const headers = {
            "Authorization": `Bearer ${bubbleApiToken}`,
            "Content-Type": "application/json"
        };
        const data = {
            "apikey": apikey,
            "igusername": username
        };

        // Make the POST request to the API endpoint
        fetch(bubbleApiEndpoint, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Updated message balance:', data);
            // Handle additional tasks or update UI based on response
        })
        .catch(error => console.error('Error updating message balance:', error));
    }
    
    
    
    async function startChat(username) {
        // Input the username
        const usernameInput = document.querySelector('input[placeholder="Search"]');
        if (usernameInput) {
            usernameInput.value = username;
            usernameInput.dispatchEvent(new Event("input", { bubbles: true }));
            console.log(`Entered username: ${username}`);
        }

        // Wait for the user to appear in the search results
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // Click the user from the search results
        const userElement = document.querySelector('div[role="listitem"]');
        if (userElement) {
            userElement.click();
            console.log(`Clicked on user: ${username}`);

            // Wait for the chat to open
            await new Promise((resolve) => setTimeout(resolve, 5000));

            // Click the Chat button
            const chatButton = document.querySelector('button[type="button"][aria-label="Message"]');
            if (chatButton) {
                chatButton.click();
                console.log(`Clicked the Chat button for user: ${username}`);
            }
        } else {
            console.log(`User not found in search results: ${username}`);
        }

        // Clear the username input
        usernameInput.value = "";
    }

    // Add a click event listener to the start button
    //const startButton = mainUI.querySelector("#startButton");

    startButton.addEventListener("click", async () => {
        const usernamesTextArea = mainUI.querySelector("#usernames");
        const usernameList = usernamesTextArea.value.split("\n").map((username) => username.trim());
        const message = mainUI.querySelector("#messageInput").value;
    
        if (usernameList.length) {
            clickMessagesTab();
            for (const username of usernameList) {
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the delay as needed
    
                clickNewMessageButton();
    
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Adjust the delay as needed
    
                enterUsernameInSearch(username);
    
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Adjust the delay as needed
    
                clickCheckboxByUsername(username);
    
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Adjust the delay as needed
    
                clickChatButton();
    
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Adjust the delay as needed
    
                inputMessage(message);
    
                await new Promise((resolve) => setTimeout(resolve, 4000)); // Adjust the delay as needed
    
                clickSendButton();
    
                updateMessages(globalApiKey, username);
                globalBalance -= 1;
                balanceDisplay.textContent = "Message Balance: " + globalBalance;
            }
        }
    });

    
    // Function to toggle the size of the floating div
    function toggleSize() {
        if (floatingDiv.style.width === "100px") {
            // Expand the floating div
            floatingDiv.style.width = "300px";
            floatingDiv.style.height = "600px"; // Increased height to accommodate the main UI
            mainUI.style.display = "block"; // Show the main UI when expanded
            iconButton.style.display = "none"; // Hide the blue button when the main UI is visible
        } else {
            // Return to default size
            floatingDiv.style.width = "100px";
            floatingDiv.style.height = "100px";
            mainUI.style.display = "none"; // Hide the main UI when collapsed
            iconButton.style.display = "block"; // Show the blue button when the main UI is hidden
        }
    }

    // Add a click event listener to the circle icon to toggle the main UI size
    iconButton.addEventListener("click", () => {
        toggleSize();
    });

    // Add a click event listener to the "Close" button in the main UI to reset the size
    //const closeButton = mainUI.querySelector("#closeButton");
    closeButton.addEventListener("click", () => {
        toggleSize(); // Toggle the size to reset it to 100x100
        console.log("Close button pressed");
    });

    // Append the circle icon button and main UI to the floating div
    floatingDiv.appendChild(iconButton);
    floatingDiv.appendChild(mainUI);

    // Append the floating div to the document body
    document.body.appendChild(floatingDiv);
}

// Call the function to create the floating UI
createUI();
