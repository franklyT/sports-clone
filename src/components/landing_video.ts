const template_landing_video_parameters = {
  url: "./dist/media/pictures/logo.png"
};
const template_landing_video = document.createElement("div");

template_landing_video.innerHTML = `
<img class="landing_video__logo" src="./dist/media/pictures/logo.png"></img>
<video class="landing_video__video" style="object-fit: fill;" autoplay muted loop>
    <source src="./dist/media/videos/pexels2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
`;

document.getElementById("landing_video")!.appendChild(template_landing_video);
