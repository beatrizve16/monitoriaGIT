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

    const books = [
        { id: 1, title: 'Tom Lake', image: 'books/tom.jpg' },
        { id: 2, title: 'The Memory Police', image: 'books/memory.jpg' },
        { id: 3, title: 'The Catcher in the Rye', image: 'books/rye.webp' },
        { id: 4, title: 'Tokyo Ueno Station', image: 'books/ueno.jpg' },
        { id: 5, title: 'Mere Christianity', image: 'books/mere.jpg' },
        { id: 6, title: 'A Little Life', image: 'books/life.jpg' },
        { id: 7, title: 'Liberty', image: 'books/liberty.jpg' },
        { id: 8, title: 'Before the Coffee Gets Cold', image: 'books/coffee.jpg' },
        { id: 9, title: 'Fahrenheit 451', image: 'books/451.jpg' },
        { id: 10, title: 'Slaughterhouse 5', image: 'books/5.jpg' },
        { id: 11, title: 'How to pronounce knife', image: 'books/knife.jpg' },
        { id: 12, title: 'Never let me go', image: 'books/me.jpg' },
        { id: 13, title: 'Cats cradle', image: 'books/cat.jpg' },
        { id: 14, title: ' Of Woman and Salt', image: 'books/salt.jpg' },
        { id: 15, title: 'Everything is Illuminated', image: 'books/is.jpg' },
        { id: 16, title: ' Love Boat', image: 'books/love.jpg' },
        { id: 17, title: 'The Years', image: 'books/images.jpg' },
        { id: 18, title: 'The Great Gatsby', image: 'books/great.jpg' },
        { id: 19, title: ' The Waves ', image: 'books/waves.jpg' },
        { id: 20, title: ' The Enchanted April', image: 'books/april.jpg' },
        { id: 21, title: 'The Awakening', image: 'books/the.webp' },
        { id: 22, title: 'Wuthering Heights', image: 'books/heights.webp' },
        { id: 23, title:  ' Get Even', image: 'books/get2.jpg'},
        { id: 24, title: 'Get Dirty', image: 'books/get.jpg' },
        { id: 25, title: ' They Wish They Were Us', image: 'books/theywish.jpg' },
        { id: 26, title: 'The Counselours', image: 'books/Counselours.jpg' },
        { id: 27, title: 'Theyll Never Catch Us', image: 'books/never.jpg' },
        { id: 28, title: 'Legacies', image: 'books/legacies.jpg' },
        { id: 29, title: 'A Good Girls Guide to Murder', image: 'books/gggtm.jpg' },
        { id: 30, title: 'Good Girl Bad Blood', image: 'books/gggtm2.jpg' },
        { id: 31, title: 'As Good As Dead', image: 'books/gggtm3.jpg' },
        { id: 32, title: 'Thats Not What Happened', image: 'books/notwhat.jpg' },
        { id: 33, title: 'Truly Devious', image: 'books/truly.jpg' },
        { id: 33, title: 'The Vanishing Stair', image: 'books/truly2.jpg' },
        { id: 34, title: ' The Hand on the Wall', image: 'books/truly3.jpg' },
        { id: 35, title: ' The Cousins', image: 'books/cousins.jpg' },
        { id: 36, title: 'Youll be the Death of Me', image: 'books/death.jpg' },
        { id: 37, title: 'One Of Us Is Lying' , image: 'books/oouil.jpg' },
        { id: 38, title: 'One Of Us Is Next' , image: 'books/oouil2.jpg' },
        { id: 39, title: 'One Of Us Is Back' , image: 'books/oouil3.jpg' },
        { id: 40, title: 'Inheritance Games' , image: 'books/ig.jpg' },
        { id: 41, title: 'Hawthorne Legacy' , image: 'books/ig2.jpg' },
        { id: 42, title: 'Final Gambit' , image: 'books/ig3.jpg' },
        { id: 43, title: 'Brothers Hawthorne' , image: 'books/ig4.jpg' },
        { id: 44, title: 'Caraval' , image: 'books/caraval.jpg' },
        { id: 45, title: 'Legendary' , image: 'books/caraval2.jpg' },
        { id: 45, title: 'Finale' , image: 'books/caraval3.jpg' },
        { id: 46, title: 'Caraval-Collectors Edition' , image: 'books/caraval4.jpg' },
        { id: 47, title: 'Once Upon A Broken Heart' , image: 'books/ouabh.jpg' },
        { id: 48, title: 'The Ballad of Never After ' , image: 'books/ouabh2.jpg' },
        { id: 49, title: 'A Curse for True Love' , image: 'books/ouabh3.jpg' },
        { id: 50, title: 'The Night Circus' , image: 'books/nc.jpg' },
        { id: 51, title: 'Warcross' , image: 'books/wc.jpg' },
        { id: 52, title: 'Wildcard' , image: 'books/wc2.jpg' },
        { id: 53, title: 'Anatomy' , image: 'books/al.jpg' },
        { id: 54, title: 'Immortality' , image: 'books/al2.jpg' },
        { id: 55, title: 'Golden Compass' , image: 'books/dm1.jpg' },
        { id: 56, title: 'Subtle Knife' , image: 'books/dm2.jpg' },
        { id: 57, title: 'Amber Spyglass' , image: 'books/dm3.jpg' },
        { id: 58, title: 'Lyras Oxford' , image: 'books/dm4.jpg' },
        { id: 59, title: 'A Darker Shade of Magic' , image: 'books/sm1.jpg' },
        { id: 60, title: 'A Conjuring of Light' , image: 'books/sm2.jpg' },
        { id: 61, title: 'A Gathering of Shadows' , image: 'books/sm3.jpg' },
        { id: 62, title: 'Normal People' , image: 'books/np.jpg' },
        { id: 64, title: 'Divergent' , image: 'books/d.jpg' },
        { id: 65, title: 'Insurgent' , image: 'books/d2.jpg' },
        { id: 66, title: 'Alegiant' , image: 'books/d3.jpg' },
        { id: 67, title: 'Four' , image: 'books/d4.jpg' },
        { id: 68, title: 'Carve the Mark' , image: 'books/cm.jpg' },
        { id: 69, title: 'Fates Divide' , image: 'books/cm2.jpg' },
        { id: 70, title: ' Lightlark' , image: 'books/ll.jpg' },
        { id: 71, title: ' Nightbane' , image: 'books/ll2.jpg' },
        { id: 72, title: ' Hunger Games' , image: 'books/hg.jpg' },
        { id: 73, title: ' Catching Fire' , image: 'books/hg2.jpg' },
        { id: 74, title: ' Mockingjay' , image: 'books/hg3.jpg' },
        { id: 75, title: ' TBOSAS' , image: 'books/hg4.jpg' },
        { id: 76, title: ' The Cruel Prince' , image: 'books/cp.jpg' },
        { id: 77, title: ' The Wicked King' , image: 'books/cp2.jpg' },
        { id: 78, title: ' The Queen Of Nothing' , image: 'books/cp3.jpg' },
        { id: 79, title: ' King of Elfhame' , image: 'books/cp4.jpg' },
        { id: 80, title: ' The Invisible Life of Addie LaRue' , image: 'books/il.jpg' },
        { id: 81, title: ' Shadow & Bone' , image: 'books/sb.jpg' },
        { id: 82, title: ' Siege & Storm' , image: 'books/sb2.jpg' },
        { id: 83, title: ' Ruin & Rising' , image: 'books/sb3.jpg' },
        { id: 84, title: 'King of Scars ' , image: 'books/ks.jpg' },
        { id: 85, title: ' Ruler of Wolves' , image: 'books/ks2.jpg' },
        { id: 86, title: ' Six of Crows' , image: 'books/sc.webp' },
        { id: 87, title: ' Crooked Kingdom' , image: 'books/sc2.jpg' },
        { id: 88, title: ' The Selection' , image: 'books/ts.jpg' },
        { id: 89, title: ' The Elite' , image: 'books/ts2.jpg' },
        { id: 90, title: ' The One' , image: 'books/ts3.jpg' },
        { id: 91, title: ' The Novellas' , image: 'books/tsn.jpg' },
        { id: 92, title: ' The Heir' , image: 'books/ts4.jpg' },
        { id: 93, title: ' The Crown' , image: 'books/ts5.jpg' },
        { id: 94, title: ' The Siren' , image: 'books/siren.jpg' },
        { id: 95, title: ' A Thousand Heartbeats' , image: 'books/th.jpg' },
        { id: 96, title: ' Uglies' , image: 'books/u.jpg' },
        { id: 97, title: ' Pretties' , image: 'books/u2.jpg' },
        { id: 98, title: ' Specials' , image: 'books/u3.jpg' },
        { id: 99, title: ' Extras' , image: 'books/u4.jpg' },


























    ];

    // Load books in browse page
    const catalogue = document.getElementById('catalogue');
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
    const emptyCartMessage = document.getElementById('empty-cart-message');
    if (cartItems) {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users[currentUser];
            if (user.cart.length > 0) {
                emptyCartMessage.style.display = 'none';
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
                        if (!cartItems.children.length) {
                            emptyCartMessage.style.display = 'block';
                        }
                    });
                });
            } else {
                emptyCartMessage.style.display = 'block';
            }
        } else {
            emptyCartMessage.style.display = 'block';
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
