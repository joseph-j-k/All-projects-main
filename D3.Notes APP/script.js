const notesContainer = document.querySelector(".notes");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
     localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click", () => {
    //  let inputBox = document.createElement("p");
     let inputBox = document.createElement("div");
     let trash = document.createElement("span");

     inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = " Start ..."; 

    trash.className = "trash";
    trash.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    trash.style.cursor = "pointer";

    trash.addEventListener("click", () => {
        notesContainer.removeChild(inputBox);
        updateStorage();
    });

    inputBox.appendChild(trash);
    notesContainer.appendChild(inputBox);
})

