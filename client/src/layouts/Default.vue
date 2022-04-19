<template>
<body>
  <div>
    <!-- <b-notification type="is-warning is-light is-marginless is-small" :closable="false">
      <div class="container">
        {{ covid[lang].information }}
        <g-link class="link" :to="getPath('covid')">
          <strong>COVID-19</strong>
        </g-link>
      </div>
    </b-notification>-->
    <div class="is-fullhd">
      <b-notification :closable="false" type=" is-info is-light is-small">
        <div
          class="columns notification is-info is-light has-text-centered is-small"
          style="overflow: hidden"
        >
          <div class="column">
            <g-link class="button rounded" to="tel:+1-819-682-0000">
              <i class="fas fa-phone-alt" style="margin: 5px"></i>819-682-0000
            </g-link>
          </div>
          <div class="column">
            <ul>
              <li>
                {{ days[lang].monday }} - {{ days[lang].friday }} : 9:00 -
                19:00
              </li>
              <li>{{ days[lang].saturday }} : 9:00 - 17:00</li>
              <li>
                {{ days[lang].sunday }} :
                {{ days[lang].closed }}
              </li>
            </ul>
          </div>
          <div class="column">
            <div class="button is-outlined is-info" v-if="lang !== 'fr'" @click="setLang('fr')">FR</div>
            <div v-if="lang !== 'en'" class="button is-outlined is-info" @click="setLang('en')">EN</div>
          </div>
        </div>
      </b-notification>
    </div>
    <div class="container">
      <header class="header">
        <g-link :to="getPath('/')">
          <g-image
            immediate="true"
            alt="Ammex Logo"
            src="~/pictures/logo.svg"
            background-color="smokewhite"
            width="500"
          />
        </g-link>
        <b-nav class="navbar">
          <g-link class="navbar-item" :to="getPath('about')">{{ menu[lang].about }}</g-link>
          <!-- <b-dropdown :triggers="['hover']" aria-role="list">
              <template #trigger>
                <g-link class="navbar-item" :to="getPath('required-docs')">
                  {{ menu[lang].documents }}
                  <i class="fal fa-angle-down" style="margin: 7px"></i>
                </g-link>
              </template>
              <g-link
                class="navbar-item"
                :to="getPath('required-docs')"
                aria-role="listitem"
                >{{ menu[lang].requiredDocuments }}</g-link
              >

              <g-link
                class="navbar-item"
                :to="getPath('forms')"
                aria-role="listitem"
                >{{ menu[lang].forms }}</g-link
              >
              <g-link
                class="navbar-item"
                :to="getPath('contact-us')"
                aria-role="listitem"
                >{{ menu[lang].dropOff }}</g-link
              >
              <g-link
                class="navbar-item"
                :to="getPath('login')"
                aria-role="listitem"
                >{{ menu[lang].uploadDocuments }}</g-link
              >
          </b-dropdown>-->
          <g-link class="navbar-item" :to="getPath('services')">{{ menu[lang].services }}</g-link>
          <!-- <g-link class="navbar-item" :to="getPath('faq')">
              {{ menu[lang].faq }}
          </g-link>-->
          <g-link class="navbar-item" :to="getPath('contact-us')">{{ menu[lang].contact }}</g-link>
          <!-- <b-navbar-item tag="div">
            <div class="buttons">
              <g-link class="button is-danger" :to="getPath('login')">
                {{ menu[lang].login }}
                <i class="fas fa-user" style="margin: 7px"></i>
              </g-link>
            </div>
          </b-navbar-item>-->
        </b-nav>
      </header>
    </div>
    <slot />
    <div class="columns has-text-centered is-marginless">
      <div class="column background-info is-6" style="padding: 80px">
        <g-link class="button is-centered is-big has-background-white" to="tel:+1-819-682-0000">
          <i class="fas fa-phone-alt" style="margin-right: 5px"></i>819-682-0000
        </g-link>
      </div>
      <div class="column is-6 has-background-light" style="padding: 80px">
        <g-link class="button is-centered is-big has-background-white" :to="getPath('contact-us')">
          <i class="far fa-envelope" style="margin: 5px"></i>
          {{ menu[lang].contact }}
        </g-link>
      </div>
    </div>
    <footer>
      <div class="container has-text-centered">
        <div class="columns is-multiline is-justify-content-space-between">
          <div class="column is-2 is is-paddingless">
            <g-link to="/">
              <g-image
                alt="Ammex Logo"
                src="~/pictures/logo.svg"
                background-color="smokewhite"
                width="500"
              />
            </g-link>
          </div>
          <!-- <div class="column is-2">{{ footer[lang].outro }}</div> -->
          <div class="column is-3" style="padding-top: 60px">
            <h3 class="title is-size-5 is-spaced mb-3">{{ footer[lang].office }}</h3>
            <p class="subtitle">204 chemin d'Aylmer app. 304, J9H 1A1 Gatineau, Quebec</p>
          </div>
          <div class="column is-3" style="padding-top: 60px">
            <h3 class="title is-size-5 is-spaced mb-3">Contact</h3>
            <p class="subtitle">ammextax@gmail.com</p>
          </div>
        </div>
        <div class="mt-5 is-flex is-justify-content-space-between">
          <p
            class="subtitle is-size-7"
          >&copy; {{ new Date().getFullYear() }}. {{ footer[lang].rights }}</p>
          <div>
            <a href="#">
              <img src="other-assets/icons/facebook-blue.svg" alt />
            </a>
            <a href="#">
              <img src="other-assets/icons/twitter-blue.svg" alt />
            </a>
            <a href="#">
              <img src="other-assets/icons/instagram-blue.svg" alt />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</body>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  computed: {
    lang() {
      return this.$route.path.split("/")[1];
    },
  },
  data() {
    return {
      menu: {
        en: {
          home: "Home",
          documents: "Documents",
          requiredDocuments: "Required Documents",
          about: "About Us",
          forms: "Forms",
          dropOff: "Drop Off Documents",
          uploadDocuments: "Upload Documents",
          services: "Services",
          faq: "FAQ",
          contact: "Contact Us",
          login: "Log In",
        },
        fr: {
          home: "Accueil",
          documents: "Documents",
          requiredDocuments: "Documents Requis",
          about: "À Propos",
          forms: "Formulaires",
          dropOff: "Déposer Documents",
          uploadDocuments: "Télécharger Documents",
          services: "Services",
          faq: "FAQ",
          contact: "Coordonnées",
          login: "Connecter",
        },
      },
      days: {
        en: {
          monday: "Monday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          closed: "Closed",
        },
        fr: {
          monday: "Lundi",
          friday: "Vendredi",
          saturday: "Samedi",
          sunday: "Dimanche",
          closed: "Fermé",
        },
      },
      covid: {
        en: {
          information: "Information relating to",
        },
        fr: {
          information: "Information sur la",
        },
      },
      footer: {
        en: {
          outro: "Accounting & preparation of income tax returns",
          office: "Office",
          rights: "All rights reserved",
        },
        fr: {
          outro: "Comptabilité et préparation de déclaration d'impôts",
          office: "Bureau",
          rights: "Tous droits réservés",
        },
      },
    };
  },
  methods: {
    getPath(relativePath) {
      return "/" + this.lang + "/" + relativePath;
      // return `/${this.lang}/${relativePath}`
    },
    setLang(lang) {
      this.$router.push(this.$route.path.replace(this.lang, lang));
    },
  },
};
</script>
<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, futura-pt, "system-ui", Helvetica Neue,
    sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  scroll-behavior: smooth;
}
.layout {
  max-width: auto;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0px;
  height: 80px;
  background-color: white;
}

