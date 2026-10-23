


import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">F.</span> Fahad Ansari
      </a>
      <p>There's no place like 127.0.0.1</p>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
      <span className="copyright">
        © {new Date().getFullYear()} Fahad Ansari
      </span>
    </footer>
  );
}

export default Footer