# PowerFastPoint
# Быстрый создатель презентаций на node.js
-------------
### Версия 0.1
Запустите командную строку и напишите команду **node index**
В браузере перейдите по адрессу **127.0.0.1:3000**
Кратко о синтаксисе

Поле заголовков
- Слайды строятся от колличества заголовков, 
заголовки разделяются точками с запятой,
последний заголовок разделять не требуется.

![1](https://sun9-86.userapi.com/impg/n1wcd-1tHTezMzVWpECeCijKnUFzO74CX9vWUQ/Lnydz0DBNHI.jpg?size=877x120&quality=96&sign=75bb6b27c0717e5949bc9f7fdd8ee5c1&type=album "1")

- Примеры:
    - Обычный заголовок: `Пример`.
    - 2 Заголовка: `Один; Два`.
    - 1 Заголовок 1 Пустой 1 Заголовок: `Заголовок; ; Заголовок`.

Текст:
- Предложение вставляется в 1 слайд,
предложения разделяются точкой.

![2](https://sun9-29.userapi.com/impg/SPHzC1g0Y9PM3C_dAnn_2-k7UxrsCBKpbffuxw/oWrWlz1vX5c.jpg?size=982x216&quality=96&sign=9afe1b67d24a668c8d6ec46a2761b2b0&type=album "2")

- Примеры
    - Обычное предложение: `Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document.`
    - 2 Предложения: `Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.`

Изображения
-  Для вставки изображения используется url,
на каждом слайде обязательное нахождение изображения.
- Советую использовать короткие url, url-ы разделяются точками с запятой.

![3](https://sun9-4.userapi.com/impg/FckHsXQqHtp0ezc2hI4YAV5dnQCU0i5Em9iW2Q/FD-R78Q4oFg.jpg?size=927x213&quality=96&sign=8d8bd6e3ffb12d34d29072550f2d0426&type=album "3")

- Примеры
    - Одно изображение: `https://example.ru/one.jpg` 
    - Два изображения, по одному на каждый слайд:  `https://example.ru/one.jpg;https://example.ru/two.jpg`

- Сохранение
    - После заполнения формы нажмите кнопку подтверждения, сохраняется по пути **`./storage/app.pptx`**

# В процессе будет выбор колличества изображений на одном слайде,
- ### добавление изображений с локальных данных,
- ### рефакторинг и улучшение кода.
