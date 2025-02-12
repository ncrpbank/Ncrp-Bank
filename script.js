document.addEventListener('DOMContentLoaded', function() {
    function showLogin() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }

    function showRegister() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        
        if (localStorage.getItem(username)) {
            alert('Benutzername existiert bereits!');
        } else {
            localStorage.setItem(username, password);
            alert('Registrierung erfolgreich! Jetzt anmelden.');
            showLogin();
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const storedPassword = localStorage.getItem(username);
        
        if (storedPassword && storedPassword === password) {
            alert('Anmeldung erfolgreich!');
        } else {
            alert('Falscher Benutzername oder Passwort!');
        }
    });

    window.showLogin = showLogin;
    window.showRegister = showRegister;
});
