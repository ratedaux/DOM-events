document
  .getElementById("userForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const position = document.getElementById("position").value;

    if (!name || !surname || !age || !position) {
      alert("Введите информацию во все обязательные поля");
      return;
    }

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardSurname").textContent = surname;
    document.getElementById("cardAge").textContent = age;
    document.getElementById("cardPosition").textContent = position;

    document.getElementById("userCard").classList.remove("hidden");

    // selectOption
    const userCheck = document.getElementById("userCheck");
    const option = document.createElement("option");
    option.value = JSON.stringify({ name, surname, age, position }); 
    option.textContent = `${name} ${surname}`;
    userCheck.appendChild(option);

    document.getElementById("userForm").reset();
  });

  document.getElementById("userCheck").addEventListener("change", (event) => {
    const selectedValue = event.target.value;
  
    if (!selectedValue) {
      document.getElementById("userCard").classList.add("hidden");
      return;
    }
  
    const { name, surname, age, position } = JSON.parse(selectedValue);
  
    document.getElementById("cardName").textContent = name || "";
    document.getElementById("cardSurname").textContent = surname || "";
    document.getElementById("cardAge").textContent = age || "";
    document.getElementById("cardPosition").textContent = position || "";
    document.getElementById("userCard").classList.remove("hidden");
  });