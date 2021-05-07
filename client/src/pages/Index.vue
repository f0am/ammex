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
        <div class="container slide-top"> 
          <p
            class="is-size-4"
            style="padding: 80px"
          >Customer satisfaction is our top priority. We are committed to building long-term relationships and always finding solutions for your financial needs. Our affordable and friendly services include the preparation of federal, provincial, personal and corporate tax returns in English, French and Arabic. We employ processes, techniques and technologies that protect our clients today and in the future.</p>
        </div>
        <div class="box cta">
          <p
            class="is-size-4 has-text-centered"
            style="padding: 80px"
          >To serve you better, you can safely drop-off your documents with us whether it is by email, at our office or simply through our website.</p>
        </div>
        <div class="columns features">
          <div class="column is-4">
            <div class="card is-shady animate_animated animate__fadeInUp">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="title">Professionals</p>
                  <p>Count on our expertise in tax preparation for corporations, trusts and individuals! We are located in Gatineau/Ottawa (Aylmer Sector) Quebec. We are open year-round for all Canadian provinces. We never treat our clients like a number.</p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady animate_animated animate__fadeInUp">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="title">Affordable</p>
                  <p>Our affordable prices start at <strong>69.99$</strong> for personal taxes. We are dedicated to answer your questions and offer you a specialized service in accounting and bookkeeping.</p>
                  <p>
                    <a href="#">Learn more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="card is-shady animate_animated animate__fadeInUp">
              <div class="card-content">
                <div class="content has-text-centered">
                  <p class="title">Services</p>
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

.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}


.features {
  padding: 5rem 0;
}
.box.cta {
  border-radius: 0;
  border-left: none;
  border-right: none;
}
.card-image > .fa {
  font-size: 8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #209cee;
}
.card-content .content {
  font-size: 14px;
  margin: 1rem 1rem;
}
.card-content .content h4 {
  font-size: 16px;
  font-weight: 700;
}
.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 2rem;
}
.intro {
  padding: 5rem 0;
  text-align: center;
}
.sandbox {
  padding: 5rem 0;
}
.tile.notification {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.is-shady {
animation: flyintoright .4s backwards;
background: #fff;
box-shadow: rgba(0, 0, 0, .1) 0 1px 0;
border-radius: 4px;
display: inline-block;
margin: 10px;
position: relative;
transition: all .2s ease-in-out;
}
.is-shady:hover {
box-shadow: 0 10px 16px rgba(0, 0, 0, .13), 0 6px 6px rgba(0, 0, 0, .19);
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

.card {
  display: inline-block;
  margin: 0 0.5rem;

  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

</style>
