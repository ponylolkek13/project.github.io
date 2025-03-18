// Получаем ссылку на кнопку
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Обработчик события клика на кнопку
if (themeToggle) { // Проверяем, существует ли кнопка на странице
    themeToggle.addEventListener('click', () => {
        // Переключаем класс 'dark-theme' у элемента body
        body.classList.toggle('dark-theme');

        // Сохраняем текущую тему в localStorage (чтобы сохранить выбор пользователя)
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDarkTheme);
    });
}

// Проверяем, сохранена ли темная тема в localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        body.classList.add('dark-theme');
    }
});