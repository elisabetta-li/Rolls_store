function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper"); //по классу
  const cartEmptyBadge = document.querySelector("[data-cart-empty]"); //по data-атрибуту
  const orderForm = document.querySelector("#order-form"); //по id

  if (cartWrapper.children.length > 0) {
    cartEmptyBadge.classList.add("none"); //добавляем/удаляем класс, скрывающий элемент (через CSS/Bootstrap )
    orderForm.classList.remove("none");
  } else {
    cartEmptyBadge.classList.remove("none");
    orderForm.classList.add("none");
  }
}
