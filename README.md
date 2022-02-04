# PowerPointInOneString
### Быстрый создатель презентаций на node.js
0.1
-------------
Запустите командную строку и напишите команду **node index**
В браузере перейдите по адрессу **127.0.0.1:3000**
Кратко о синтаксисе

- Поле заголовков
Слайды строятся от колличества заголовков, 
заголовки разделяются точками с запятой, последний заголовок разделять не требуется.
![1](blob:https://web.telegram.org/6c9a23c3-a5c9-4650-8f21-1105df185629 "1")

Примеры
Обычный заголовок: `Пример`
2 Заголовка: `Один; Два`
1 Заголовок 1 Пустой 1 Заголовок: `Заголовок; ; Заголовок`

- Текст
1 Предложение вставляется в 1 слайд,
предложения разделяются точкой.
![2](blob:https://web.telegram.org/786b19e5-0089-4f51-93d7-c43d5edfa049 "2")

Примеры
Обычное предложение: `Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document.`
2 Предложения: `Nearly all Markdown applications support the basic syntax outlined in the original Markdown design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.`

- Изображения
Для вставки изображения используется url, на каждом слайде обязательное нахождение изображения
советую использовать короткие url, url-ы разделяются точками с запятой.
![3](blob:https://web.telegram.org/052d20c1-9cd6-4a5c-bc5f-6860cc96719a "3")

Примеры
Одно изображение `https://example.ru/one.jpg`
Два изображения, по одному на каждый слайд `https://example.ru/one.jpg; https://example.ru/two.jpg`

- Сохранение
После заполнения формы нажмите кнопку подтверждения, 
сохраняется по пути **`./storage/app.pptx`**

В процессе будет выбор колличества изображений на одном слайде,
добавление изображений с локальных данных,
рефакторинг и улучшение кода.
