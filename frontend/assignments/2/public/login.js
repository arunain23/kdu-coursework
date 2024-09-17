
const loginForm = document.querySelector('button');

    // Add event listener for form submission
    loginForm.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Fetch the values of username and password fields
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Output the username and password (you can perform further operations here)
        console.log('Username:', username);
        console.log('Password:', password);

        const data = {
            username: username,
            password: password
        };
    
        // Make a POST request to the api/users/login endpoint
        fetch('http://localhost:5000/api/users/login', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Redirect to another page if needed
            // window.location.href = '/path/to/redirect';
            console.log('Login successful');
            return response.json();
        })
        .then(data => {
            // Handle the response data if needed
            localStorage.setItem('user', JSON.stringify(data));
            window.location.href='/public/index.html';
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });


    });