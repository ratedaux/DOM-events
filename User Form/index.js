document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;

  // Проверка заполненности всех полей
  if (!name || !surname || !age || !position) {
    alert("Введите информацию во все обязательные поля");
    document.getElementById("userCard").classList.add("hidden"); 
    return;
  }

  // Заполнение данных в карточке пользователя
  document.getElementById("cardName").textContent = name;
  document.getElementById("cardSurname").textContent = surname;
  document.getElementById("cardAge").textContent = age;
  document.getElementById("cardPosition").textContent = position;

  // Показ карточки
  document.getElementById("userCard").classList.remove("hidden");

  // Добавление в список
  const userCheck = document.getElementById("userCheck");
  const option = document.createElement("option");
  option.value = JSON.stringify({ name, surname, age, position });
  option.textContent = `${name} ${surname}`;
  userCheck.appendChild(option);

  document.getElementById("userForm").reset();
});

document.getElementById("userCheck").addEventListener("change", (event) => {
  const selectedValue = event.target.value;

  // Проверка выбора
  if (!selectedValue) {
    document.getElementById("userCard").classList.add("hidden"); 
    return;
  }

  const { name, surname, age, position } = JSON.parse(selectedValue);

  // Заполнение данных при выборе
  document.getElementById("cardName").textContent = name || "";
  document.getElementById("cardSurname").textContent = surname || "";
  document.getElementById("cardAge").textContent = age || "";
  document.getElementById("cardPosition").textContent = position || "";
  document.getElementById("userCard").classList.remove("hidden");
});

// Блокировка кнопки "Создать", если поля пустые
document.getElementById("userForm").addEventListener("input", () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;

  const button = document.querySelector("button[type='submit']");
  button.disabled = !(name && surname && age && position); 
});
