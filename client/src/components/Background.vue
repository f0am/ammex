<template>
    <section class="hero is-large has-bg-img">
    <g-image :src="image"/>
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
background-image: linear-gradient(187deg, rgba(250,250,250, 0.9803921568627451),rgb(40,103,177));
</style>