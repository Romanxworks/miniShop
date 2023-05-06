import { Link } from "react-router-dom";

function Footer():JSX.Element{
  return(
    <footer className="footer">
    <Link to="/"><h2 className="logo">Qpick</h2></Link>
    <ul className="links">
      <li><a href="/" className="footer-link">Контакты</a></li>
      <li><a href="/" className="footer-link">Избранное</a></li>
      <li><a href="/" className="footer-link">Корзина</a></li>
    </ul>
    <ul className="links">
      <li><a href="/" className="footer-link">Условия сервиса</a></li>
      <li>
        <div className="language">
          <img className="" src="img/RU.svg" alt="cart-icon"/>
          <a href="/" className="footer-link">RUS</a>
          <a href="/" className="footer-link">ENG</a>
        </div>
      </li>
    </ul>
    <div className="social">
      <a className="social-links" href="/">
        <img className="social-image" src="img/VK.svg" alt="cart-icon"/>
      </a>
      <a className="social-links" href="/">
        <img className="social-image" src="img/Telegram.svg" alt="cart-icon"/>
      </a>
      <a className="social-links" href="/">
        <img className="social-image" src="img/Whatsapp.svg" alt="cart-icon"/>
      </a>
    </div>
  </footer>
  )
}
export default Footer;