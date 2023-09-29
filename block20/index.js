const arrayInfo = [];

// When you window loads
window.onload = (event) => {
  document.getElementById("header").innerText =
    "This is the inner text from js file";
};

const myFunction = () => {
  const name = document.querySelector("#exampleInputName1").value;
  const email = document.querySelector("#exampleInputEmail1").value;
  arrayInfo.push({ name, email });
  console.log(arrayInfo);
  document.getElementById("exampleInputName1").value = "";
  document.getElementById("exampleInputEmail1").value = "";
  setOrderedList();
};

const setOrderedList = () => {
  const element = arrayInfo[arrayInfo.length - 1];
  const ol = document.querySelector("#list");
  const li = document.createElement("li");
  const text = document.createTextNode(
    `The users name is ${element.name} and their email is ${element.email}`
  );
  li.appendChild(text);
  ol.appendChild(li);
};
