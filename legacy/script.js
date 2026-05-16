const products = [
    { id: 1, name: "Heirloom tomato", price: 5.99, unit: "lb", origin: "San Juan Capistrano, CA", img: "Tomato.png"},
    { id: 2, name: "Organic ginger", price: 12.99, unit: "lb", origin: "Huntington Beach, CA", img: "Ginger.png" },
    { id: 3, name: "Sweet onion", price: 2.99, unit: "lb", origin: "Central Valley, CA", img: "Onion.jpg" }
];

let basket = [
    { productId: 1, qty: 1 },
    { productId: 2, qty: 0.5 },
    { productId: 3, qty: 5 }
];

function renderHome() {
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <section class="hero">
            <div>
                <h1>We're <em>farmers</em>, <em>purveyors</em>, and <em>eaters</em> of organically grown food.</h1>
                <button class="btn-primary" onclick="renderShop()">Browse our shop</button>
            </div>
            <br>
            <br>
            <br>
            <div>
                <img src="jonathan-kemper-1HHrdIoLFpU-unsplash 1 (1).png" height="500" width="350" style="margin-right: 40px" alt="Fresh Peas" class="hero-image">
                <img src="Stocksy_txp226f62b2aNe300_Medium_4582193 1.png" height="300" width="550" style="position: relative; top: -100px;" alt="Fresh Onions" class="hero-image">
                <p style="margin-top: -100px; margin-right: -410px; text-align: center;">
                <b>Central California</b> — The person who grew these was located in Central 
                <br>
                California and, er, hopefully very well-compensated.</p>
            </div>
            <br><br><br><br><br><br>
            <p style="text-align: left; margin-left: 150px; margin-top: 30px;"><b>WHAT WE BELIEVE</b></p>
            <div>
                <p style="text-align: left; margin-left: 450px; margin-top: 20px;"> 
                We believe in produce. Tasty produce. Produce like:
                <br><br>
                Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers.
                <br>Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem
                <br>artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions.
                <br>Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
                <br><br>What are we forgetting?
                <br><br>Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers,
                <br>in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins.
                <br>Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes.
                <br>Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel.
                <br>Pineapple. Mango. Gooseberries. Blackberries.Tomatoes. Heirloom tomatoes. Beets.
                <br>Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce,
                <br>but if you asked us to describe what escaroles are...
                </p>
            </div>
        </section>
    `;
}

function renderShop() {
    const root = document.getElementById('app-root');
    root.style.opacity = '0';
    setTimeout(() => {
        let html = `<div>
                        <h1 style="margin-left: 5%; font-family: serif; font-size: 64px; font-weight: 400;">Produce</h1>
                        <p style="margin-left: 20%; margin-top: -75px; font-size: 1.1rem;"><b>Fresh</b> - August 21,2023</p>
                    </div>
                    <div class="filter-controls" style="margin-left: 80%; margin-top: -30px;">
                        <button class="pill-btn active">Default</button>
                        <button class="pill-btn">A-Z</button>
                        <button class="pill-btn">List view</button>
                    </div>
                    <hr style="margin: 2%;">
                    <div class="product-grid">
                    `;
    products.forEach(p => {
        html += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <div class="card-body">
                    <h3>${p.name}</h3>
                    <p class="price">$${p.price} / ${p.unit}</p>
                    <p><small>Grown in ${p.origin}</small></p>
                </div>
            </div>
        `;
    });
    html += `</div>`;
        root.innerHTML = html;
        root.style.opacity = '1';
        root.style.transition = 'opacity 0.3s ease-in-out';
    }, 0);
}

