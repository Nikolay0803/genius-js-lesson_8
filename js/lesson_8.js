// let elem = document.getElementById("elem");

// elem.style.background = "green";

// let elements = document.querySelectorAll("ul>li:last-child");

// for (element of elements) {
//   console.log(element);
// }

// let element = document.querySelector("li");
// console.log(element);

// let element = document.getElementsByTagName('div')
// console.log(element)

// let textHidden = document.getElementById('textHidden');
// textHidden.hidden = false;

// let message = document.getElementById('message');
// console.log(message.value)

// let text = document.querySelector(".text-message");
// console.log(text.textContent)

// let text = document.querySelector(".text-message");
// // console.log(text.textContent)

// text.textContent = "Hello, Olga!"

// let btn = document.querySelector('.button');

// btn.style.backgroundColor = "red"

// let text = document.querySelector("#p_text");

// console.log(text.classList);

// console.log(text.classList.contains("red"));

// text.classList.remove("red");

// console.log(text.classList);

// console.log(text.classList.contains("red"));

// text.classList.add("new")

// console.log(text.classList);

// let image = document.querySelector(".image");

// console.log(image.hasAttribute("src"));

// console.log(image.getAttribute("src"));

// // Чекаємо, коли структура сторінки завантажиться повністю
// document.addEventListener("DOMContentLoaded", function () {
//   // Створюємо елемент 'a'
//   const item = document.createElement("a");
//   item.href = "#";
//   item.classList.add("btn");
//   item.textContent = "3";

//   // Знаходимо елемент з класом 'nav'
//   const nav = document.querySelector(".nav");

//   // Додаємо елемент 'a' до елементу 'nav'
//   nav.appendChild(item);

//   // Створюємо елемент 'h1'
//   const heading = document.createElement("h1");
//   heading.textContent = "Привіт";

//   // Знаходимо елемент з класом 'container'
//   const container = document.querySelector(".container");

//   // Вставляємо елемент 'h1' перед елементом 'nav' всередині елементу 'container'
//   container.insertBefore(heading, nav);

//   // nav.removeChild(item)
//   // item.remove();
// });

// const text = document.querySelector(".text");
// const parent = document.querySelector(".parent");

// const clone = text.cloneNode(true);

// parent.appendChild(clone)

// const container = document.querySelector(".container");

// const text = '<p>Sorry</p>';
// container.innerHTML += text;

// const list = document.querySelector("#list");

// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
// list.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");
// list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
// list.insertAdjacentHTML("afterend", "<p>afterend</p>");

// alert(location.href); // показує поточний URL-адрес
// if (confirm("Перейти на сайт Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // перенаправляє браузер на іншу URL-адресу
// }
// Домашнє завдання
// -----1-----
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>