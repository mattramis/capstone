const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.getElementById("root");
  const h1 = document.createElement("h1");
  h1.textContent = "FREELANCERS";
  root.appendChild(h1);
  const ul = document.createElement("ul");
  users.forEach((user) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.textContent = user.name;
    name.className = "name";
    const age = document.createElement("span");
    age.textContent = user.age;
    age.className = "age";
    const occupation = document.createElement("span");
    occupation.textContent = user.occupation;
    occupation.className = "occupation";
    li.appendChild(name);
    li.appendChild(document.createTextNode(", "));
    li.appendChild(age);
    li.appendChild(document.createTextNode(", "));
    li.appendChild(occupation);
    ul.appendChild(li);
  });
  root.appendChild(ul);
}

main();
