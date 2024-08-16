const userList = document.querySelector(".list");

    function renderUsers(users) {
        userList.innerHTML = ''; // Clear the list before rendering

        if (users.length === 0) {
            const notFound = document.createElement("li");
            notFound.textContent = "Not Found";
            userList.appendChild(notFound);
            return;
        }

        users.forEach(item => {
            const wrapper = document.createElement("li");

            const usersId = document.createElement("p");
            const userEmail = document.createElement("h2");
            const userAdress = document.createElement("h3");
            const userAge = document.createElement("h4");

            usersId.textContent = `Id: ${item.id}`;
            userEmail.textContent = `Name: ${item.name}`;
            userAdress.textContent = `Email: ${item.email}`;
            userAge.textContent = `Body: ${item.body}`;

            wrapper.append(usersId, userEmail, userAdress, userAge);
            userList.appendChild(wrapper);

            wrapper.className = "sanjar";
            userEmail.className = "Sanjar2";
        });
    }

    function searchUsers() {
        const query = document.getElementById("searchInput").value.toLowerCase();

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                const filteredUsers = data.filter(user =>
                    user.name.toLowerCase().includes(query) ||
                    user.email.toLowerCase().includes(query) ||
                    user.body.toLowerCase().includes(query)
                );
                renderUsers(filteredUsers);
            });
    }

    // Add event listener to the button for 'click' event
    document.querySelector(".btn").addEventListener("click", function() {
        searchUsers();
    });

    // Initial render
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => renderUsers(data));