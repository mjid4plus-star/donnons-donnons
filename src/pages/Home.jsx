
import "./Home.css";

export default function Home() {
    return (
        <main className="home">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">A community that shares</span>

                    <h1>
                        Give things
                        <br />
                        a <span>new life.</span>
                    </h1>

                    <p>
                        Discover items, exchange what you have,
                        and find something special in your community.
                    </p>

                    <a href="#latest" className="hero-btn">
                        Explore items →
                    </a>
                </div>

                <div className="hero-image">
                    <div className="hero-card">
                        <span>♻️</span>
                        <h3>One person's old</h3>
                        <h3>is another's treasure.</h3>
                        <p>Exchange. Reuse. Connect.</p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories">
                <div className="section-heading">
                    <div>
                        <span className="section-tag">DISCOVER</span>
                        <h2>Explore categories</h2>
                    </div>
                    <p>Find something you love.</p>
                </div>

                <div className="category-list">
                    <div className="category-item">
                        <span>📚</span>
                        <p>Books</p>
                    </div>

                    <div className="category-item">
                        <span>💻</span>
                        <p>Electronics</p>
                    </div>

                    <div className="category-item">
                        <span>👕</span>
                        <p>Fashion</p>
                    </div>

                    <div className="category-item">
                        <span>⚽</span>
                        <p>Sports</p>
                    </div>

                    <div className="category-item">
                        <span>🎮</span>
                        <p>Games</p>
                    </div>
                </div>
            </section>

            {/* Latest Items Section */}
            <section className="latest" id="latest">
                <div className="section-heading">
                    <div>
                        <span className="section-tag">FRESH FINDS</span>
                        <h2>Recently added</h2>
                    </div>

                    <a href="/explore" className="view-all">
                        View all →
                    </a>
                </div>

                <div className="items-grid">

                    <article className="item-card">
                        <div className="item-image">
                            <img
                                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
                                alt="Books"
                            />
                            <span className="item-category">Books</span>
                            <span className="bookmark">♡</span>
                            <div className="image-overlay">
                                <span>See more →</span>
                            </div>
                        </div>

                        <div className="item-info">
                            <h3>Collection of novels</h3>
                            <p>Looking for books or stationery</p>
                            <span className="item-location">📍 Agadir</span>
                        </div>
                    </article>

                    <article className="item-card">
                        <div className="item-image">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                                alt="Watch"
                            />
                            <span className="item-category">Electronics</span>
                            <span className="bookmark">♡</span>
                            <div className="image-overlay">
                                <span>See more →</span>
                            </div>
                        </div>

                        <div className="item-info">
                            <h3>Classic wristwatch</h3>
                            <p>Open to different exchanges</p>
                            <span className="item-location">📍 Agadir</span>
                        </div>
                    </article>

                    <article className="item-card">
                        <div className="item-image">
                            <img
                                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
                                alt="T-shirt"
                            />
                            <span className="item-category">Fashion</span>
                            <span className="bookmark">♡</span>
                            <div className="image-overlay">
                                <span>See more →</span>
                            </div>
                        </div>

                        <div className="item-info">
                            <h3>Basic white t-shirt</h3>
                            <p>Looking for another clothing item</p>
                            <span className="item-location">📍 Agadir</span>
                        </div>
                    </article>

                </div>
            </section>

        </main>
    );
}
