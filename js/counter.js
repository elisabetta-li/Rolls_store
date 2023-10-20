window.addEventListener("click", function (event) {
  //объявляем переменную счетчика, чтобы ее видимость была внутри всей функции. Так как не можем присвоить значение сразу, используем let
  let counter;

  //проверяем клик сторого по кнопке Плюс или Минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper"); //ищем родительский элемент по названию (".")
    counter = counterWrapper.querySelector("[data-counter]"); //ищем элемент (уже внутри .counter-wrapper). [] - так как ищем по data-атрибуту
  }

  // П роверяем был ли клик по кнопке Плюс
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  // Проверяем был ли клик по кнопке Минус
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
    // проверяем, что кнопка Минус находится в корзине и удаляем товар оттуда при необходимости
    else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();
      toggleCartStatus();
      calcCartPriceAndDelivery();
    }
  }

  //   Проверяем клик на + или - внутри корзины
  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
