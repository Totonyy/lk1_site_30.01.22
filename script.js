const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const banner = document.createElement('div');
banner.className = 'banner';
banner.style.height = innerHeight + 'px';

const main = document.createElement('main');

container.append(banner, main);

const mainCaption = document.createElement('h2');
mainCaption.className = 'main__caption';
mainCaption.innerHTML = '4 types of plants';
main.append(mainCaption);

class Plant {
    constructor(capt, imgPath, cnt, mini){
        this.caption = capt;
        this.pic = imgPath;
        this.count = cnt;
        this.imgType = mini;
    }
};
const data = [
    new Plant("Foliage", "img/Rec_1.png", 21,'img/plant_1.png'),
    new Plant("Pucculent", "img/Rec_2.png", 4,'img/plant_2.png'),
    new Plant("Flower", "img/Rec_3.png", 8,'img/plant_3.png'),
    new Plant("Fruit", "img/Rec_4.png", 10,'img/plant_4.png'),
];

let mainContent = "";
data.forEach(plant => {
    // const card = document.createElement("div");
    // card.className = "main__item";
    // card.style.backgroundImage = `url(${plant.pic})`;
    // main.append(card);
    mainContent += `
        <div class="main__item" style="background-image: url(${plant.pic})">
            <h3>${plant.caption}</h3>
            <div class="main__item-text">${plant.count} plants</div>
            <img alt="${plant.caption}" src="${plant.imgType}">
        </div>
    `
});

main.innerHTML += mainContent;


/*ДЗ ШАПКА*/
const header = document.createElement('div');
header.className = 'header';
container.prepend(header);

    const headerLogo = document.createElement('div');
    headerLogo.className = 'header__div header__logo';
    header.append(headerLogo);

        const logoIcon = document.createElement('img');
        logoIcon.className = 'header__logo-icon';
        logoIcon.alt = 'logo';
        logoIcon.src = 'img/Logo.png';
        headerLogo.append(logoIcon);

    const headerMenu = [
        "Services",
        "Blog",
        "Shop",
        "Location",
    ];

    headerMenu.forEach(element => {
        const headerMenu = document.createElement('div');
        headerMenu.className = "header__div header__menu-text";
        header.append(headerMenu);

        const headerMenuText = document.createElement('h3');
        headerMenuText.innerHTML = element;
        headerMenu.append(headerMenuText);
    });

    const headerButton = document.createElement('button');
    headerButton.className = 'header__div header__button';
    let count = 0;
    headerButton.innerHTML = `<h3>Check out(${count})</h3>`;
    header.append(headerButton);

/*ДЗ текст и кнопка на баннере*/
const bannerText = document.createElement('div');
bannerText.className = 'banner__text';
main.before(bannerText);

const bannerTextUp = document.createElement('div');
bannerTextUp.className = 'banner__text-up';
bannerTextUp.innerHTML = `
    <h3><span class='banner__text-up1'>Let's find</span><br>
    your love<br>
    <span class='banner__text-up2'>plants.</span></h3>
`;
bannerText.append(bannerTextUp);

const bannerTextDwn = document.createElement('div');
bannerTextDwn.className = 'banner__text-dwn';
bannerTextDwn.innerHTML = `
    <h5>Add some color to your home, give it a<br>
    little attention, the plants will <br>
    accompany you quietly</h5>
`;
bannerText.append(bannerTextDwn);

const bannerButton = document.createElement('button');
bannerButton.className = 'banner__button';
bannerButton.innerHTML= `<h4>Watch the video</h4>`.toUpperCase();
bannerText.append(bannerButton);

//ДЗ 4 иконки цветов внизу баннера
const bannerIconsDwn = document.createElement('div');
bannerIconsDwn.className = 'banner__icons-dwn';
bannerText.append(bannerIconsDwn);

const bannerIconsDwnSet = [
    "img/plant_1.png",
    "img/plant_2.png",
    "img/plant_3.png",
    "img/plant_4.png",
];
bannerIconsDwnSet.forEach(el => {
    const bannerIcon = document.createElement('img');
    bannerIcon.className = 'banner__icons-icon';
    bannerIcon.alt = 'iconDwn';
    bannerIcon.src = el;
    bannerIconsDwn.append(bannerIcon);
})
