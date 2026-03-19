document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("heroSection");
  const cta = document.getElementById("stickyCta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          cta.classList.remove("hidden");
        } else {
          cta.classList.add("hidden");
        }
      });
    },
    {
      root: null,
      threshold: 0,
    }
  );

  observer.observe(hero);
});

/* ACCORDION */
document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = Array.from(document.querySelectorAll(".faq-button"));
  const faqContents = Array.from(document.querySelectorAll(".faq-content"));
  const VISIBLE_COUNT = 4;

  // accordion click
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      content.classList.toggle("hidden");

      // okretanje strelice
      const arrow = btn.querySelector("img");
      if (arrow) arrow.classList.toggle("rotate-90");
    });
  });

  // sakrij sve posle 4.
  for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
    faqButtons[i].classList.add("hidden");
    faqContents[i].classList.add("hidden");
  }

  // SHOW MORE / SHOW LESS
  const showMoreBtn = document.getElementById("faqShowMore");
  if (showMoreBtn) {
    let expanded = false;

    showMoreBtn.addEventListener("click", () => {
      expanded = !expanded;

      for (let i = VISIBLE_COUNT; i < faqButtons.length; i++) {
        faqButtons[i].classList.toggle("hidden");

        faqContents[i].classList.add("hidden");
      }

      showMoreBtn.textContent = expanded ? "Mostrar menos" : "Mostrar mais";
    });
  }
});

/* WINNERS SLIDER – 2 PROMO KARTICE */
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = [
    document.getElementById("winnersGridMobile"),
    document.getElementById("winnersGridDesktop"),
  ].filter(Boolean);
  if (!wrappers.length) return;
  const cards = [
    {
      id: "sport",
      title: "100% de freebet nas ligas",
      text: "Faça uma aposta com saldo real acima de R$5,00 e ganhe 100% de freebet no seu primeiro bilhete nas ligas selecionadas: Brasileirão Série A, Brasileirão Série B, Inglaterra Premier League ou Espanha La Liga. Consulte T&C",
      img: "./assets/img/100_freebets.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/promo/ca/category/1413/page/37413"
    },
    {
      id: "sport",
      title: "Pagamento antecipado",
      text: "De acordo com a modalidade esportiva escolhida, sua aposta será vencedora assim que o time abrir uma vantagem, independentemente do resultado final da partida! Consulte T&C",
      img: "./assets/img/pagamentoantecipado.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/ca/esportes/early-payout/futebol"

    },
    {
      id: "sport",
      title: "Cashback diário ",
      text: "Receba cashback diariamente conforme sua atividade e nível dentro da plataforma. Os valores são definidos de forma personalizada, de acordo com o seu nível de atividade (GGR) nos últimos 6 meses. Consulte T&C",
      img: "./assets/img/cashback.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/promo/ca/category/1421/page/38457"

    },
    {
      id: "sport",
      title: "R$30 de freebet ",
      text: "Teve perdas em eventos esportivas durante a semana? A gente te dá uma segunda chance! Clientes ativos na plataforma recebem uma freebet de R$30,00 todo final de semana. Consulte T&C",
      img: "./assets/img/30freebet.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/promo/ca/category/1413/page/37196"

    },
    {
      id: "sport",
      title: "150% de bônus",
      text: "Ganhe até 150% de bônus em suas seleções para aumentar seus lucros. Quanto mais eventos incluir em sua aposta, maior será o seu bônus. Consulte T&C",
      img: "./assets/img/150bonus.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/promo/ca/category/1413/page/37188"

    },
    {
      id: "sport",
      title: "Bet boost",
      text: "A Meridianbet utiliza inteligência artificial e análise de mercado para oferecer as odds mais competitivas, assim, você potencializa seus ganhos com cotações aumentadas. Consulte T&C",
      img: "./assets/img/betBoost.png",
      alt: "Promo Sport",
       gradientDesk: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      gradient: "bg-[linear-gradient(180deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.15)_100%)]",
      link:"https://meridianbet.bet.br/ca/esportes"

    },
  ];

  function renderInto(wrapper) {
    wrapper.innerHTML = "";
    cards.forEach((card) => {
      const slide = document.createElement("div");
      slide.className =
        "swiper-slide flex items-stretch justify-center px-1 md:px-2";
      slide.innerHTML =  `
  <a href="${card.link}" target="_blank" class="block w-full">
    <div
      class="relative overflow-hidden w-full
             min-h-[140px] sm:min-h-[180px] md:min-h-[250px]
             rounded-[20px]
             px-4 py-4 md:px-8 md:py-4
             ${card.gradientDesk ? `md:${card.gradientDesk}` : ""}
             bg-gradient-to-br ${card.gradient}
             flex items-start sm:items-center gap-3 md:gap-6 border border-[#D9A445]/50" style="background: linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.15) 100%);"
    >
      <!-- TEXT -->
      <div class="relative z-[2] text-left max-w-[60%] sm:max-w-none flex-1">
        <p class="font-bold uppercase text-[20px] sm:text-[22px] text-[#d9a445] leading-tight">
          ${card.title}
        </p>
        <p class="mt-2 text-[12px] sm:text-[14px] leading-[1.35] text-[#fff]">
          ${card.text}
        </p>
      </div>

      <!-- DESKTOP IMAGE -->
      <div class="flex-shrink-0 hidden sm:block ${card.id}">
        <img
          src="${card.img}"
          alt="${card.alt}"
          class="
            object-contain
            ${card.id === "cassino"
              ? "w-[190px] md:w-[220px] lg:w-[250px]"
              : "w-[180px] md:w-[200px] lg:w-[220px]"
            }
          "
        />
      </div>

      <!-- MOBILE IMAGE -->
      <img
        src="${card.img}"
        alt="${card.alt}"
        class="sm:hidden absolute right-[-10px] bottom-[-6px]
               w-[140px] h-[120px] object-contain z-[1]"
        loading="lazy"
        decoding="async"
      />
    </div>
  </a>
`;
      wrapper.appendChild(slide);
    });
  }

  wrappers.forEach(renderInto);

  const swiperOpts = {
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    breakpoints: {
      0: { slidesPerView: 1, allowTouchMove: true },
      640: { slidesPerView: 1.2, allowTouchMove: true },
      1024: { slidesPerView: 2, allowTouchMove: true },
    },
  };

  if (document.querySelector(".winners-swiper-mobile")) {
    new Swiper(".winners-swiper-mobile", swiperOpts);
  }
  if (document.querySelector(".winners-swiper-desktop")) {
    new Swiper(".winners-swiper-desktop", swiperOpts);
  }
});

