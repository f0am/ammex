<template>
  <Layout>
    <hero :image="require('~/Building.jpg')" title="Our specialized services" />
    <section class="hero is-fullheight has-background-light">
      <div class="hero-body">
        <div class="container">
          <div class="intro column has-text-centered">
            <h2 class="title">Discover the range of solutions offered by our experts</h2>
            <br />
            <p
              class="subtitle"
            >We are dedicated to answer your questions and offer you a specialized service in accounting and bookkeeping.</p>
          </div>
          <div class="sandbox">
            <div class="columns is-centered" style="padding: 2rem">
              <div class="tile is-ancestor">
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="fas fa-chart-line fa-2x"></i>
                      <h3 class="title">Corporate Taxes</h3>
                      <p class="subtitle">Taxes for incorporated companies</p>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="fas fa-tasks fa-2x"></i>
                      <h3 class="title">Personal Taxes</h3>
                      <p class="subtitle">Any province or territory of Canada</p>
                      <p class="subtitle">Resident and non-resident</p>
                      <p class="subtitle">Employment Expenses</p>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="far fa-analytics fa-2x"></i>
                      <h3 class="title">Self-employed Taxes</h3>
                      <p class="subtitle">HST/QST reports</p>
                      <p class="subtitle">Rental Income</p>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="fas fa-file-invoice fa-2x"></i>
                      <h3 class="title">Payroll</h3>
                      <p class="subtitle">Payroll for exmployees</p>
                      <p class="subtitle">Payroll remittance</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-centered" style="padding: 2rem">
              <div class="tile is-ancestor">
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="far fa-calendar-check fa-2x"></i>
                      <h3 class="title">Company Registration</h3>
                      <p class="subtitle">HST/QST reports</p>
                      <p class="subtitle">Corporation</p>
                      <p class="subtitle">Business Registration</p>
                      <figure class="image is-4by3">
                        <img src="https://picsum.photos/640/480/?random" alt="Description" />
                      </figure>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="fas fa-book fa-2x"></i>
                      <h3 class="title">Bookkeeping</h3>
                      <p class="subtitle">HST/QST reports</p>
                      <p class="subtitle">Corporate tax and payroll are included</p>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                      <i class="fas fa-question fa-2x"></i>
                      <h3 class="title">Help with Audits</h3>
                      <p class="subtitle">Aligned with the right column</p>
                    </article>
                  </div>
                </div>
                <div class="column">
                  <div class="box">
                    <article class="tile is-child notification is-white">
                        <i class="fas fa-folder-plus fa-2x"></i>
                        <h3 class="title">Take care of responses with government</h3>
                        <p class="subtitle">Free of charge</p>
                     </article> 
                     </div>
                    
                  </div>
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
    title: "Services"
  },
  components: { Hero }
};
</script>
<style>
</style>


