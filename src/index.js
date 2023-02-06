const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    const ul = document.createElement("ul");
    ul.className = "list-row"

    const li = document.createElement("li");
    li.innerText = inputText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => onClickAdd());

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => onClickAdd());

    ul.appendChild(li);
    ul.appendChild(completeButton);
    ul.appendChild(deleteButton);
    document.getElementById("imcomplete-list").appendChild(ul);
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());