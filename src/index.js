
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createImpcompleteList(inputText);
};


document.getElementById("add-button").addEventListener("click", () => onClickAdd());

const deleteFromImcompleteList = (target) => {
    document.getElementById("imcomplete-list").removeChild(target);
}


const createImpcompleteList = (text) => {
    const ul = document.createElement("ul");
    ul.className = "list-row"

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.parentNode;
        deleteFromImcompleteList(completeTarget);

        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        addTarget.textContent = null;

        const li = document.createElement("li");
        li.innerText = text;

        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () => {
            const deleteTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(deleteTarget);

            const text = backButton.parentNode.firstElementChild.innerText;
            console.log(text);
        });

        addTarget.appendChild(li);
        addTarget.appendChild(backButton);


        document.getElementById("complete-list").appendChild(addTarget);

    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.parentNode;
        deleteFromImcompleteList(deleteTarget);
    });

    ul.appendChild(li);
    ul.appendChild(completeButton);
    ul.appendChild(deleteButton);
    document.getElementById("imcomplete-list").appendChild(ul);
}