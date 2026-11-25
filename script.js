// Завдання 1 (Варіант 7): (7 mod 10) + 1 = 8-й елемент через getElementById(), наступний через querySelector()
const eighthElement = document.getElementById("target-8");
const ninthElement = document.querySelector(".target-next");

let isEighthToggled = false;
let isNinthToggled = false;

if (eighthElement) {
    eighthElement.addEventListener("click", () => {
        isEighthToggled = !isEighthToggled;
        if (isEighthToggled) {
            eighthElement.style.backgroundColor = "#0f766e";
            eighthElement.style.color = "#ffffff";
        } else {
            eighthElement.style.backgroundColor = "#fde68a";
            eighthElement.style.color = "#111827";
        }
    });
}

if (ninthElement) {
    ninthElement.addEventListener("click", () => {
        isNinthToggled = !isNinthToggled;
        if (isNinthToggled) {
            ninthElement.style.backgroundColor = "#7c2d12";
            ninthElement.style.color = "#fef3c7";
        } else {
            ninthElement.style.backgroundColor = "#dbeafe";
            ninthElement.style.color = "#1e3a8a";
        }
    });
}

// Завдання 2: Кнопки Додати, Збільшити, Зменшити, Видалити зображення
const imageBox = document.getElementById("image-box");
const btnAdd = document.getElementById("btn-add");
const btnZoomIn = document.getElementById("btn-zoom-in");
const btnZoomOut = document.getElementById("btn-zoom-out");
const btnRemove = document.getElementById("btn-remove");

const IMG_SRC = "prague.jpg";
const CITY_URL = "https://praha.eu";
const DEFAULT_WIDTH = 480;
const STEP_WIDTH = 80;
const MIN_WIDTH = 160;
const MAX_WIDTH = 860;

function getCurrentImage() {
    return document.getElementById("city-img");
}

function createImageBlock(widthPx = DEFAULT_WIDTH) {
    imageBox.innerHTML = "";

    const link = document.createElement("a");
    link.id = "city-link";
    link.href = CITY_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.id = "city-img";
    img.src = IMG_SRC;
    img.alt = "Панорама Праги";
    img.style.width = `${widthPx}px`;

    link.appendChild(img);
    imageBox.appendChild(link);
    return img;
}

btnAdd.addEventListener("click", () => {
    if (!getCurrentImage()) {
        createImageBlock(DEFAULT_WIDTH);
    }
});

btnZoomIn.addEventListener("click", () => {
    const img = getCurrentImage();
    if (!img) return;
    const currentWidth = parseInt(window.getComputedStyle(img).width, 10) || DEFAULT_WIDTH;
    const nextWidth = Math.min(MAX_WIDTH, currentWidth + STEP_WIDTH);
    img.style.width = `${nextWidth}px`;
});

btnZoomOut.addEventListener("click", () => {
    const img = getCurrentImage();
    if (!img) return;
    const currentWidth = parseInt(window.getComputedStyle(img).width, 10) || DEFAULT_WIDTH;
    const nextWidth = Math.max(MIN_WIDTH, currentWidth - STEP_WIDTH);
    img.style.width = `${nextWidth}px`;
});

btnRemove.addEventListener("click", () => {
    const img = getCurrentImage();
    if (img) {
        imageBox.innerHTML = "";
    }
});