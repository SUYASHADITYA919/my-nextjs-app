"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";

const products = [
  { id: 1, name: "Heirloom tomato", price: 5.99, unit: "lb", origin: "San Juan Capistrano, CA", img: "/tomato.png" },
  { id: 2, name: "Organic ginger", price: 12.99, unit: "lb", origin: "Huntington Beach, CA", img: "/ginger.png" },
  { id: 3, name: "Sweet onion", price: 2.99, unit: "lb", origin: "Central Valley, CA", img: "/onion.jpg" },
];

const articles = [
  {
    id: 1,
    title: "The secret to the perfect heirloom tomato salad",
    date: "August 15, 2023",
    category: "Recipes",
    img: "/heirloom-tomatoes.jpg",
    summary: "It's all about the acid-to-oil ratio and picking the right basil variety.",
  },
  {
    id: 2,
    title: "Why organic ginger is the root of longevity",
    date: "August 10, 2023",
    category: "Health",
    img: "/ginger-article.jpg",
    summary: "New studies show that daily ginger consumption can reduce inflammation significantly.",
  },
  {
    id: 3,
    title: "Meeting the farmers of the Central Valley",
    date: "August 05, 2023",
    category: "Community",
    img: "/farmers.jpg",
    summary: "A deep dive into the lives of the people who put food on your table.",
  },
];

