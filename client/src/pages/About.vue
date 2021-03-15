<template>
  <Layout>
    <hero :image="require('~/Building2.jpg')" title="About Us" />
    <main style="transition:0.5s;" data-v-e0bc686a class>
      <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-medium is-${carousel.color}`">
            <div class="hero-body has-text-centered">
              <h1 class="title">{{carousel.text}}</h1>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
      <section class="container">
        <div class="hero-body">
          <h2 class="title is-2">About Us</h2>
          <p>Founded in 1988 AMMEX™ IMPOTS Personnel Taxes is located in 204 chemin d'Aylmer appt 304, Gatineau (sector Aylmer), Québec, Canada. Our friendly bilingual services include the preparation of Federal, Provincial, personal and corporate income tax returns. Through the years, previous and new clients have come to AMMEX™ IMPOTS Personnel Taxes because the friendly and confidential service provided is accurate, professional, and affordable. Even though some of our clients move across the country or overseas, they continue to contact AMMEX™ IMPOTS Personnel Taxes for their income tax preparation each year. EFILE, an added service to our clients at free of cost enables the clients to receive their notice of assessment and/or refund from Revenue Canada and/or Revenue Québec in about two weeks. This service is also environmental friendly. We are one of the first accounting office credible by Canada Revenue Agency and Revenue Québec to transmit income tax return electronically (EFILE). Our client enjoys this service at no cost. Our clients are still confident about the service they will receive in the event Canada Revenue Agency and/or Revenue Québec might question some part of their income tax returns. An experienced AMMEX™ IMPOTS Personnel Taxes professional work very hard for tax savings and provide personalized advice to accomplish the best tax results.</p>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  metaInfo: {
    title: "About Us"
  },
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ]
    };
  },
  components: { Hero }
};
</script>
