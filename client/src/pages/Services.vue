<template>
  <Layout>
          <hero :image="require('~/Building.jpg')"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>


<script>
import Hero from "@/components/Hero";
export default {
  metaInfo: {
    title: "Services"
  },
  components: {Hero}
};
</script>


