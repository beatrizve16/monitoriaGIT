document.addEventListener('DOMContentLoaded', function () {
    // Helper function to navigate to a page
    function navigateTo(page) {
        window.location.href = page;
    }

    // Redirect logo and title to landing page
    document.querySelectorAll('.logo, .header-content h1').forEach(element => {
        element.addEventListener('click', () => navigateTo('index.html'));
    });

    // Signup functionality
    const signupBtn = document.getElementById('signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function () {
            const email = document.getElementById('signup-email').value;
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            if (email && username && password) {
                const users = JSON.parse(localStorage.getItem('users')) || {};
                if (!users[username]) {
                    users[username] = { email, password, cart: [] };
                    localStorage.setItem('users', JSON.stringify(users));
                    alert('Sign up successful! You can now sign in.');
                    navigateTo('sign-in.html');
                } else {
                    alert('Username already exists. Please choose another.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Signin functionality
    const signinBtn = document.getElementById('signin-btn');
    if (signinBtn) {
        signinBtn.addEventListener('click', function () {
            const username = document.getElementById('signin-username').value;
            const password = document.getElementById('signin-password').value;
            const users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username] && users[username].password === password) {
                localStorage.setItem('currentUser', username);
                alert('Sign in successful!');
                navigateTo('browse.html');
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Load books in browse page
    const catalogue = document.getElementById('catalogue');
    const books = Array.from({ length: 125 }, (_, i) => ({
        id: i + 1,
        title: `Book ${i + 1}`,
        image: `https://via.placeholder.com/150?text=Book+${i + 1}`
    }));

    if (catalogue) {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <button data-id="${book.id}">Add to Cart</button>
            `;
            catalogue.appendChild(bookItem);
        });

        document.querySelectorAll('.book-item button').forEach(button => {
            button.addEventListener('click', function () {
                const bookId = this.getAttribute('data-id');
                addToCart(bookId);
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            document.querySelectorAll('.book-item').forEach(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Add to cart functionality
    function addToCart(bookId) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users[currentUser];
            if (!user.cart.includes(bookId)) {
                user.cart.push(bookId);
                localStorage.setItem('users', JSON.stringify(users));
                alert('Book added to cart!');
            } else {
                alert('Book is already in the cart.');
            }
        } else {
            alert('Please sign in first.');
            navigateTo('sign-in.html');
        }
    }

    // Load cart items
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users[currentUser];
            user.cart.forEach(bookId => {
                const book = books.find(book => book.id == bookId);
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <h3>${book.title}</h3>
                    <input type="number" value="1" min="1">
                    <button data-id="${book.id}">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });

            document.querySelectorAll('.cart-item button').forEach(button => {
                button.addEventListener('click', function () {
                    const bookId = this.getAttribute('data-id');
                    removeFromCart(bookId);
                    this.parentElement.remove();
                });
            });
        }
    }

    // Remove from cart functionality
    function removeFromCart(bookId) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users[currentUser];
            user.cart = user.cart.filter(id => id != bookId);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
});
