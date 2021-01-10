<template>
  <section class="hero is-fullheight is-default is-bold">
    <div class="hero-body">
      <div class="container has-text has-text-centered">
        <div class="columns is is-vcentered">
          <div class="column is-5">
            <g-image :src="image"/>
                    </div>
                    <div class="column is-6 is-offset-1">
        <h1 class="title is-2">{{title}}</h1>
          <h2 class="subtitle is-4">
                            Accounting & preparation of income tax returns
                        </h2>
                        <br>
                        <p class="has-text-centered">
                            <a class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>