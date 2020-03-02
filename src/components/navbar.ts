const template_navbar_params = {
  url: "./dist/media/pictures/logo.png"
};

document.getElementById("navbar")!.innerHTML = `
<div class="navbar__container flex__container flex__container__centered">
  <div class="navbar__container__contents">
    <img class="navbar__element__brand" src=${template_navbar_params.url}></img>
  </div>
</div>
`;
