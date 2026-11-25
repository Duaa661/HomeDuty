import { BRAND} from '../data.js'
export function Footer() {
  return (
    <footer id="login" className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{BRAND}</div>
          <div>Home-cooked tiffin, delivered.</div>
        </div>
        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#plans">Plans</a>
          <a href="#how">How it works</a>
        </div>
        <div className="footer-contact">
          <span>[PHONE NUMBER]</span>
          <span>[EMAIL ADDRESS]</span>
          <span>[SERVICE AREAS]</span>
        </div>
      </div>
    </footer>
  );
}