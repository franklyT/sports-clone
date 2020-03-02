const template_navbar_parameters = {
  url: "./dist/media/pictures/logo.png"
};
const template_navbar = document.createElement("div");

template_navbar.innerHTML = `
<div class="navbar__container flex__container flex__container__centered">
    <div class="navbar__container__contents">
        <img class="navbar__element__brand" src="${template_navbar_parameters.url}"></img>
    </div>
</div>
`;

document.getElementById("navbar")!.appendChild(template_navbar);
