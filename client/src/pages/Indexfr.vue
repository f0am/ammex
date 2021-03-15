<template>
  <Layout>
    <template>
    <b-carousel>
        <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
        </b-carousel-item>
    </b-carousel>
</template>
    <section class="section has-background-light">
      <div class="hero-body">
        <div class="container">
          <p
            class="is-size-4"
            style="padding: 80px"
          >La satisfaction de nos clients est au cœur de nos priorités. Nous nous engageons à établir des relations à long terme et à toujours trouver des solutions pour vos besoins financiers. Nos services de comptabilité abordables et conviviaux comprennent la préparation des déclarations de revenus fédérales, provinciales, personnels et des sociétés et ce, en Anglais, Français et Arabe. Nous employons des processus, des techniques et des technologies de pointe qui protègent nos clients aujourd'hui et à l'avenir.</p>
        </div>
        <div class="box cta">
          <p
            class="is-size-4 has-text-centered"
            style="padding: 80px"
          >Pour répondre à vos besoins, vous pouvez déposer vos documents en toute sécurité et facilité avec nous par courriel, à notre bureau ou simplement à travers notre site web. </p>
        </div>
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content has-text-centered">
                  <h4>Professionnels</h4>
                  <p>Count on our expertise in tax preparation for corporations, trusts and individuals! We are located in Gatineau/Ottawa (Aylmer Sector) Quebec. We are open year-round for all Canadian provinces. We never treat our clients like a number.</p>
                  <p>
                    <a href="#">Savoir plus</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content has-text-centered">
                  <h4>Abordable</h4>
                  <p>Prix à partir de <strong>69.99$</strong> pour les taxes personnelles. Nous sommes dédiés à répondre à vos questions et à vous offrir un service spécialisé en matière de comptabilité et de tenue de livre. </p>
                  <p>
                    <a href="#">Savoir plus</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content has-text-centered">
                  <h4>Services</h4>
                  <p>Découvrez les solutions offertes par nos experts. Contactez-nous pour plus d'information sur nos services.</p>
                  <p>
                    <a href="#">Savoir plus</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  metaInfo: {
    title: "Ammex Impôts"
  },
 methods: {
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      }
    },
  components: { Hero }
  };
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
box cta {
  margin-top: 1.5rem;
}
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>
