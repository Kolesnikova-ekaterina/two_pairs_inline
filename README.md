<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Парные карты — Веб-приложение на React</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap');

    body {
      background: #121212;
      color: #eee;
      font-family: 'Georgia', serif;
      padding: 50px 20px;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 720px;
      margin: 0 auto;
      background: #1c1c1c;
      border: 2px solid #4b4b4b;
      border-radius: 16px;
      padding: 40px 50px;
      box-shadow: 0 0 30px #440000aa;
    }
    h1, h2 {
      font-family: 'UnifrakturCook', cursive;
      text-align: center;
      color: #bb0000;
      text-shadow:
        2px 2px 4px #330000,
        0 0 10px #ff0000cc;
      margin-bottom: 0.5em;
    }
    h1 {
      font-size: 3.2rem;
      margin-top: 0;
    }
    h2 {
      font-size: 2rem;
      margin-top: 2.5em;
      border-bottom: 2px solid #660000;
      padding-bottom: 0.3em;
      margin-bottom: 1em;
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
    p, li {
      font-size: 1.1rem;
      color: #ddd;
    }
    ul, ol {
      margin-left: 1.4em;
    }
    ul li, ol li {
      margin-bottom: 0.7em;
    }
    .feature-list li {
      padding-left: 0.5em;
      position: relative;
    }
    .feature-list li::before {
      content: "✦";
      color: #bb0000;
      position: absolute;
      left: -1.2em;
      font-weight: bold;
    }
    .screenshot {
      display: block;
      margin: 30px auto;
      border-radius: 12px;
      border: 3px solid #660000;
      box-shadow: 0 0 20px #bb0000cc;
      max-width: 100%;
      width: 420px;
    }
    code {
      background: #330000;
      color: #ff9999;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 1rem;
      font-family: 'Courier New', Courier, monospace;
    }
    a {
      color: #ff4444;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    .author {
      margin-top: 3em;
      font-size: 1rem;
      color: #aa4444;
      text-align: right;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Парные карты</h1>
    <p>
      <strong>Это веб‑приложение для подбора парных карт,</strong> созданное на <b>JavaScript</b> и <b>React</b>.<br />
      Тренируйте память, находите пары и погружайтесь в атмосферу сказок!
    </p>


    <h2>Скриншот</h2>
    <img src="screenshots/1.jpg" alt="Скриншот приложения" class="screenshot" />

    <h2>Запуск проекта</h2>
    <ol>
      <li>Клонируйте репозиторий:<br />
        <code>git clone https://github.com/your-username/your-repo.git</code>
      </li>
      <li>Установите зависимости:<br />
        <code>npm install</code>
      </li>
      <li>Запустите приложение:<br />
        <code>npm start</code>
      </li>
      <li>Откройте <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> в браузере.</li>
    </ol>


    <div class="author">
      Автор: <a href="https://github.com/Kolesnikova-ekaterina">Kolesnikova-ekaterina</a>
    </div>
  </div>
</body>
</html>
