import "./Navbar.css";

export default function Navbar() {

    // Temporary value until Laravel authentication
    const isLoggedIn = false;

    return (
        <nav className="navbar">

            <a href="/" className="navbar-logo">
                donnons<span>.</span>
            </a>

            <div className="navbar-links">
                <a href="/" className="nav-items">Home</a>
                <a href="/explore" className="nav-items">Explore</a>
                <a href="/collection" className="nav-items">My Collection</a>
                <a href="/create" className="nav-items create-link">
                    + Create item
                </a>
            </div>

            <div className="navbar-auth">
                {isLoggedIn ? (
                    <a href="/profile" className="nav-items">
                        Profile
                    </a>
                ) : (
                    <>
                        <a href="/login" className="nav-items">
                            Sign in
                        </a>

                        <a href="/register" className="signup-btn">
                            Sign up
                        </a>
                    </>
                )}
            </div>

        </nav>
    );
}
