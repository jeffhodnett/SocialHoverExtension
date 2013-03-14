
// The social links
var socialLinks = ["facebook.com", "twitter.com", "plus.google.com", "flickr.com"];

// Add a message listener - we don't care about callbacks, so it's pretty oneway
chrome.extension.onMessage.addListener(
  function(request, sender) {

    // Check is hover
    var hover = request.hoverLink || false;
    if(hover) {
      // Check the link
      var link = request.link || "";

      for(var i = 0; i < socialLinks.length; i++) {
        // Get social link and test
        var socialLink = socialLinks[i];
        if(link.indexOf(socialLink) !== -1 ) {
          // Set social url
          setSocialStatusState(true);
          return;    
        }
      }

      // Update icon
      setSocialStatusState(false);
    }
    else {
      // Reset
      resetState();
    }
  }
); 

// Change the social button state
function setSocialStatusState(state) {

  state = state || false;

  if(state) {
    
    chrome.browserAction.setBadgeText ( { text: "yes" } );
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 128, 0, 255]});
    chrome.browserAction.setIcon({ path: "circle_green.png" });
  }
  else {
    chrome.browserAction.setBadgeText ( { text: "no" } );
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
    chrome.browserAction.setIcon({ path: "circle_red.png" });
  }
}

function resetState() {
    chrome.browserAction.setBadgeText ( { text: "" } );
    chrome.browserAction.setIcon({ path: "circle_blue.png" });
}