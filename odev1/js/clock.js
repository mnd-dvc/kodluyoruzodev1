function askName() {
    let name = prompt("Adın Ne");
  
    name != ""
      ? ((document.querySelector("#myName").innerHTML = name), window.onload()) //window.onload sayfanın hazır olduğunu ve artık işlem yapabileceğini gösterir.
      : alert("Lütfen Adınızı Giriniz !"),
      window.location.reload();
  }

function showTime() {
    var date = new Date();
    var h = date.getHours(); // Saat bilgisini verir (0-23)
    var m = date.getMinutes(); // Dakika bilgisin verir (0-59)
    var s = date.getSeconds(); // Saniye bilgisini verir (0-59)
    var day = date.getDay(); // Haftanın gününü verir (0-6)
  
    if (day == 1) {
      day = "Pazartesi";
    } else if (day == 2) {
      day = "Salı";
    } else if (day == 3) {
      day = "Çarşamba";
    } else if (day == 4) {
      day = "Perşembe";
    } else if (day == 5) {
      day = "Cuma";
    } else if (day == 6) {
      day = "Cumartesi";
    } else if (day == 7) {
      day = "Pazar";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + day;
    // document.getElementById("myClock").innerHTML = time;
    // document.getElementById("myClock").innerHTML = time;
   
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(showTime, 1000); // Kullanımı kolay ve önemli bir JavaScript fonksiyonu olan setTimeout() bir işlemin-fonksiyonun belli bir süre sonunda çalışmasını sağlar.

    // setTimeout(fonksiyonAdi, msSure); Örnek kullanımda fonksiyonAdi parametresine çalışmasını istediğimiz fonksiyonu, msSure parametresine ise fonksiyonun ne kadar süre sonra çalışacağı milisaniye olarak belirtiyoruz(1000 ms = 1 saniye).
  }
  showTime();
  askName();
  