class MyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header-container">
  <div class="header-nav-container">
    <div class="headerpart-1">
      <a href="index.html">
        <img class="logo-img" src="./img/Logo-P.png" alt="Logo" />
      </a>
    </div>
    <div class="headerpart-2">
      <nav class="pages-container">
        <li><a class="page-button" href="index.html">Home</a></li>
        <li><a class="page-button" href="my-work.html">My Work</a></li>
        <li><a class="page-button" href="about-me.html">About Me</a></li>
      </nav>
    </div>
    <div class="headerpart-3">
      <a class="page-button" href="contact.html">Contact</a>
    </div>
  </div>
  <div class="header-line"></div>
</div>

        `;
  }
}
customElements.define("custom-header", MyHeader);
