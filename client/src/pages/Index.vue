<template>
  <Layout>
    <hero :image="require('~/Building.jpg')" title="Hello, we're Ammex Impôts" />
    <section class="section has-background-light">
      <div class="hero-body">
        <div class="container">
          <p
            class="is-size-4"
            style="padding: 80px"
          >Customer satisfaction is our top priority. We are committed to building long-term relationships and always finding solutions for your financial needs. Our affordable and friendly services include the preparation of federal, provincial, personal and corporate tax returns in English, French and XXXX. We employ processes, techniques and technologies that protect our clients today and in the future.</p>
        </div>
        <div class="box cta">
          <p
            class="is-size-4 has-text-centered"
            style="padding: 80px"
          >To serve you better, you can safely drop-off your documents with us whether it is by email, at our office or simply through our website.</p>
        </div>
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content has-text-centered">
                  <h4>Professionals</h4>
                  <p>Count on our expertise in tax preparation for corporations, trusts and individuals! We are located in Gatineau/Ottawa (Aylmer Sector) Quebec. We are open year-round for all Canadian provinces. We never treat our clients like a number.</p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady">
              <div class="card-content">
                <div class="content has-text-centered">
                  <h4>Prices starting at 69.99$</h4>
                  <p>We are dedicated to answering your questions and offering you a specialized service in accounting and bookkeeping.</p>
                  <p>
                    <a href="#">Learn more</a>
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
                  <p>Discover the range of solutions offered by our experts. Contact us for more information about our services.</p>
                  <p>
                    <a href="#">Learn more</a>
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
</style>
