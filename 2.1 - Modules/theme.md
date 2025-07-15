# 📦 Тема 2.1 - Модули в Node.js

---

## 🔹 Что такое модули?

В **Node.js** каждый `.js`-файл — это **отдельный модуль**. Это позволяет **разделять код** на независимые части и **повторно использовать** их в других проектах.

> 📌 Node.js использует систему **CommonJS**, а не ES-модули (хотя они тоже поддерживаются).

---

## 🔹 Как экспортировать и импортировать

```javascript
// 📦 example.js
const message = "Привет из модуля!";
module.exports = message;
```

```javascript
// 📥 index.js
const message = require("./example");
console.log(message); // Привет из модуля!
```

> 📌 module.exports — это то, что отдаёт модуль наружу.

---

## 🔹 Что можно экспортировать

```javascript
// Функция
module.exports = function greet(name) {
  return `Привет, ${name}!`;
};

// Объект
module.exports = {
  name: "PixelEditor",
  version: "1.0",
};
```

> 📌 Можно экспортировать всё что угодно: функции, объекты, строки, классы и т.д.

---

## 🔹 Путь к модулю

```javascript
require("./localModule"); // относительный путь
require("../parentModule"); // выше по папке
require("/abs/path/module"); // абсолютный путь
require("express"); // из node_modules
```

> 📌 Node сначала ищет модуль по пути, затем в node_modules.

---

## 🔹 Особенности

Каждый модуль оборачивается в функцию-обёртку:

```javascript
(function(exports, require, module, __filename, __dirname) { ... });
```

Есть переменные:

`__filename` — путь к текущему файлу

`__dirname` — путь к папке текущего файла

---

## 🔹 Альтернативный экспорт (через exports)

```javascript
exports.sayHi = function (name) {
  console.log("Привет, " + name);
};
```

> ⚠️ Нельзя переопределять exports = напрямую, только через module.exports.

---

## 🔹 Импорт JSON

```javascript
const data = require("./data.json");
console.log(data);
```

> 📌 JSON-файл будет автоматически распарсен в объект.

> ❗ Эта тема — практическая. Обязательно попробуй сделать всё своими руками.
