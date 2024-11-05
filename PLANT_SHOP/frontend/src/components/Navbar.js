import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    {/* Logo */}
                    <img 
                        src="https://static.wikia.nocookie.net/colleen_hoover/images/e/ee/Lily_Bloom%27s_Official_Logo_-_Atria_Books.png/revision/latest?cb=20230113191957" 
                        alt="Lily Bloom Logo" 
                    />
                    {/* Shop Information */}
                    <div className="shop-info">
                        <h1>Lily Bloom's</h1>
                        <p>Online Plant Shop</p>
                    </div>
                </Link>
                
                {/* Menu Item */}
                <div className="menu">
                    <Link to="/plants">Plants</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;