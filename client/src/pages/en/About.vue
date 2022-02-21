<template>
<Layout>
  <section class="section has-background-white-bis"><div class="container">
          <div class="columns is-multiline mb-6">
            <div class="column is-3">
              <h2 class="title is-spaced">
                <span class="text-info is-size-2 pl-1">About Us</span>
              </h2>
            </div>
            <div class="column is-7">
              <p class="subtitle">Founded in 1991 AMMEX impôts is located in 204 chemin d'Aylmer appt 304, Gatineau (sector Aylmer), Qu&eacute;bec, Canada. Our friendly multilingual services include the preparation of Federal, Provincial, personal and corporate income tax returns. Through the years, previous and new clients have come to Ammex Impôts Income Tax because the friendly and confidential service provided is accurate, professional, and affordable. Even though some of our clients move across the country or overseas, they continue to contact Ammex Impôts Income Tax for their income tax preparation each year. </p>
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
                <h3 class="title is-size-5 is-spaced mb-3">Environmentally friendly</h3>
                <p class="subtitle">EFILE, an added service to our clients at free of cost enables the clients to receive their notice of assessment and/or refund from Revenue Canada and/or Revenue Qu&eacute;bec in about two weeks. This service is also environmental friendly. </p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                <h3 class="title is-size-5 is-spaced mb-3">Quality Service</h3>
                <p class="subtitle">Our clients are still confident about the service they will receive in the event Canada Revenue Agency and/or Revenue Qu&eacute;bec might question some part of their income tax returns. </p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <h3 class="title is-size-5 is-spaced mb-3">Best Tax Results</h3>
                <p class="subtitle">An experienced Ammex Impôts Income Tax professional work very hard for tax savings and provide personalized advice to accomplish the best tax results.</p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <h3 class="title is-size-5 is-spaced mb-3">Family owned</h3>
                <p class="subtitle">And operated for over 30 years</p>
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
    title: "About Us"
  },
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "info" },
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

<style>
</style>
