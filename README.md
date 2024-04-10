<!-- @format -->

Learn Lingo

Добро пожаловать в мой проект! Здесь я опишу, как начать работу с проектом и его основные функции.

## Установка

1. Клонируйте репозиторий на локальную машину:

git clone https://github.com/BishopNik/LearnLingo.git

2. Перейдите в директорию проекта:

cd your-project-folder

3. Установите зависимости:

npm install

## Запуск

Чтобы запустить проект, выполните следующую команду:

npm start

## Основные функции

Данное приложение предназначено для подбора учителей для изучения иностранного языка.

## Используемые технологии

1. React
2. React-DOM
3. React-Router-DOM
4. Firebase
5. Formik
6. Yup
7. Webpack

## База данных

Этот проект использует Firebase Realtime Database для хранения данных. Firebase Realtime Database - это гибкая и масштабируемая облачная база данных в реальном времени, которая позволяет хранить и синхронизировать данные между вашими клиентами в реальном времени.

### Конфигурация

Для подключения к базе данных Firebase требуется инициализирующий код и другие настройки, необходимые для подключения к вашему проекту Firebase.

```javascript
// Пример конфигурации Firebase

const firebaseConfig = {
  apiKey: "ВАШ_КЛЮЧ_API",
  authDomain: "ВАШ_ДОМЕН",
  databaseURL: "URL_ВАШЕЙ_БАЗЫ_ДАННЫХ",
  projectId: "ВАШ_ID_ПРОЕКТА",
  storageBucket: "BUCKET_ХРАНЕНИЯ",
  messagingSenderId: "ID_ОТПРАВИТЕЛЯ_СООБЩЕНИЙ",
  appId: "ВАШ_ID_ПРИЛОЖЕНИЯ"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

Пример объекта Teacher:

{
		"uid": "JohnDoe",
		"name": "John",
		"surname": "Doe",
		"languages": ["English", "Spanish"],
		"levels": [
			"A1 Beginner",
			"A2 Elementary",
			"B1 Intermediate",
			"B2 Upper-Intermediate",
			"C1 Advanced",
			"C2 Proficient"
		],
		"rating": 4.5,
		"reviews": [
			{
				"reviewer_name": "Alice",
				"reviewer_rating": 5,
				"comment": "John is an excellent teacher! I highly recommend him."
			},
			{
				"reviewer_name": "Bob",
				"reviewer_rating": 4,
				"comment": "John is very knowledgeable and patient. I enjoyed his classes."
			}
		],
		"price_per_hour": 25,
		"lessons_done": 1375,
		"avatar_url": "https://ftp.goit.study/img/avatars/1.jpg",
		"lesson_info": "The lessons focus on improving speaking and listening skills through interactive activities and discussions.",
		"conditions": [
			"Teaches only adult learners (18 years and above).",
			"Flexible scheduling options available."
		],
		"experience": "John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels."
	}

```

## Авторизация

Авторизация в этом проекте реализована с использованием Firebase Authentication. Firebase Authentication предоставляет простые способы аутентификации пользователей с помощью электронной почты и пароля, номеров телефонов, а также социальных сетей, таких как Google, Facebook и других.

## Конфигурация Firebase

Для использования Firebase Authentication необходимо настроить Firebase SDK и проект в консоли Firebase. Убедитесь, что вы добавили настройки проекта Firebase в ваше приложение.

### Провайдеры аутентификации

В нашем проекте поддерживаются следующие провайдеры аутентификации:

Электронная почта и пароль

### Сохранение настроек пользователей в Cloud Firestore

Настройки пользователей сохраняются в Cloud Firestore. Firebase Cloud Firestore - это гибкая, масштабируемая база данных, которая удобно интегрируется с Firebase. Она предоставляет возможность хранить и организовывать данные вашего приложения в древовидной структуре коллекций и документов. Данные, которые сохраняются для пользователя, - это цветовая политра и избранные учителя.

```javascript
{
  "color": "(number)",
  "likedTeachers": [
    { "id": "(number)" }
  ]
}
```

## Фильтр

Фильтрация происходит по уже загруженным учителям по трем категориям: по языку, уровень языка и цене.

## Избранное

Любого из понравившихся учителей можно добавить в избранное. Список избранных учителей сохраняется в Cloud Firestore. Данные сохраняются в виде массива.

```javascript
{
  "color": "(number)",
  "likedTeachers": [
    { "id": "(number)" }
  ]
}
```

## Контакт

Если вас интересует дополнительная информация, пожалуйста, напишите письмо по адресу a.nikanorov@gmail.com.

```

```
