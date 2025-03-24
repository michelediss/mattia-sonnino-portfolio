<template>
  <div class="font-secondary">
    <!-- Sezione hero: Carousel -->
    <section
      id="hero"
      ref="hero"
      class="z-0 h-screen flex flex-col bg-cover bg-center relative"
    >
      <!-- Layer per il crossfade -->
      <div
        ref="bg1"
        class="hero-bg absolute top-0 left-0 w-full h-full"
        :style="{ backgroundImage: `url(${images[0]})` }"
      ></div>
      <div
        ref="bg2"
        class="hero-bg absolute top-0 left-0 w-full h-full"
        style="opacity: 0;"
      ></div>

      <div id="overlay" class="w-full h-full bg-black opacity-50 absolute z-10"></div>

      <div class="z-20 h-full flex flex-col">
        <div id="header" class="pt-6 pb-32">
          <div id="name">
            <h1 class="px-8 text-slate-50 opacity-75 text-xl font-heading font-bold">
              Mattia Sonnino
            </h1>
          </div>
          <div id="separator" class="h-0.5 bg-slate-50 opacity-75 my-2"></div>
          <div id="subheader" class="columns-2">
            <div id="job">
              <p class="px-8 text-slate-50 opacity-75 text-base font-paragraph">
                actor
              </p>
            </div>
            <div id="booking" class="text-right">
              <p class="px-8 text-slate-50 opacity-75 text-base font-paragraph">
                booking:
                <a target="_blank" href="#">UK</a>
                <span> / </span>
                <a
                  target="_blank"
                  href="https://www.donatellafranciosi.com/portfolio/mattia-sonnino/"
                >
                  IT
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          id="info"
          class="columns-2 mt-auto pt-16 pb-8 flex justify-between items-end opacity-75"
        >
          <div id="arrow" ref="arrow" class="cursor-pointer pl-8">
            <i class="lni lni-arrow-down text-3xl text-slate-50"></i>
          </div>
          <div id="social" class="pr-8 text-slate-50 text-right">
            <a target="_blank" href="https://www.instagram.com/mattiasonnino/">
              <i class="lni lni-instagram ml-6"></i>
            </a>
            <a target="_blank" href="https://www.imdb.com/name/nm12089020/">
              <i class="lni lni-imdb ml-6"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mattia-sonnino-12bb84120/?originalSubdomain=it"
            >
              <i class="lni lni-linkedin ml-6"></i>
            </a>
            <a target="_blank" href="https://www.youtube.com/@mattia070990">
              <i class="lni lni-youtube ml-6"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione about: Immagine del profilo -->
    <section id="about" class="py-24 px-8 flex justify-center bg-slate-50">
      <div class="block md:flex w-full lg:w-10/12">
        <div id="profile-pic-col" class="flex justify-center pr-0 md:pr-4 pb-16 lg:pr-16 w-full md:w-2/5">
          <div class="w-full md:w-10/12">
            <img src="/img/profile/mattia-sonnino-36-square.jpg" alt="profile-pic" id="profile-pic" class="rounded-full shadow-xl">
          </div>
        </div>

        <div id="about-col" class="w-full md:w-3/5">
          <div id="about-1">
            <div>
              <h2 class="inline text-xl font-heading text-slate-600">bio</h2>
            </div>
            <p class="text-base pt-2 text-gray-400 font-paragraph">
              I was born in Rome and grew up in Brighton, England, from the age of two. I am an actor and writer, fluent in both Italian and English.
              I graduated from the East 15 Acting School in London in 2018 and currently live and work in both Italy and the UK.
            </p>
          </div>

          <div class="h-4"></div>

          <div id="about-2">
            <div>
              <h2 class="inline text-xl font-heading text-slate-600">career</h2>
            </div>
            <p class="text-base pt-2 text-gray-400 font-paragraph">
              In theater, I've had the opportunity to collaborate with Quandary Collective, with whom I staged Richard II, performing a UK tour.
              At the Globe Theatre in Rome, I participated in a showcase for emerging theatre companies, staging Macbeth in English.
              For television, I've been directed by Mauro Aragoni, Brian O’malley, Nzingha Stewart, Alex Graves, Stephen Scaia, Niclas Bendixen,
              and Sara Petraglia and Giulia Steigerwalt.
            </p>
          </div>
          <div class="h-12 md:h-16"></div>

          <div>
            <p id="port" ref="port" class="block md:inline mr-16 text-lg font-heading text-slate-600 cursor-pointer font-bold underline">
              GO TO PORTFOLIO
            </p>
            <a href="/cv/mattia-sonnino-cv_mar-2024.pdf" target="_blank" id="cv" class="block mt-4 md:mt-0 md:inline text-lg font-heading text-slate-600 font-bold underline">
              READ CURRICULUM VITAE
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione video: Primo video da /img/video -->
    <section id="video" class="bg-slate-300">
      <div class="video-container py-12 px-6 flex justify-center">
        <video class="rounded-lg" controls>
          <source src="/img/video/showreel-mattia-sonnino.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- Sezione gallery: Immagini della cartella /img/gallery -->
    <section class="bg-slate-200">
      <div class="columns-2 md:columns-3 lg:columns-4 gap-0">
        <!-- Colonna 1 -->
        <div>
          <img src="/img/gallery/mattia-sonnino-1.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-10.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-11.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-12.jpg" alt="">
        </div>
        <!-- Colonna 2 -->
        <div>
          <img src="/img/gallery/mattia-sonnino-20.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-21.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-22.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-23.jpg" alt="">
        </div>
        <!-- Colonna 3 -->
        <div>
          <img src="/img/gallery/mattia-sonnino-30.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-31.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-32.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-33.jpg" alt="">
        </div>
        <!-- Colonna 4 -->
        <div>
          <img src="/img/gallery/mattia-sonnino-40.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-41.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-42.jpg" alt="">
          <img src="/img/gallery/mattia-sonnino-43.jpg" alt="">
        </div>
      </div>
    </section>

    <!-- Sezione contatti -->
    <section class="px-8 pt-24 pb-12 bg-slate-200">
      <p class="text-center text-base text-slate-600 font-paragraph">
        write me at <br class="block lg:hidden">
        <a href="mailto:hello@mattiasonnino.com">
          <span class="h1 pl-1 text-lg md:text-2xl font-heading text-viola">
            hello@mattiasonnino.com
          </span>
        </a>
      </p>
      <p class="pt-6 md:pt-4 text-center text-base text-slate-600 font-paragraph">
        booking at <br class="block lg:hidden">
        <a href="mailto:segreteria@donatellafranciosi.com">
          <span class="h1 px-1 text-lg md:text-2xl font-heading text-viola">
            segreteria@donatellafranciosi.com
          </span>
        </a><br class="block lg:hidden">Italia
      </p>
      <p class="pt-6 md:pt-4 text-center text-base text-slate-600 font-paragraph">
        booking at <br class="block lg:hidden">
        <a href="mailto:hello@mattiasonnino.com">
          <span class="h1 px-1 text-lg md:text-2xl font-heading text-viola">
            segreteria@donatellafranciosi.com
          </span>
        </a><br class="block lg:hidden">United Kingdom
      </p>
      <div id="social" class="pt-12 text-beige flex justify-center">
        <a target="_blank" href="https://www.instagram.com/mattiasonnino/">
          <i class="lni mx-3 lni-instagram"></i>
        </a>
        <a target="_blank" href="https://www.imdb.com/name/nm12089020/">
          <i class="lni mx-3 lni-imdb"></i>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mattia-sonnino-12bb84120/?originalSubdomain=it">
          <i class="lni mx-3 lni-linkedin"></i>
        </a>
        <a target="_blank" href="https://www.youtube.com/@mattia070990">
          <i class="lni mx-3 lni-youtube"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default {
  data() {
    return {
      // Percorsi delle immagini per il carousel
      images: [
        "/img/carousel/Mattia-Sonnino-7-min.jpg",
        "/img/carousel/mattia-sonnino-hero.jpg"
      ],
      currentImageIndex: 0,
      isFirstVisible: true,
      imageInterval: null
    };
  },
  methods: {
    cycleImages() {
      const nextIndex = (this.currentImageIndex + 1) % this.images.length;
      // Se isFirstVisible è true, bg1 è visibile e bg2 sarà il target per la nuova immagine
      let currentBg = this.isFirstVisible ? this.$refs.bg1 : this.$refs.bg2;
      let nextBg = this.isFirstVisible ? this.$refs.bg2 : this.$refs.bg1;
      // Aggiorno lo sfondo del layer nascosto con la nuova immagine
      nextBg.style.backgroundImage = `url(${this.images[nextIndex]})`;

      // Effettua il crossfade: contemporaneamente il layer corrente svanisce e quello nuovo appare
      gsap.to(currentBg, { duration: 1, opacity: 0, ease: "power2.inOut" });
      gsap.to(nextBg, {
        duration: 1,
        opacity: 1,
        ease: "power2.inOut",
        onComplete: () => {
          this.currentImageIndex = nextIndex;
          // Inverti il flag per indicare quale layer è visibile
          this.isFirstVisible = !this.isFirstVisible;
        }
      });
    },
    scrollToAbout() {
      gsap.to(window, { scrollTo: { y: "#about" }, duration: 1.5 });
    },
    scrollToVideo() {
      gsap.to(window, { scrollTo: { y: "#video" }, duration: 1.5 });
    }
  },
  mounted() {
    // Avvia il ciclo immagini ogni 5 secondi
    this.imageInterval = setInterval(this.cycleImages, 5000);

    // Aggiunge il CSS per le icone
    const link = document.createElement("link");
    link.href = "https://cdn.lineicons.com/4.0/lineicons.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    this.$nextTick(() => {
      if (this.$refs.arrow) {
        this.$refs.arrow.addEventListener("click", this.scrollToAbout);
      }
    });
    this.$nextTick(() => {
      if (this.$refs.port) {
        this.$refs.port.addEventListener("click", this.scrollToVideo);
      }
    });

    // Timeline iniziale per l'hero e gli altri elementi (rimane invariata)
    const tl = gsap.timeline();
    tl.from("#hero", { duration: 0.5, opacity: 0, delay: 0.5 })
      .from(
        "#separator",
        { duration: 1, scaleX: 0, transformOrigin: "left", ease: "none" },
        "+=0.25"
      )
      .from("#name", { duration: 0.5, opacity: 0 }, "-=0.65")
      .from("#job", { duration: 0.5, opacity: 0 }, "-=0.35")
      .from("#booking", { duration: 0.55, opacity: 0 }, "-=0.15")
      .from("#arrow", { duration: 0.5, opacity: 0 }, "+=0.5")
      .from("#social", { duration: 0.5, opacity: 0 }, "+=0")
      .to("#arrow", {
        y: -20,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        delay: 0.5,
        ease: "sine.inOut"
      });

    const tlAbout = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "play none none none"
      }
    });
    tlAbout
      .from("#about-1", { duration: 1.6, opacity: 0, stagger: 0.1, delay: 0.3 })
      .from("#about-2", { duration: 1.6, opacity: 0 }, "-=0.8")
      .from("#port", { duration: 1.6, opacity: 0 }, "-=0.7")
      .from("#cv", { duration: 1.6, opacity: 0 }, "-=1.4");
  },
  beforeUnmount() {
    // Pulisce l'intervallo al distruggimento del componente
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
};
</script>

<style scoped>
#hero {
  position: relative;
  overflow: hidden;
  opacity: 1;
}

.hero-bg {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

/* Gli stili per il resto del componente rimangono invariati */
#social .lni {
  font-size: 1.6rem;
}

#arrow .lni-arrow-down {
  font-size: 4rem;
}

#arrow {
  color: rgb(248 250 252) !important;
}
</style>
