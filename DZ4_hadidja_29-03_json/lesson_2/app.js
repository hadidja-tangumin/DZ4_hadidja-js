// Создаем новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// Настраиваем запрос на получение данных из JSON файла
xhr.open("GET", "data.json", true);

// Устанавливаем обработчик события загрузки
xhr.onload = function () {
    // Проверяем, что статус ответа сервера равен 200 (OK)
    if (xhr.status === 200) {
        // Парсим полученные данные в JavaScript объект
        var data = JSON.parse(xhr.responseText);

        // Выводим данные в консоль
        console.log(data);
    } else {
        console.error("Произошла ошибка при загрузке файла.");
    }
};

// Устанавливаем обработчик ошибки
xhr.onerror = function () {
    console.error("Произошла ошибка при выполнении запроса.");
};

// Отправляем запрос на сервер
xhr.send();
