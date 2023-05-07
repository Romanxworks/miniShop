import { Link } from "react-router-dom";

type HeaderProps = {
  count: number|null;
}

function Header({count = 0}: HeaderProps): JSX.Element{
  return (
    <header className="header">
    <Link to="/"><h2 className="logo">Qpick</h2></Link>
    <div className="icons-group">
      <div className="icons">
        <span className="likes-count count">0</span>
        <img className="icon" src="img/likes.svg" alt="likes-icon"/>
      </div>
      <div className="icons">
        <Link to='/cart'>
          <span className="cart-count count">{count}</span>
          <img className="icon" src="img/cart.svg" alt="cart-icon"/>
        </Link>
      </div>
    </div>
  </header>
  );
} 
export default Header;