function renderNewstand() {
    const root = document.getElementById('app-root');
    const articles = [
        {
            id: 1,
            title: "The secret to the perfect heirloom tomato salad",
            date: "August 15, 2023",
            category: "Recipes",
            img: "Roasted-Heirloom-Tomatoes-10.jpg",
            summary: "It's all about the acid-to-oil ratio and picking the right basil variety."
        },
        {
            id: 2,
            title: "Why organic ginger is the root of longevity",
            date: "August 10, 2023",
            category: "Health",
            img: "Pears.jpg",
            summary: "New studies show that daily ginger consumption can reduce inflammation significantly."
        },
        {
            id: 3,
            title: "Meeting the farmers of the Central Valley",
            date: "August 05, 2023",
            category: "Community",
            img: "images.jpg",
            summary: "A deep dive into the lives of the people who put food on your table." 
        }
    ];

    let articlesHTML = articles.map(article => `
        <div class="article-card" style="border: 1px solid #e0e0e0; border-radius: 24px; overflow: hidden; background-color: #f9f9f7; display: flex; flex-direction: column;">
            <div style="height: 250px; padding: 15px;">
                <img src="${article.img}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 18px;">
            </div>
            <div style="padding: 0 20px 25px 20px; flex-grow: 1;">
                <p style="color: #4b6a27; font-weight: bold; font-size: 12px; margin-bottom: 8px; text-transform: uppercase;">${article.category}</p>
                <h3 style="font-family: serif; font-size: 22px; margin: 0 0 10px 0; line-height: 1.2;">${article.title}</h3>
                <p style="color: #757575; font-size: 14px; margin-bottom: 20px;">${article.summary}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                    <span style="font-size: 12px; color: #aaa;">${article.date}</span>
                    <a href="#" style="color: #4b6a27; font-weight: 600; text-decoration: none; font-size: 14px;">Read more →</a>
                </div>
            </div>
        </div>
    `).join('');

    root.innerHTML = `
        <div class="newstand-container" style="padding: 40px 60px;">
            <section style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 style="font-family: serif; font-size: 64px; margin: 0; font-weight: 400;">Newstand</h1>
                    <span style="font-size: 18px; margin-left: 300px; margin-top: -45px;">The latest from the field — 2023</span>
                </div>
                <div class="filter-controls">
                    <button class="pill-btn active">All Stories</button>
                    <button class="pill-btn">Recipes</button>
                    <button class="pill-btn">Health</button>
                </div>
            </section>

            <hr style="border: none; border-top: 1px solid #e0e0e0; margin-bottom: 40px;">

            <div class="newstand-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px;">
                ${articlesHTML}
            </div>
        </div>
    `;
}

let currentUser = {
    name: "Guest User",
    initials: "GU"
};

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

function renderAuth() {
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <div class="auth-container" style="display: flex; justify-content: center; align-items: center; min-height: 80vh; padding: 20px;">
            <div style="background: #f9f9f7; border: 1px solid #e8e8e1; border-radius: 24px; padding: 50px; width: 100%; max-width: 450px; text-align: center;">
                <h1 style="font-family: serif; font-size: 36px; margin-bottom: 10px;">Welcome back</h1>
                <p style="color: #757575; margin-bottom: 30px;">Sign in to manage your harvests</p>
                
                <div style="text-align: left; margin-bottom: 20px;">
                    <label style="display: block; font-size: 14px; margin-bottom: 8px; font-weight: 600;">Full Name</label>
                    <input type="text" id="auth-username" placeholder="Jane Doe" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;">
                </div>

                <div style="text-align: left; margin-bottom: 30px;">
                    <label style="display: block; font-size: 14px; margin-bottom: 8px; font-weight: 600;">Password</label>
                    <input type="password" placeholder="••••••••" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none;">
                </div>

                <button class="btn-primary" onclick="handleSignIn()" style="width: 100%; background-color: #4b6a27; color: white; border: none; padding: 15px; border-radius: 8px; font-weight: 600; cursor: pointer; margin-bottom: 20px;">
                    Sign In
                </button>
            </div>
        </div>
    `;
}

function handleSignIn() {
    const nameInput = document.getElementById('auth-username').value;
    if (nameInput.trim() !== "") {
        currentUser.name = nameInput;
        currentUser.initials = getInitials(nameInput);
    }
    renderProfile();
}

function renderProfile() {
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <div class="profile-page" style="padding: 40px 60px; max-width: 1200px; margin: 0 auto;">
            <header style="margin-bottom: 40px;">
                <h1 style="font-family: serif; font-size: 48px; margin: 0;">My Account</h1>
                <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;">
            </header>

            <div style="display: grid; grid-template-columns: 280px 1fr; gap: 60px;">
                <aside>
                    <div style="background: #f9f9f7; border: 1px solid #e8e8e1; border-radius: 20px; padding: 25px;">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 30px;">
                            <div style="width: 50px; height: 50px; background: #4b6a27; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">
                                ${currentUser.initials}
                            </div>
                            <div>
                                <p style="margin: 0; font-weight: 600;">${currentUser.name}</p>
                                <p style="margin: 0; font-size: 12px; color: #757575;">Member since 2023</p>
                            </div>
                        </div>
                        <nav style="display: flex; flex-direction: column; gap: 10px;">
                            <button class="pill-btn active" style="text-align: left; width: 100%;">Order History</button>
                            <button class="pill-btn" style="text-align: left; width: 100%; border: 1px solid transparent; background: none;">Personal Info</button>
                            <button class="pill-btn" onclick="renderHome()" style="text-align: left; width: 100%; border: 1px solid transparent; background: none; color: #d9534f;">Log Out</button>
                        </nav>
                    </div>
                </aside>

                <section>
                    <h2 style="font-size: 20px; margin-bottom: 25px;">Recent Orders</h2>
                    <p style="color: #757575;">No recent orders for ${currentUser.name.split(' ')[0]}.</p>
                </section>
            </div>
        </div>
    `;
}

