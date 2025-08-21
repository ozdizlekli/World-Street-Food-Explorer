// 1) Menü verisi
const menu = [
  {
    id: 1,
    title: "Tacos",
    country: "Mexico",
    price: 5.99,
    img: "images/images.jpeg",
    desc: "Mısır ekmeği içinde et, sebze ve soslarla servis edilen lezzet.",
    history: "Aztek döneminden bu yana Meksika sokak mutfağının simgesi."
  },
  {
    id: 2,
    title: "Elote",
    country: "Mexico",
    price: 3.5,
    img: "images/images1.jpeg",
    desc: "Izgara mısır, üzerine peynir, acı sos ve lime suyu.",
    history: "Meksika’da özellikle festival ve sokaklarda popüler."
  },
  {
    id: 3,
    title: "Pad Thai",
    country: "Thailand",
    price: 7.99,
    img: "images/tayland-yemek-pad-thai.jpg",
    desc: "Tavada kızarmış erişte, karides, yumurta ve özel soslarla.",
    history: "1930’larda Tayland mutfağının ulusal yemeği olarak tanıtıldı."
  },
  {
    id: 4,
    title: "Som Tam",
    country: "Thailand",
    price: 4.99,
    img: "images/somtam.webp",
    desc: "Yeşil papaya salatası, acı ve ekşi soslarla.",
    history: "Tayland’ın kuzeydoğusundan dünyaya yayılan sokak salatası."
  },
  {
    id: 5,
    title: "Baklava",
    country: "Turkey",
    price: 6.0,
    img: "images/images3.jpeg",
    desc: "Kat kat hamur, fıstık ve şerbetle yapılan tatlı.",
    history: "Osmanlı saray mutfağının gözde tatlısı."
  },
  {
    id: 6,
    title: "Simit",
    country: "Turkey",
    price: 1.5,
    img: "images/images4.jpeg",
    desc: "Susam kaplı yuvarlak ekmek halkası.",
    history: "İstanbul’un en ikonik sokak yiyeceği."
  },
  {
    id: 7,
    title: "Takoyaki",
    country: "Japan",
    price: 6.5,
    img: "images/takoyaki.jpg",
    desc: "Ahtapot parçalarıyla yapılan yuvarlak hamur topları.",
    history: "Osaka’nın sokak mutfağından dünyaya yayıldı."
  },
  {
    id: 8,
    title: "Onigiri",
    country: "Japan",
    price: 3.99,
    img: "images/onigiri.jpg",
    desc: "Pirinç üçgenleri, nori yosununa sarılı.",
    history: "Japonya’da en pratik sokak atıştırmalığı."
  },
  {
    id: 9,
    title: "Bánh Mì",
    country: "Vietnam",
    price: 5.5,
    img: "images/banhmi.webp",
    desc: "Fransız baget ekmeği içinde Asya usulü sandviç.",
    history: "Vietnam’da Fransız etkisiyle ortaya çıkmış bir lezzet."
  },
  {
    id: 10,
    title: "Phở",
    country: "Vietnam",
    price: 8.5,
    img: "images/pho.jpeg",
    desc: "Et suyu ile hazırlanan erişteli çorba.",
    history: "Vietnam’ın en bilinen sokak yemeği, sabah kahvaltısında bile yenir."
  },
  {
    id: 11,
    title: "Churros",
    country: "Spain",
    price: 4.0,
    img: "images/churros.jpeg",
    desc: "Kızarmış hamur tatlısı, şeker ve çikolata sos ile.",
    history: "İspanyol kahvaltılarının ve sokak mutfağının yıldızı."
  },
  {
    id: 12,
    title: "Paella Bites",
    country: "Spain",
    price: 6.5,
    img: "images/paella.jpeg",
    desc: "Minik porsiyonlarda deniz ürünlü pilav.",
    history: "Valencia’nın geleneksel paellasının sokak versiyonu."
  },
  {
    id: 13,
    title: "Falafel",
    country: "Lebanon",
    price: 5.0,
    img: "images/falafel.jpeg",
    desc: "Nohut köftesi, lavaş ekmeğinde sebzelerle.",
    history: "Orta Doğu’nun en yaygın sokak yiyeceklerinden biri."
  },
  {
    id: 14,
    title: "Shawarma",
    country: "Lebanon",
    price: 6.0,
    img: "images/shawarma.jpeg",
    desc: "Baharatlı et, lavaş içinde sebzelerle.",
    history: "Türk dönerinden esinlenerek dünyaya yayıldı."
  },
  {
    id: 15,
    title: "Poutine",
    country: "Canada",
    price: 7.0,
    img: "images/poutine.webp",
    desc: "Patates kızartması üzerine gravy sos ve peynir.",
    history: "Quebec bölgesinin ikonik sokak yiyeceği."
  },
  {
    id: 16,
    title: "Hot Dog",
    country: "USA",
    price: 4.5,
    img: "images/hotdog.jpeg",
    desc: "Sosisli sandviç, ketçap ve hardalla.",
    history: "Amerikan sokak yiyeceklerinin klasikleşmiş hali."
  },
  {
    id: 17,
    title: "Arepa",
    country: "Colombia",
    price: 4.0,
    img: "images/arepa.jpeg",
    desc: "Mısır ekmeği, peynir veya et dolgulu.",
    history: "Kolombiya ve Venezuela’nın en sevilen sokak lezzeti."
  },
  {
    id: 18,
    title: "Empanada",
    country: "Argentina",
    price: 3.5,
    img: "images/empanada.avif",
    desc: "Hamur içinde et veya sebze dolgulu börek.",
    history: "İspanyol mutfağından Latin Amerika’ya uyarlanmış."
  },
  {
    id: 19,
    title: "Currywurst",
    country: "Germany",
    price: 5.5,
    img: "images/currywurst.avif",
    desc: "Sosis, ketçap ve köri baharatıyla.",
    history: "Berlin’in en popüler sokak yiyeceklerinden."
  },
  {
    id: 20,
    title: "Pretzel",
    country: "Germany",
    price: 2.5,
    img: "images/pretzel.jpeg",
    desc: "Tuzlu ve düğüm şekilli hamur.",
    history: "Alman sokaklarında atıştırmalık olarak satılır."
  },
];

  
  // 2) DOM seçiciler
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  // Arama kutusu ekleyelim
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Search food...";
  searchBox.classList.add("form-control", "my-3");
  btnContainer.after(searchBox);
  
  // Favoriler listesi (localStorage)
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  // 3) Sayfa yüklendiğinde
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayCountryButtons();
    showPriceStats(menu);
  });
  
  // 4) Menü öğelerini gösterme
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `
        <article class="menu-item col-md-6">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            <button class="btn btn-sm btn-outline-primary" onclick="showHistory('${item.history}')">History</button>
            <button class="btn btn-sm btn-warning" onclick="toggleFavorite(${item.id})">
              ${favorites.includes(item.id) ? "★ Favorited" : "☆ Favorite"}
            </button>
          </div>
        </article>
      `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
  
  // 5) Dinamik ülke butonları
  function displayCountryButtons() {
    const countries = menu.reduce(
      (values, item) => {
        if (!values.includes(item.country)) {
          values.push(item.country);
        }
        return values;
      },
      ["All"]
    );
  
    const countryBtns = countries
      .map((country) => {
        return `<button class="btn btn-outline-dark filter-btn" data-country=${country}>${country}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = countryBtns;
  
    const filterBtns = document.querySelectorAll(".filter-btn");
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const country = e.currentTarget.dataset.country;
        const menuCountry = country === "All" ? menu : menu.filter((item) => item.country === country);
        displayMenuItems(menuCountry);
        showPriceStats(menuCountry);
      });
    });
  }
  
  // 6) Arama fonksiyonu
  searchBox.addEventListener("keyup", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMenu = menu.filter((item) => item.title.toLowerCase().includes(searchTerm));
    displayMenuItems(filteredMenu);
    showPriceStats(filteredMenu);
  });
  
  // 7) Favorilere ekleme
  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter((fav) => fav !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayMenuItems(menu);
  }
  
  // 8) Fiyat istatistikleri (reduce ile)
  function showPriceStats(menuItems) {
    if (menuItems.length === 0) {
      document.querySelector(".stats")?.remove();
      return;
    }
    const total = menuItems.reduce((sum, item) => sum + item.price, 0);
    const avg = (total / menuItems.length).toFixed(2);
    const min = Math.min(...menuItems.map((i) => i.price));
    const max = Math.max(...menuItems.map((i) => i.price));
  
    let statsDiv = document.querySelector(".stats");
    if (!statsDiv) {
      statsDiv = document.createElement("div");
      statsDiv.classList.add("stats", "alert", "alert-info", "mt-3");
      sectionCenter.before(statsDiv);
    }
    statsDiv.innerHTML = `Average: $${avg} | Min: $${min} | Max: $${max}`;
  }
  
  // 9) Kültürel bilgi modalı
  function showHistory(text) {
    const modal = document.createElement("div");
    modal.classList.add("modal", "fade", "show");
    modal.style.display = "block";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content p-3">
          <h5>History</h5>
          <p>${text}</p>
          <button class="btn btn-sm btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  