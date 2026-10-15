


import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-mark">F.</span> Fahad Ansari
      </a>
      <p>Designed with care. Built with React.</p>
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