function Header(): JSX.Element{
  return (
    <header className="header">
    <h2 className="logo">Qpick</h2>
    <div className="icons-group">
      <div className="icons">
        <span className="likes-count count">1</span>
        <img className="icon" src="img/likes.svg" alt="likes-icon"/>
      </div>
      <div className="icons">
        <span className="cart-count count">2</span>
        <img className="icon" src="img/cart.svg" alt="cart-icon"/>
      </div>
    </div>
  </header>
  );
} 
export default Header;