/*SPORTS SLIDER*/
(function () {
  const marquee = document.querySelector(".sports-marquee");
  const track = document.querySelector("#sportsTrack");
  const sets = track?.querySelectorAll(".sports-set");
  if (!marquee || !track || !sets || sets.length < 2) return;

  let x = 0;
  let speed = 0.6;

  function getShift() {
    return sets[1].offsetLeft;
  }

  let shift = getShift();

  function tick() {
    x -= speed;

    if (-x >= shift) x += shift;

    track.style.transform = `translateX(${x}px)`;
    raf = requestAnimationFrame(tick);
  }

  let raf = requestAnimationFrame(tick);

  // pauza na hover
  marquee.addEventListener("mouseenter", () => cancelAnimationFrame(raf));
  marquee.addEventListener(
    "mouseleave",
    () => (raf = requestAnimationFrame(tick))
  );

  window.addEventListener("resize", () => {
    shift = getShift();
  });
})();

/*FOOTER SLIDER*/

function autoSlide(sliderContainer) {
  const wrapper = sliderContainer.querySelector(".slider-wrapper");
  const slides = sliderContainer.querySelectorAll(".slider-slide");

  // Ako nema ili je samo jedan slajd, ne pokreći auto klizanje
  if (!wrapper || slides.length < 2) {
    // centriraj statični jedan logo
    sliderContainer.classList.add("is-static");
    return;
  }

  const slideWidth = slides[0].offsetWidth;
  let currentPosition = 0;

  function moveSlides() {
    currentPosition -= 1;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth) {
      currentPosition = 0;
      wrapper.style.transition = "none";
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(${currentPosition}px)`;
      requestAnimationFrame(() => (wrapper.style.transition = ""));
    }
  }

  setInterval(moveSlides, 30);
}

// pokreni za sve, ali funkcija će sama isključiti gde treba
document.querySelectorAll(".slider-container").forEach(autoSlide);

(function () {
  const ua = navigator.userAgent.toLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua); // svi iOS browseri
  const isMacSafari =
    /macintosh/.test(ua) &&
    /safari/.test(ua) &&
    !/chrome|chromium|edg/.test(ua);

  if (isIOS || isMacSafari) {
    document.documentElement.classList.add("no-hero-bg");
  }
})();
