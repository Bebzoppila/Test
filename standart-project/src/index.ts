import "./style/main.sass";
import "./style/normalize.css";

const imgPath = ["/images/danger.png", "/images/successful.webp"];

const alltaskImages = document.querySelectorAll(
  ".task__item-img"
) as NodeListOf<HTMLImageElement>;
const btn = document.querySelector(".btn");

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const onBtnClick = async () => {
  for (let i = 0; i < alltaskImages.length; i++) {
    const timerResult = await timer(i);
    setTimeout(() => {
      alltaskImages[i].classList.remove("task__item-img--animate");
      alltaskImages[i].src = imgPath[randomInteger(0, 1)];
    }, timerResult);
  }
};

async function timer(indx: number) {
  const data: number = await new Promise((resolve) =>
    setTimeout(
      () => {
        alltaskImages[indx].classList.add("task__item-img--animate");
        resolve(2000);
      },
      indx == 0 ? 0 : 2000
    )
  );
  return data;
}
btn.addEventListener("click", onBtnClick);
