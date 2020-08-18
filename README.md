# Тестовое задание по верстке + React 

#### 1.  Инициировать проект на React (можно использовать Create React App) 
#### 2.  Сделать страницу авторизации, на которой запрашивается Логин и Пароль
#### 3.  При вводе логина и пароля: 
  - по логину запросить аватар пользователя с Github 
  - пароль проверить на то, чтобы было не менее 8 символов, хотя бы 1 
прописная латинская буква, хотя бы 1 прописная латинская буква, хотя бы 1 
цифра. 
Пропускать далее, только если имеется такой пользователь на Gitgub и пароль прошел проверку. 
#### 4.  Реализовать адаптивный сайдбар в виде отдельного компонента, 
который не должен перерисовываться с переходом по страницам: 
Сверху аватар пользователя, полученный с Github 
По центру 2 ссылки Терминалы и Клиенты 
В футере сайдбара Copyright © 2020 
#### 5.  Реализовать 3 маршрута: 
/terminals 
/buyers 
/buyers/id 
#### 6.  Страница Терминалы 
Необходимо сделать поля ввода «Название терминала», «Описание» и 
кнопку «Добавить» 
После ввода названия, Терминал должен отобразиться ниже в таблице 
Список терминалов с кнопкой «Удалить» 
#### 7.  Страница Покупатели 
Отобразить таблицу «Покупатели»: 
- ID покупателя
- Имя покупателя
- Средний чек
- Количество покупок
- Общая выручка

Заполнить из массива 15-ю любыми значениями (минимум 2-3 одинаковых 
имени для фильтра). 

В таблице должна быть сортировка по столбцам Средний чек, Количество 
Покупок и Общая выручка, фильтр по столбцу Имя. 

Возможность отобразить по 5, 10 или 15 покупателей. Если выбран режим 5, 
то должна быть пагинация.

ID покупателя должен быть кликабельным с переходом на маршрут /buyers/id 
#### 8.  Страница Покупатель 
Необходимо отобразить данные из таблицы по покупателю с таким ID 
#### 9.  Страница 404 
На остальных маршрутах сделать страницу-заглушку с ошибкой 404 
#### 10.  Страницы оформить по своему усмотрению.  
Рекомендуется использовать функциональные компоненты и React-хуки. Результаты выложить на Github.