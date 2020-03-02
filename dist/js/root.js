"use strict";
var template_landing_video_params = {
    brand_url: "./dist/media/pictures/logo.png",
    video_url: "./dist/media/videos/pexels2.mp4"
};
document.getElementById("landing_video").innerHTML = "\n<img class=\"landing_video__logo\" src=" + template_landing_video_params.brand_url + "></img>\n<video class=\"landing_video__video\" style=\"object-fit: fill;\" autoplay muted loop>\n    <source src=" + template_landing_video_params.video_url + " type=\"video/mp4\">\n    Your browser does not support the video tag.\n</video>\n";
var template_navbar_params = {
    url: "./dist/media/pictures/logo.png"
};
document.getElementById("navbar").innerHTML = "\n<div class=\"navbar__container flex__container flex__container__centered\">\n  <div class=\"navbar__container__contents\">\n    <img class=\"navbar__element__brand\" src=" + template_navbar_params.url + "></img>\n  </div>\n</div>\n";
