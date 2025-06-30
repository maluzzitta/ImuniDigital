document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Tema Claro/Escuro (Mantida) ---
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        themeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', theme);
        });
    }

    // --- NOVO: Lógica para alternar Formulário de Login e Cadastro ---
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showLoginBtn = document.getElementById('show-login');
    const showRegisterBtn = document.getElementById('show-register');

    if (loginForm && registerForm && showLoginBtn && showRegisterBtn) {
        // Estado inicial: mostrar login
        showLoginBtn.classList.add('active');
        registerForm.style.display = 'none';

        showLoginBtn.addEventListener('click', () => {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            showLoginBtn.classList.add('active');
            showRegisterBtn.classList.remove('active');
        });

        showRegisterBtn.addEventListener('click', () => {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            showRegisterBtn.classList.add('active');
            showLoginBtn.classList.remove('active');
        });
    }
});