const initialBasket = [
  { productId: 1, qty: 1 },
  { productId: 2, qty: 0.5 },
  { productId: 3, qty: 5 },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

export default function HomePage() {
  const [view, setView] = useState<"home" | "shop" | "newstand" | "about" | "profile" | "basket" | "payment">("home");
  const [basket, setBasket] = useState(initialBasket);
  const [cartCount, setCartCount] = useState(0);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({ name: "Guest User", initials: "GU" });
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [paymentId, setPaymentId] = useState("");
  const [contentVisible, setContentVisible] = useState(true);

  const SHIPPING = 3.99;
  const TAX = 2.0;

  useEffect(() => {
    const totalQty = basket.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(totalQty);
  }, [basket]);

  useEffect(() => {
    setContentVisible(false);
    const timeout = window.setTimeout(() => {
      setContentVisible(true);
    }, 50);
    return () => window.clearTimeout(timeout);
  }, [view]);

  const basketItems = useMemo(
    () =>
      basket.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.productId),
      })),
    [basket]
  );

  const basketTotal = basketItems.reduce((sum, item) => sum + (item.product?.price ?? 0) * item.qty, 0);

  const handleNavigate = (target: typeof view) => {
    setView(target);
  };

  const handleSignIn = () => {
    if (!fullName.trim()) {
      return;
    }

    setCurrentUser({ name: fullName.trim(), initials: getInitials(fullName.trim()) });
    setFullName("");
    setPassword("");
    setView("profile");
  };

  const handleProcessPayment = () => {
    if (!paymentId.trim()) {
      window.alert("Enter a valid UPI ID to proceed.");
      return;
    }

    window.alert("Payment successful! Your fresh produce is being prepared.");
    setBasket([]);
    setCartCount(0);
    setPaymentId("");
    setView("home");
  };

  const handleEditQuantity = (productId: number) => {
    const currentItem = basket.find((item) => item.productId === productId);
    if (!currentItem) return;

    const rawValue = window.prompt(`Enter quantity for ${products.find((p) => p.id === productId)?.name}:`, String(currentItem.qty));
    if (rawValue === null) return;

    const parsedQty = parseFloat(rawValue);
    if (Number.isNaN(parsedQty) || parsedQty < 0) {
      window.alert("Please enter a valid non-negative quantity.");
      return;
    }

    setBasket((prev) => {
      if (parsedQty === 0) {
        return prev.filter((item) => item.productId !== productId);
      }
      return prev.map((item) =>
        item.productId === productId
          ? { ...item, qty: parsedQty }
          : item
      );
    });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo} onClick={() => handleNavigate("home")}>World Peas</div>
          <ul className={styles.navLinks}>
            <li className={styles.navItem} onClick={() => handleNavigate("shop")}>Shop</li>
            <li className={styles.navItem} onClick={() => handleNavigate("newstand")}>Newstand</li>
            <li className={styles.navItem} onClick={() => handleNavigate("about")}>Who we are</li>
            <li className={styles.navItem} onClick={() => handleNavigate("profile")}>My profile</li>
            <li className={styles.navItem} onClick={() => handleNavigate("basket")}>Basket (<span className={styles.cartCount}>{cartCount}</span>)</li>
          </ul>
        </nav>
      </header>

      <main className={`${styles.main} ${contentVisible ? styles.visible : ""}`}>
        {view === "home" && (
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <h1>
                We're <em>farmers</em>, <em>purveyors</em>, and <em>eaters</em> of organically grown food.
              </h1>
              <button className={styles.btnPrimary} onClick={() => handleNavigate("shop")}>Browse our shop</button>
            </div>
            <div className={styles.heroImages}>
              <img src="/fresh-peas.png" alt="Fresh Peas" className={styles.heroImageLarge} />
              <div className={styles.heroImageStack}>
                <img src="/fresh-onions.png" alt="Fresh Onions" className={styles.heroImageSmall} />
                <p className={styles.heroCaption}>
                  <strong>Central California</strong> — The person who grew these was located in Central California and, er, hopefully very well-compensated.
                </p>
              </div>
            </div>
            <div className={styles.beliefSection}>
              <p style={{marginLeft: '-20px', marginTop: '90px', maxWidth: '200px'}}><strong>WHAT WE BELIEVE</strong></p>
              <p style={{marginLeft: '200px'}}>
                We believe in produce. Tasty produce. Produce like: Apples. Oranges. Limes. Lemons. Guavas.
                Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
                Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli.
                Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
                What are we forgetting? Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
                Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis.
                Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes.
                Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel.
                Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives.
                Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...
              </p>
            </div>
          </section>
        )}

        {view === "shop" && (
          <section>
            <div className={styles.sectionHeader}>
              <div>
                <br /><br />
                <h1>Produce</h1>
                <p style={{ marginLeft: '200px', marginTop: '-30px' }}><strong>Fresh</strong> - August 21, 2023</p>
              </div>
              <div className={styles.filterControls}>
                <button className={`${styles.pillBtn} ${styles.active}`}>Default</button>
                <button className={styles.pillBtn}>A-Z</button>
                <button className={styles.pillBtn}>List view</button>
              </div>
            </div>
            <hr className={styles.sectionDivider} />
            <div className={styles.productGrid}>
              {products.map((product) => (
                <article key={product.id} className={styles.card}>
                  <img src={product.img} alt={product.name} className={styles.cardImage} />
                  <div className={styles.cardBody}>
                    <h3>{product.name}</h3>
                    <p className={styles.price}>${product.price.toFixed(2)} / {product.unit}</p>
                    <p><small>Grown in {product.origin}</small></p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {view === "newstand" && (
          <section className={styles.newstandContainer}>
            <div className={styles.sectionHeader}>
              <div>
                <h1>Newstand</h1>
                <p style={{ marginLeft: '250px', marginTop: '-30px' }}>The latest from the field — 2023</p>
              </div>
              <div className={styles.filterControls}>
                <button className={`${styles.pillBtn} ${styles.active}`}>All Stories</button>
                <button className={styles.pillBtn}>Recipes</button>
                <button className={styles.pillBtn}>Health</button>
              </div>
            </div>
            <hr className={styles.sectionDivider} />
            <div className={styles.newstandGrid}>
              {articles.map((article) => (
                <article key={article.id} className={styles.articleCard}>
                  <div className={styles.articleImageWrapper}>
                    <img src={article.img} alt={article.title} className={styles.articleImage} />
                  </div>
                  <div className={styles.articleContent}>
                    <p className={styles.articleCategory}>{article.category}</p>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <div className={styles.articleFooter}>
                      <span>{article.date}</span>
                      <a href="#">Read more →</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {view === "about" && (
          <section className={styles.aboutSection}>
            <div className={styles.aboutContent}>
              <section className={styles.aboutIntro}>
                <h1>Who we are</h1>
                <hr className={styles.aboutDivider} />
              </section>

              <div className={styles.aboutGrid}>
                <div className={styles.aboutImageCard}>
                  <img
                    src="/farmers.jpg"
                    alt="Our Farm"
                    className={styles.aboutImage}
                  />
                </div>

                <div className={styles.aboutText}>
                  <p className={styles.sectionLabel}>Established 2023</p>
                  <h2>
                    We believe in produce. Tasty produce.
                    Produced by people who care.
                  </h2>
                  <p>
                    World Peas is more than just a grocery service. We are a bridge between the hardworking farmers
                    of the Central Coast and your kitchen table. Every item in our shop is hand-selected for
                    quality, sustainability, and flavor.
                  </p>

                  <div className={styles.promiseCard}>
                    <h3>Our Promise</h3>
                    <ul>
                      <li>✓ 100% Organically grown</li>
                      <li>✓ Fair compensation for growers</li>
                      <li>✓ Minimal plastic packaging</li>
                      <li>✓ Transparent sourcing</li>
                    </ul>
                  </div>

                  <button className={styles.btnPrimary} onClick={() => handleNavigate("shop")}>Support our farmers</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "profile" && (
          <section className={styles.authContainer}>
            <div className={styles.authCard}>
              <div className={styles.profileBadge}>{currentUser.initials}</div>
              <h1>Welcome back</h1>
              <p>Sign in to manage your harvests</p>
              <div className={styles.fieldGroup}>
                <label>Full Name</label>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Suyash Aditya"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                />
              </div>
              <button className={styles.btnPrimary} onClick={handleSignIn}>Sign In</button>
              <div className={styles.profileInfo}>
                <p><strong>Current user:</strong> {currentUser.name}</p>
              </div>
            </div>
          </section>
        )}

        {view === "basket" && (
          <section className={styles.basketSection}>
            <div className={styles.sectionHeader}>
              <div style={{ marginLeft: '-200px', marginTop: '-30px' }}>
                <h1>Basket</h1>
                <p style={{ marginLeft: '150px', marginTop: '-25px' }}> {basket.length} items</p>
              </div>
            </div>
            <hr style={{ width: '120%', margin: '20px 0', marginLeft: '-150px' }} /> 

            <div className={styles.basketLayout} style={{ marginLeft: '-150px'}}>
              <div className={styles.basketItems}>
                {basketItems.map((item) => {
                  const price = item.product?.price ?? 0;
                  const itemTotal = price * item.qty;
                  return (
                    <article key={item.productId} className={styles.itemCard}>
                      <div className={styles.itemImgBox}>
                        <img src={item.product?.img} alt={item.product?.name} />
                      </div>
                      <div className={styles.itemDetails}>
                        <div className={styles.itemHeader}>
                          <h3>{item.product?.name}</h3>
                          <span className={styles.itemPriceTotal}>${itemTotal.toFixed(2)}</span>
                        </div>
                        <p className={styles.unitPrice}>${price.toFixed(2)} / {item.product?.unit}</p>
                        <div className={styles.quantityPill}>
                          <span>{item.qty} {item.product?.unit}</span>
                          <span
                            className={styles.editIcon}
                            role="button"
                            aria-label={`Edit quantity for ${item.product?.name}`}
                            onClick={() => handleEditQuantity(item.productId)}
                          >
                            ✎
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <aside className={styles.orderSummary}>
                <h2>Order summary</h2>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${basketTotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>${SHIPPING.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax</span>
                  <span>${TAX.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <strong>Total</strong>
                  <strong>${(basketTotal + SHIPPING + TAX).toFixed(2)}</strong>
                </div>
                <button className={styles.checkoutButton} onClick={() => handleNavigate("payment")}> 
                  Continue to payment <span>→</span>
                </button>
              </aside>
            </div>
          </section>
        )}

        {view === "payment" && (
          <section className={styles.paymentSection}>
            <header className={styles.paymentHeader}>
            <div>
                <br /><br />
              <h1>Checkout</h1>
              <hr className={styles.aboutDivider} />
            </div>
            </header>

            <div className={styles.paymentLayout}>
              <section className={styles.paymentDetails}>
                <h2>Payment Details</h2>
                <div className={styles.paymentCard}>
                  <label className={styles.paymentOption}>
                    <input
                      type="radio"
                      name="payMethod"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                    />
                    UPI Payment
                  </label>
                  <input
                    type="text"
                    value={paymentId}
                    onChange={(event) => setPaymentId(event.target.value)}
                    placeholder="Enter UPI ID (e.g., username@upi)"
                    className={styles.paymentInput}
                  />
                </div>

                <div className={styles.paymentAction}>
                  <button className={styles.btnPrimary} onClick={handleProcessPayment}>
                    Pay ${(basketTotal + SHIPPING + TAX).toFixed(2)} Securely
                  </button>
                  <p className={styles.secureText}>🔒 Encrypted secure checkout</p>
                </div>
              </section>

              <aside className={styles.orderSummary}>
                <h2>Order summary</h2>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>${basketTotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>${SHIPPING.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax</span>
                  <span>${TAX.toFixed(2)}</span>
                </div>
                <div className={styles.totalRow}>
                  <strong>Total</strong>
                  <strong>${(basketTotal + SHIPPING + TAX).toFixed(2)}</strong>
                </div>

                <div className={styles.paymentSummaryNote}>
                  <p>Delivering to:</p>
                  <p>{currentUser.name}<br />123 Farm Lane, California</p>
                </div>
              </aside>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
