let password;

do {
  password = prompt("Введите пароль:");
  if (password === null) break;

} while (password !== "12345");
if (password === "12345") {
  alert("Доступ разрешен");
}
