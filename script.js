document.addEventListener("DOMContentLoaded", getUsers);

function getUsers() {
  fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
      displayUsers(data);
    })
    .catch(error => {
      console.log("Error fetching users:", error);
    });
}

function displayUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach(user => {
    const userElement = document.createElement("div");
    userElement.classList.add("user");

    const nameElement = document.createElement("h3");
    nameElement.textContent = user.name;
    userElement.appendChild(nameElement);

    const cityElement = document.createElement("p");
    cityElement.textContent = "City: " + user.city;
    userElement.appendChild(cityElement);

    const countryElement = document.createElement("p");
    countryElement.textContent = "Country: " + user.country;
    userElement.appendChild(countryElement);

    userList.appendChild(userElement);
  });
}

function searchUsers() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const users = Array.from(document.getElementsByClassName("user"));

  users.forEach(user => {
    const name = user.getElementsByTagName("h3")[0].textContent.toLowerCase();
    const city = user.getElementsByTagName("p")[0].textContent.toLowerCase();
    const country = user.getElementsByTagName("p")[1].textContent.toLowerCase();

    if (name.includes(searchInput) || city.includes(searchInput) || country.includes(searchInput)) {
      user.style.display = "block";
    } else {
      user.style.display = "none";
    }
  });
}
