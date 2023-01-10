
  
###  npm install - установка зависимостей
  
###  npm run dev - версия development




## Тестовое задание для фронтенд-разработчика (React)

В тестовом задании представлены макеты дизайна двух страниц: страницы каталога продуктов и страница корзины. 

Условий несколько:
- Используйте менеджер пакетов NPM;
- Используйте TypeScript;
- Используйте [React](https://github.com/facebook/react);
- Используйте [Redux](https://github.com/reduxjs/react-redux);
- Сборка скриптов [Webpack](https://webpack.js.org/);
- Сборка стилей проекта должна выполняться [Weabpack](https://webpack.js.org/) или [Gulp](https://github.com/gulpjs/gulp);
- Работоспособность последних версиях браузеров Chrome, Safari и Firefox;

## Задачи
### Level 1

Реализовать список товаров, который можно отфильтровать с помощью расположенного слева списка брендов. Необходимые данные можно подгрузить из JSON-файлов [продукты](assets/products.json) и [бренды](assets/brands.json).

![](assets/images/catalog.png?raw=true "")

### Добавление товара в корзину
При добавлении в корзину необходимо отображать количество продуктов в корзине рядом с иконкой вверху.

### Вёрстка и дизайн
Для упрощения задания представлены не макеты в Sketch, Figma или PS, а мокапы, показывающие основную структуру страниц. В этой задаче вы вольны использовать любую сетку или не использовать вовсе.
Логотип можно взять [отсюда](assets/images/logo.png). Эта задача позволит нам понять, как вы видите в целом UI, как его сделать аккуратней и удобней для пользователя, не имея при этом чётких дизайнов или ограничений.

### Level 2

* Сделать респонсив начиная от 320px и выше. Использовать фреймворк [Bootstrap](https://github.com/react-bootstrap/react-bootstrap). Главное, чтобы интерфейс оставался удобным, аккуратным и эстетичным.


## Необязательные задачи

### Level 3
* Страница корзины

![](assets/cart-level-2.png?raw=true "")

Вывести добавленные ранее товары. Добавить поле с возможностью выбора количества и кнопку Удалить для удаления позиции из корзины. Текст с суммой всего заказа должен в реальном времени пересчитывать сумму. Переключение между страницей каталога и корзины реализовать с помощью [React Router](https://github.com/remix-run/react-router).

