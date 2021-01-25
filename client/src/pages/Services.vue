<template>
  <Layout>
    <hero :image="require('~/Building.jpg')" title="Our specialized services" />
    <section class="container">
      <div class="intro column has-text-centered">
        <h2 class="title">Discover the range of solutions offered by our experts</h2>
        <br />
        <p
          class="subtitle"
        >We are dedicated to answering your questions and offering you a specialized service in accounting and bookkeeping.</p>
      </div>
      <div class="sandbox">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Corporate Taxes</p>
              <p class="subtitle">Taxes for incorporated companies</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Bookkeeping</p>
              <p class="subtitle">HST/QST reports</p>
              <p class="subtitle">Corporate tax and payroll are included</p>
            </article>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <p class="title">Personal Taxes</p>
              <p class="subtitle">Any province or territory of Canada</p>
              <p class="subtitle">Resident and non-resident</p>
              <p class="subtitle">Employment Expenses</p>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-white">
                  <p class="title">Self-employed Taxes</p>
                  <p class="subtitle">HST/QST reports</p>
                  <p class="subtitle">Rental Income</p>
                </article>
                <article class="tile is-child notification is-white">
                  <p class="title">Payroll</p>
                  <p class="subtitle">Payroll for exmployees</p>
                  <p class="subtitle">Payroll remittance</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-white">
                  <p class="title">Registering Companies</p>
                  <p class="subtitle">HST/QST reports</p>
                  <p class="subtitle">Corporation</p>
                  <p class="subtitle">Business Registration</p>
                  <figure class="image is-4by3">
                    <img src="https://picsum.photos/640/480/?random" alt="Description" />
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent is-shady">
              <article class="tile is-child notification is-white">
                <p class="title">Help with Audits</p>
                <p class="subtitle">Aligned with the right column</p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent is-shady">
            <article class="tile is-child notification is-white">
              <div class="content">
                <p class="title">Take care of responses with government free of charge</p>
                <p class="subtitle">With even more content</p>
              </div>
            </article>
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
    title: "Services"
  },
  components: { Hero }
};
</script>


