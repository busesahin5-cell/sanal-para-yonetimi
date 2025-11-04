function baslat() {
  alert("Sisteme hoş geldiniz!");

  let bakiye = 1000;
  let secim;
  let miktar;

  do {
    secim = prompt(
      "Lütfen yapmak istediğiniz işlemi seçin:\n\n" +
      "1 - Para Yatır\n" +
      "2 - Para Çek\n" +
      "3 - Bakiye Görüntüle\n" +
      "4 - Çıkış"
    );

    switch (secim) {
      case "1":
        miktar = Number(prompt("Yatırmak istediğiniz miktarı girin:"));
        if (miktar > 0) {
          bakiye += miktar;
          alert("Para yatırıldı! Yeni bakiyeniz: " + bakiye + " TL");
        } else {
          alert("Geçersiz miktar!");
        }
        break;

      case "2":
        miktar = Number(prompt("Çekmek istediğiniz miktarı girin:"));
        if (miktar <= bakiye && miktar > 0) {
          bakiye -= miktar;
          alert("Para çekildi! Kalan bakiyeniz: " + bakiye + " TL");
        } else if (miktar > bakiye) {
          alert("Yetersiz bakiye!");
        } else {
          alert("Geçersiz miktar!");
        }
        break;

      case "3":
        alert("Mevcut bakiyeniz: " + bakiye + " TL");
        break;

      case "4":
        alert("Çıkış yapılıyor...");
        break;

      default:
        alert("Geçersiz seçim! Lütfen 1-4 arasında bir sayı girin.");
    }
  } while (secim !== "4");

  document.getElementById("bilgi").innerText =
    "Program sonlandı. Son bakiyeniz: " + bakiye + " TL";
}
