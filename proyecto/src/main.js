import { addNote, renderNotes, deleteNote, editNote } from "./counter.js";

const addNoteBtn = document.getElementById("addNoteBtn");
const noteText = document.getElementById("noteText");

addNoteBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text) {
    addNote(text);
    noteText.value = "";
    renderNotes();
  }
});

document.addEventListener("DOMContentLoaded", renderNotes);
window.deleteNote = deleteNote;
window.editNote = editNote;

