// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

/*
// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
  var srcElement = e.srcElement;

  // Lets check if our underlying element is a DIV.
  if (srcElement.nodeName == 'DIV') {

    // For NPE checking, we check safely. We need to remove the class name
    // Since we will be styling the new one after.
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }

    // Add a visited class name to the element. So we can style it.
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;
  }
}, false);
*/


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
