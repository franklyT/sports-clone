const template_landing_video_params = {
  brand_url: "./dist/media/pictures/logo.png",
  video_url: "./dist/media/videos/pexels2.mp4"
};

document.getElementById("landing_video")!.innerHTML = /*html*/ `
  <img class="landing_video__logo" src=${template_landing_video_params.brand_url}>
  <video class="landing_video__video" style="object-fit: fill;" autoplay muted loop>
    <source src=${template_landing_video_params.video_url} type="video/mp4">
    Your browser does not support the video tag.
  </video>
`;
