const template_sports_bar_params = {
  boxing: "./dist/media/pictures/boxing.jpg",
  films: "./dist/media/pictures/films.jpeg",
  FINA: "./dist/media/pictures/FINA.jpeg",
  xgames: "./dist/media/pictures/xgames.jpeg",
  NCAA: "./dist/media/pictures/NCAA.jpeg",
  poker: "./dist/media/pictures/poker.jpeg",
  specialolympics: "./dist/media/pictures/specialolympics.jpg",
  worldathletics: "./dist/media/pictures/worldathletics.jpg"
};

document.getElementById("sports_bar")!.innerHTML = /*html*/ `
<div class="flex__container flex__container__centered">
    <div class="flex__column" style="width: 100%">
        <div class="flex__row" style="width: 100%">
            <div class="sports_bar__container">
                <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.boxing})"></div>
                <div class="sports_bar__box--text">BOXING</div>
            </div>
            <div class="sports_bar__container">
                <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.films})"></div>
                <div class="sports_bar__box--text">FILMS</div>
            </div>
            <div class="sports_bar__container">
                <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.FINA})"></div>
                <div class="sports_bar__box--text">FINA</div>
            </div>
            <div class="sports_bar__container">
                <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.xgames})"></div>
                <div class="sports_bar__box--text">X-GAMES</div>
            </div>
        </div>
        <div class="flex__row" style="width: 100%">
        <div class="sports_bar__container">
        <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.NCAA})"></div>
        <div class="sports_bar__box--text">NCAA</div>
    </div>

    <div class="sports_bar__container">
    <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.poker})"></div>
    <div class="sports_bar__box--text">POKER</div>
</div>

    <div class="sports_bar__container">
    <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.specialolympics})"></div>
    <div class="sports_bar__box--text">SPECIAL OLYMPICS</div>
    </div>
    <div class="sports_bar__container">
    <div class="sports_bar__box" style="background-image:url(${template_sports_bar_params.worldathletics})"></div>
    <div class="sports_bar__box--text">WORLD ATHLETICS</div>
</div>
        </div>
    </div>
</div>
  `;
