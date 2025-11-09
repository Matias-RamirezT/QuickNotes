// Obtener notas del almacenamiento local
function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

// Guardar notas en almacenamiento local
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Agregar nota
export function addNote(text) {
  const notes = getNotes();
  notes.push({ id: Date.now(), text });
  saveNotes(notes);
}

// Eliminar nota
export function deleteNote(id) {
  let notes = getNotes().filter((note) => note.id !== id);
  saveNotes(notes);
  renderNotes();
}

// Editar nota
export function editNote(id) {
  const notes = getNotes();
  const noteToEdit = notes.find((note) => note.id === id);
  const newText = prompt("Editar nota:", noteToEdit.text);
  if (newText !== null && newText.trim() !== "") {
    noteToEdit.text = newText;
    saveNotes(notes);
    renderNotes();
  }
}

// Renderizar notas
export function renderNotes() {
  const container = document.getElementById("notesContainer");
  const notes = getNotes();

  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = "<p>No hay notas todavía. 📭</p>";
    return;
  }

  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `
      <p>${note.text}</p>
      <div class="note-buttons">
        <button onclick="editNote(${note.id})">Editar</button>
        <button onclick="deleteNote(${note.id})">Eliminar</button>
      </div>
    `;
    container.appendChild(noteElement);
  });
}

