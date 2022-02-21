<template>
<Layout>
  <section class="section has-background-white-bis"><div class="container">
          <div class="columns is-multiline mb-6">
            <div class="column is-3">
              <h2 class="title is-spaced">
                <span class="text-info is-size-2 pl-1">À propos</span>
              </h2>
            </div>
            <div class="column is-7">
              <p class="subtitle">Fondés en 1991, nous sommes situés au 204 chemin d'Aylmer App. 304, Gatineau (secteur Aylmer), Québec, Canada. Nos services multilingue et amicaux comprennent la préparation des déclarations de revenus fédérales, provinciales, personnels et des sociétés. 

Au fil des ans, d'anciens et de nouveaux clients font appel à nos services parce qu’ils sont précis, professionnels et abordables. 

Même si certains de nos clients se déplacent à travers le pays ou à l'étranger, ils continuent de nous contacter pour la préparation de leur déclaration de revenus chaque année</p>
            </div>
          </div>
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg><h3 class="title is-size-5 is-spaced mb-3">Écologique</h3>
                <p class="subtitle">Grace à la TED, un service supplémentaire offert gratuitement, nos clients reçoivent leur avis de cotisation et/ou leur remboursement de Revenu Canada et/ou de Revenu Québec en deux semaines environ par voie électronique. </p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg><h3 class="title is-size-5 is-spaced mb-3">Service de qualité</h3>
                <p class="subtitle">Nos clients sont toujours confiants quant au service qu'ils recevront dans l'éventualité où l'Agence du revenu du Canada et/ou Revenu Québec pourrait remettre en question une partie de leur déclaration de revenus.</p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><h3 class="title is-size-5 is-spaced mb-3">Meilleur résultat fiscal</h3>
                <p class="subtitle">Un professionnel expérimenté de notre équipe travaille fortement pour réaliser des économies d'impôt et ainsi obtenir les meilleurs résultats fiscaux.</p>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="box py-6 has-text-left">
                <svg class="mb-4 mx-auto image is-32x32 text-info" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg><h3 class="title is-size-5 is-spaced mb-3">Entreprise familiale</h3>
                <p class="subtitle">Plus de 30 ans de services.</p>
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
    title: "À propos"
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
