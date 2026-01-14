const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");

form.addEventListener("submit", addStudent);

function addStudent(e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${course}</td>
        <td>
            <button class="edit-btn" onclick="editStudent(this)">Edit</button>
            <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
    form.reset();
}

function deleteStudent(btn) {
    btn.parentElement.parentElement.remove();
}

function editStudent(btn) {
    const row = btn.parentElement.parentElement;
    document.getElementById("studentId").value = row.cells[0].innerText;
    document.getElementById("studentName").value = row.cells[1].innerText;
    document.getElementById("course").value = row.cells[2].innerText;
    row.remove();
}

