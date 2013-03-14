// Listen for mouse over
document.addEventListener('mouseover', function(e) {
  // Get element
  var srcElement = e.srcElement;
  
  // Check if a link
  var link = srcElement.href;
  if(typeof link !== 'undefined' && link != '') {
    // Send link message
    chrome.extension.sendMessage({ hoverLink: true, link: link });
  }
  else {
    // Send disable message
    chrome.extension.sendMessage({ hoverLink: false });
  }

}, false);

// Listen for mouse out
document.addEventListener('mouseout', function(e) {
  
    // Send disable message
    chrome.extension.sendMessage({ hoverLink: false });

}, false);
