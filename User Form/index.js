document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
      alert("Введите информацию во все обязательные поля");
      return;
    }

    document.getElementById("cardName").textContent = name;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardPhone").textContent = phone;

    document.getElementById("userCard").classList.remove("hidden");
  });
