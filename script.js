const btnadd = document.querySelector("#addBtn");
const listConatiner = document.querySelector("#listContainer");
const btnDeleteDefault = document.querySelector(".delete");
const sortIcon = document.querySelector(".sort-icon");
btnDeleteDefault.addEventListener("click", (e) => {
  e.preventDefault();
});

const addNewOrder = (e) => {
  e.preventDefault();

  // create new elements
  const newInputBox = document.createElement("div");
  const newInput = document.createElement("input");
  const newDeleteButton = document.createElement("button");

  // add classes, atributes and etc to new elements
  newInputBox.classList.add("input-box");
  newInput.classList.add("form-input");
  newInput.type = "text";
  newDeleteButton.classList.add("delete");

  // append elements
  listConatiner.append(newInputBox);
  newInputBox.append(newInput);
  newInputBox.append(newDeleteButton);
  newDeleteButton.innerHTML = `<svg class="delete-svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <rect
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="9.5"
        stroke="#C4C4C4"
        />
        <path d="M6 6L14 14" stroke="#C4C4C4" />
        <path d="M6 14L14 6" stroke="#C4C4C4" />
</svg>`;

  // delete order
  const btnsDelete = document.querySelectorAll(".delete");

  btnsDelete.forEach((btnDel) => {
    btnDel.addEventListener("click", (e) => {
      e.preventDefault();
      if (listConatiner.children.length > 1) btnDel.parentElement.remove();
      else btnDel.parentElement.firstElementChild.value = "";
    });
  });
};

btnadd.addEventListener("click", addNewOrder);

sortIcon.addEventListener("click", (e) => {
  const listContainerChilds = Array.from(listConatiner.children);

  if (listConatiner.dataset.sort === "asc") {
    changeSortIcon('asc')
    listConatiner.dataset.sort = "desc";
    listContainerChilds.sort((a, b) => {
      if (a.firstElementChild.value > b.firstElementChild.value) return 1;
      else return -1;
    });
  } else if (listConatiner.dataset.sort === "desc") {
    changeSortIcon('desc')
    listConatiner.dataset.sort = "asc";

    listContainerChilds.sort((a, b) => {
      if (a.firstElementChild.value > b.firstElementChild.value) return -1;
      else return 1;
    });
  }

  listContainerChilds.forEach((e) => {
    listConatiner.appendChild(e);
  });
});

function changeSortIcon(dir) {
  if (dir === "desc") {
    sortIcon.innerHTML = `<rect x="2.5" width="2.5" height="12.5" fill="#C4C4C4" />
    <rect
      x="10"
      y="3.75"
      width="2.5"
      height="7.5"
      transform="rotate(-90 10 3.75)"
      fill="#C4C4C4"
    />
    <rect
      x="10"
      y="8.75"
      width="2.5"
      height="10"
      transform="rotate(-90 10 8.75)"
      fill="#C4C4C4"
    />
    <rect
      x="10"
      y="13.75"
      width="2.5"
      height="15"
      transform="rotate(-90 10 13.75)"
      fill="#C4C4C4"
    />
    <path
      d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z"
      fill="#C4C4C4"
    />
`;
  } else if (dir === "asc") {
    sortIcon.innerHTML = `
    <rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)" fill="#C4C4C4"/>
    <rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
    <rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
    <rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
    <path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z" fill="#C4C4C4"/>
    `;
  }
}
