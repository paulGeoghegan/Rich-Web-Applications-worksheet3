let index = 0;

//Adds a new note to the DOM
var addNoteButton = document.getElementById("addNote");
Rx.Observeable.fromEvent(addNoteButton, "click").then(
	console.log("Clicked")
	// newNote = document.getElementById("note").value
	// document.getElementById("notes").innerHTML+=`<div id=`+index+`> <p id="text`+index+`"> `+newNote+` </p> <input type="button" value="delete" onclick="removeNote(`+index+`)"/> <input id="editButton`+index+`" type="button" value="edit" onclick="editNote(`+index+`)"/> </div>`
	// index++
);

//This will remove a note using the indexes set up in addNote()
function removeNote(elementToRemove) {
	document.getElementById(elementToRemove).remove();
}

//This will display a text box so the user can edit a note and disable the edit button
function editNote(elementToEdit) {
	document.getElementById(elementToEdit).innerHTML+=`<div id="editingPopup`+elementToEdit+`"> <input id="popup`+elementToEdit+`" type="text" value="`+document.getElementById(elementToEdit).innerText+`"/><input type="button" value="save" onclick="saveEdit(`+elementToEdit+`)" /> </div>`
	document.getElementById("editButton"+elementToEdit).disabled=true
}

//This will save an edit, remove the text box and save button and re-enable the edit button
function saveEdit(newElement) {
	document.getElementById("text"+newElement).innerText=document.getElementById("popup"+newElement).value
	document.getElementById("editingPopup"+newElement).remove()
	document.getElementById("editButton"+newElement).disabled=false
}

//This will change the background color of the <p> elements on the page
document.getElementById("noteColor").addEventListener("change", function(){
	document.querySelectorAll("p").forEach((p) => {
	p.style.backgroundColor =event.target.value})
});