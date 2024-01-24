let num1 = +prompt("İlk sayiyi girin");
let islem = prompt("( +, -, *, / ):");
let num2 = +prompt("İkinci sayiyi girin");
if (islem == "+") {
  sonuc = (num1 + num2);
} else if (islem == "-") {
  sonuc = (num1 - num2);
} else if (islem == "*") {
  sonuc = (num1 * num2);
} else if (islem == "/") {
  sonuc = (num1 / num2);
}
else{
  sonuc = alert("hatali giris yapildi");
}

console.log(alert("Sonuc:"+ sonuc));



