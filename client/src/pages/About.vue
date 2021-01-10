<template>
  <Layout>
        <hero :image="require('~/Building.jpg')"/>
    <h2 class="sub-header">About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script>
import Hero from "@/components/Hero"
export default {
  metaInfo: {
    title: 'About Us'
  },
  components: {Hero}
};
</script>
