
function showPhone() {
    alert("наш телефон: блаблабла");
}

function showEmail() {
    alert("наша пошта: бебебе@gmail.com");
}

function showTelegram() {
    alert("наш Telegram: @блаблабла");
}

function showDate() {
    let today = new Date(); 
    let dateString = today.toLocaleDateString("uk-UA"); 
    alert("Сьогоднішня дата: " + dateString + ". Гарного та спокійного дня!");
}