function renderAbout() {
    const root = document.getElementById('app-root');

    root.innerHTML = `
        <div class="about-container" style="padding: 40px 60px; max-width: 1200px; margin: 0 auto;">
           
            <section style="margin-bottom: 60px;">
                <h1 style="font-family: serif; font-size: 64px; margin: 0; font-weight: 400;">Who we are</h1>
                <hr>
            </section>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;">
                
                <!-- Left Side: Image / Brand Visual -->
                <div style="border-radius: 24px; overflow: hidden; background-color: #f9f9f7;">
                    <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=800" 
                         alt="Our Farm" 
                         style="width: 100%; height: 600px; object-fit: cover;">
                </div>

                <!-- Right Side: Philosophy & Mission -->
                <div style="padding-top: 20px;">
                    <p style="color: #4b6a27; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 20px;">Established 2023</p>
                    
                    <h2 style="font-family: serif; font-size: 32px; margin-bottom: 25px; line-height: 1.3;">
                        We believe in produce. Tasty produce. 
                        Produced by people who care.
                    </h2>

                    <p style="font-size: 18px; line-height: 1.6; color: #333; margin-bottom: 25px;">
                        World Peas is more than just a grocery service. We are a bridge between the hardworking farmers 
                        of the Central Coast and your kitchen table. Every item in our shop is hand-selected for 
                        quality, sustainability, and flavor.
                    </p>

                    <div style="background: #f9f9f7; padding: 30px; border-radius: 20px; border: 1px solid #e8e8e1;">
                        <h3 style="font-size: 18px; margin-top: 0;">Our Promise</h3>
                        <ul style="list-style: none; padding: 0; font-size: 16px; color: #555;">
                            <li style="margin-bottom: 12px;">✓ 100% Organically grown</li>
                            <li style="margin-bottom: 12px;">✓ Fair compensation for growers</li>
                            <li style="margin-bottom: 12px;">✓ Minimal plastic packaging</li>
                            <li>✓ Transparent sourcing</li>
                        </ul>
                    </div>

                    <button class="btn-primary" 
                            onclick="renderShop()" 
                            style="margin-top: 40px; background-color: #4b6a27; color: white; border: none; padding: 15px 30px; border-radius: 8px; font-weight: 500; cursor: pointer;">
                        Support our farmers
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderBasket() {
    const root = document.getElementById('app-root');
    root.style.opacity = '0';
    root.style.transition = 'opacity 0.3s ease-in-out';

    setTimeout(() => {
        let subtotal = 0;
        const basketItemsHTML = basket.map(item => {
            const p = products.find(prod => prod.id === item.productId);
            const itemTotal = p.price * item.qty;
            subtotal += itemTotal;

            return `
                <div class="item-card" style="display: flex; background: #fdfdfb; border: 1px solid #e8e8e1; border-radius: 20px; margin-bottom: 20px; margin-left: 5%; width: 85%; height: 150px; overflow: hidden;">
                    <div class="item-img-box" style="width: 150px; height: 150px; background: #eee;">
                        <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="item-details" style="flex: 1; padding: 20px 25px; display: flex; flex-direction: column;">
                        <div class="item-header" style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">${p.name}</h3>
                            <span class="item-price-total" style="font-weight: 600; font-size: 1.1rem;">$${itemTotal.toFixed(2)}</span>
                        </div>
                        <p class="unit-price" style="color: #4b6a27; font-weight: 600; margin: 0 0 15px 0;">$${p.price.toFixed(2)} / ${p.unit}</p>
                        <div class="quantity-pill" style="display: inline-flex; align-items: center; gap: 10px; border: 1px solid #ddd; padding: 5px 12px; border-radius: 20px; width: fit-content; font-size: 0.85rem; background: white;">
                            <span>${item.qty} ${p.unit}</span>
                            <span class="edit-icon" data-id="${item.productId}" style="color: #aaa; font-size: 0.8rem; cursor: pointer;">✎</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const shipping = 3.99;
        const tax = 2.00;
        const total = subtotal + shipping + tax;

        root.innerHTML = `
            <div class="basket-page-container">
                <div>
                    <h1 style="margin-left: 5%; font-family: serif; font-size: 64px; font-weight: 400;">Basket</h1>
                    <p style="margin-left: 17%; margin-top: -78px; font-size: 1.1rem;">${basket.length} items</p>
                </div>
                <hr style="margin: 2%;">

                <div class="checkout-layout" style="display: grid; grid-template-columns: 1fr 320px; gap: 40px; align-items: start;">
                    <div class="basket-items">
                        ${basketItemsHTML}
                    </div>

                    <aside class="order-summary" style="background: #f7f7f2; border-radius: 20px; margin-right: 60%; width: 250px; padding: 30px; border: 1px solid #e8e8e1;">
                        <h2 style="font-size: 1.2rem; margin: 0 0 25px 0;">Order summary</h2>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                            <span>Subtotal</span>
                            <span>$${subtotal.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                            <span>Shipping</span>
                            <span>$${shipping.toFixed(2)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                            <span>Tax</span>
                            <span>$${tax.toFixed(2)}</span>
                        </div>
                        <div class="total-row" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; font-weight: bold; font-size: 1.05rem; display: flex; justify-content: space-between;">
                            <span>Total</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <button class="btn-checkout" onclick="renderPayment()" style="width: 100%; background-color: #4b6a27; color: white; border: none; padding: 15px; border-radius: 8px; margin-top: 25px; display: flex; justify-content: space-between; align-items: center; font-weight: 500; cursor: pointer;">
                            Continue to payment 
                            <span>→</span>
                        </button>
                    </aside>
                </div>
            </div>
        `;
        document.querySelectorAll('.edit-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const productId = parseInt(e.target.getAttribute('data-id'));
                const newQty = prompt("Enter new quantity:");
                
                if (newQty !== null && !isNaN(newQty) && newQty >= 0) {
                    const item = basket.find(i => i.productId === productId);
                    if (item) {
                        if (parseInt(newQty) === 0) {
                            basket = basket.filter(i => i.productId !== productId);
                        } else {
                            item.qty = parseInt(newQty);
                        }
                        renderBasket();
                    }
                }
            });
        });

        root.style.opacity = '1';
    }, 0);
}

