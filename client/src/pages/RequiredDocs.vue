<template>
    <layout>
    <hero :image="require('~/Logo.png')" title="Required Documents" />

    </layout>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  metaInfo: {
    title: 'Required Documents'
  },
  components: {Hero}
}
</script>