const template_navbar_params = {
  url: "./dist/media/pictures/logo.png"
};

document.getElementById("navbar")!.innerHTML = /*html*/ `
  <div class="navbar__container flex__container flex__container__centered">
    <div class="navbar__container__contents">
      <div class="flex__row" style="flex-wrap: wrap">
        <img class="navbar__element__brand" src=${template_navbar_params.url} />
        <p class="navbar__element">SPORTS PROGRAMMING &nbsp;<span>▽</span>&nbsp;</p>
        <p class="navbar__element">CONTENT CALENDAR &nbsp;</p>
        <p class="navbar__element">CONTACTS &nbsp;<span>▽</span>&nbsp;</p>
        <input class="navbar__element navbar__element__search" placeholder="Search" />
      </div>
    </div>
  </div>
`;