.navbar-item {
  margin-left: 20px;
  font-size: 20px;
}

a.active--exact.active {
  color: #2866b1;
}
.dropdown-content {
  padding-right: 1rem;
}

.button :hover {
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
.radio :hover {
  transition: all 0.4s ease 0s;
}
.sub-header {
  font-weight: bold;
  font-size: xx-large;
}
.h1 title {
  color: whitesmoke;
}

:root {
  --shadowDark: #d9dde6;
  --background: #e4e9f2;
  --shadowLight: #eff5fe;
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
}

.hero-body {
  justify-content: center;
}

a {
  font-weight: 400;
}

.sectionf {
  padding-top: 1.5rem;
}

#footer {
  /* padding-top: 10rem; */
  padding: 0;
}

#map {
  width: 100% !important;
  height: 400px;
}
.title {
  font-size: 18px;
}
.subtitle {
  font-size: 18px;
}

.container {
  transition: all 0.4s ease-in-out;
}

.media-content {
  overflow: hidden !important;
}

.text-info {
  color: #2867b1;
}

.background-info {
  background-color: #2866b1;
}

.background-info-light {
  background-color: rgba(40, 102, 177, 0.15);
}

#family-owned {
  background-image: url(~@/pictures/bgaccounting.jpeg);
  background-repeat: no-repeat;
  height: 500px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-position: right bottom;
  background-size: cover;
}

.home-links a {
  margin-right: 1rem;
}
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
.box {
  /* border-radius: 25px; */
  padding: 1.5rem;
  box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
  border-left: none;
  border-right: none;
}
.tile.notification {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.is-shady {
  animation: flyintoright 0.4s backwards;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  border-radius: 4px;
  display: inline-block;
  margin: 10px;
  position: relative;
  transition: all 0.2s ease-in-out;
}
.is-shady:hover {
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
}

.slide-top {
  -webkit-animation: slide-top 0.5s ease-in-out both;
  animation: slide-top 0.5s ease-in-out both;
}

/**
 * ----------------------------------------
 * animation slide-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
</style>