function renderPayment() {
    const root = document.getElementById('app-root');

    let subtotal = 0;
    basket.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        subtotal += (p.price * item.qty);
    });
    
    const shipping = 3.99;
    const tax = 2.00;
    const total = subtotal + shipping + tax;

    root.innerHTML = `
        <div class="payment-page" style="padding: 40px 60px; max-width: 1200px; margin: 0 auto;">
            <header style="margin-bottom: 40px;">
                <h1 style="font-family: serif; font-size: 48px; margin: 0;">Checkout</h1>
                <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;">
            </header>

            <div style="display: grid; grid-template-columns: 1fr 350px; gap: 60px; align-items: start;">
                
                <section>
                    <h2 style="font-size: 20px; margin-bottom: 25px;">Payment Details</h2>
                    
                    <div style="background: #f9f9f7; border: 1px solid #e8e8e1; border-radius: 24px; padding: 35px;">
                        <div style="margin-bottom: 30px;">
                            <label style="display: flex; align-items: center; gap: 10px; font-weight: 600; margin-bottom: 15px;">
                                <input type="radio" name="payMethod" checked style="accent-color: #4b6a27;"> UPI Payment
                            </label>
                            <input type="text" placeholder="Enter UPI ID (e.g., username@upi)" 
                                   style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; outline: none; background: white;">
                        </div>
                    </div>

                    <div style="margin-top: 30px;">
                        <button class="btn-primary" onclick="processPayment()" 
                                style="background-color: #4b6a27; color: white; border: none; padding: 18px 40px; border-radius: 12px; font-weight: 600; cursor: pointer; width: 100%; font-size: 16px;">
                            Pay $${total.toFixed(2)} Securely
                        </button>
                        <p style="text-align: center; font-size: 12px; color: #757575; margin-top: 15px;">
                            🔒 Encrypted secure checkout
                        </p>
                    </div>
                </section>

                <aside style="background: #f7f7f2; border-radius: 20px; padding: 30px; border: 1px solid #e8e8e1;">
                    <h2 style="font-size: 1.2rem; margin: 0 0 25px 0;">Order summary</h2>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                        <span>Subtotal</span>
                        <span>$${subtotal.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                        <span>Shipping</span>
                        <span>$${shipping.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 0.95rem;">
                        <span>Tax</span>
                        <span>$${tax.toFixed(2)}</span>
                    </div>
                    <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; font-weight: bold; font-size: 1.1rem; display: flex; justify-content: space-between;">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    
                    <div style="margin-top: 25px; font-size: 13px; color: #757575;">
                        <p>Delivering to:</p>
                        <p style="color: #1a1a1a; font-weight: 500;">${currentUser.name}<br>123 Farm Lane, California</p>
                    </div>
                </aside>
            </div>
        </div>
    `;
}

function processPayment() {
    alert("Payment successful! Your fresh produce is being prepared.");
    basket = [];
    renderHome();
};

renderHome();