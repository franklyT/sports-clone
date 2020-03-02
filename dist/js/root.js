"use strict";
var template_landing_video_parameters = {
    url: "./dist/media/pictures/logo.png"
};
var template_landing_video = document.createElement("div");
template_landing_video.innerHTML = "\n<img class=\"landing_video__logo\" src=\"./dist/media/pictures/logo.png\"></img>\n<video class=\"landing_video__video\" style=\"object-fit: fill;\" autoplay muted loop>\n    <source src=\"./dist/media/videos/pexels2.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n</video>\n";
document.getElementById("landing_video").appendChild(template_landing_video);
var template_navbar_parameters = {
    url: "./dist/media/pictures/logo.png"
};
var template_navbar = document.createElement("div");
template_navbar.innerHTML = "\n<div class=\"navbar__container flex__container flex__container__centered\">\n    <div class=\"navbar__container__contents\">\n        <img class=\"navbar__element__brand\" src=\"" + template_navbar_parameters.url + "\"></img>\n    </div>\n</div>\n";
document.getElementById("navbar").appendChild(template_navbar);
