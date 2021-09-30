<template>
  <layout>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered" style="margin:80px">
          <div class="columns is-8 is-variable">
            <div class="column is-two-thirds has-text-left">
              <h1 class="title is-1">Contact Us</h1>
              <p
                class="is-size-4"
              >We are a located in the heart of Aylmer, Gatineau and operate all year-round for your accounting needs.</p>
              <h2 class="title is-2" style="margin-top:2.5rem">Call Us now</h2>
              <i class="fas fa-phone-alt" style="margin:5px"></i>
              <span>819-682-0000</span>
              <br />
              <i class="fas fa-map-marker-alt" style="margin:5px"></i>
              <span>204 chemin d'Aylmer app. 304, J9H 1A1 Gatineau, Quebec</span>
              <br />
              <i class="fas fa-envelope" style="margin:5px"></i>
              <span>ammextax@gmail.com</span>
              <div class="social-media">
                <a href="https://facebook.com" target="_blank">
                  <i class="fab fa-facebook-square" aria-hidden="true"></i>
                </a>
              </div>
              <div class="map-responsive">
              </div>
            </div>
            <div class="column is-one-third has-text-left">
              <div class="field" style="margin-top: 5rem">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input is-medium" type="text" />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input is-medium" type="text" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea is-medium"></textarea>
                </div>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="button is-info is-fullwidth has-text-weight-medium is-medium"
                >Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="map-section">
      <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.6955131402183!2d-75.83594548444485!3d45.395312679100165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce018c43029853%3A0x8c6a2c97397986ee!2s204%20Chemin%20d&#39;Aylmer%20appt%2C%20304%2C%20Gatineau%2C%20QC%20J9H%206J8!5e0!3m2!1sen!2sca!4v1612031838258!5m2!1sen!2sca"
        id="map"
      ></iframe>
    </section>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: "Contact Us"
  }
};
</script>

<style>
#map {
  width: 100% !important;
  height: 400px;
  margin-bottom: 50px;
}

</style>