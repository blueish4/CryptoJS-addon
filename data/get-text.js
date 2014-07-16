// When the user hits return, send the "text-entered"
// message to main.js.
// The message payload is the contents of the edit box.
var siteName = document.getElementById("site");
var pword = document.getElementById("pword");
function enterPressed(event){
	if (event.keyCode == 13) {
    	// Remove the newline.
    	text = [pword.value, siteName.value];
    	self.port.emit("text-entered", text);
    	siteName.value = '';
		pword.value = '';
  	}
};
siteName.addEventListener('keyup', function onkeyup(event) {
  enterPressed(event);
}, false);
pword.addEventListener('keyup', function onkeyup(event) {
  enterPressed(event);
}, false);
// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the text area so the user can
// just start typing.
self.port.on("show", function onShow() {
  siteName.focus();
});
