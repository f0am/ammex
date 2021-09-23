<template>
  <v-card v-bind="$attrs" :class="classes" class="v-card--material pa-3">
    <div class="d-flex grow flex-wrap">
      <v-avatar
        v-if="avatar"
        size="128"
        class="mx-auto v-card--material__avatar elevation-6"
        color="grey"
      >
        <v-img :src="avatar" />
      </v-avatar>

      <v-sheet
        v-else
        :class="{
          'pa-7': !$slots.image,
        }"
        :color="color"
        :max-height="icon ? 90 : undefined"
        :width="inline || icon || avatarText ? 'auto' : '100%'"
        elevation="6"
        class="text-start v-card--material__heading mt-n6 mb-auto"
        dark
      >
        <slot v-if="$slots.heading" name="heading" />

        <slot v-else-if="$slots.image" name="image" />

        <div
          v-else-if="title && !icon"
          class="display-1 font-weight-light"
          v-text="title"
        />

        <v-icon v-else-if="icon" size="32" v-text="icon" />

        <v-avatar
          v-else-if="avatarText"
          size="32"
          tile
        >
        <span class="text-h3">
          {{ avatarText }}
        </span>
          <!-- <v-img :src="avatar" /> -->
        </v-avatar>

        <div v-if="text" class="headline font-weight-thin" v-text="text" />
      </v-sheet>

      <div v-if="$slots['after-heading']" class="mx-auto grow">
        <slot name="after-heading" />
      </div>

      <v-col v-if="hoverReveal" cols="12" class="text-center py-0 mt-n12">
        <slot name="reveal-actions" />
      </v-col>

      <div v-else-if="(icon || avatarText) && title" class="ml-4">
        <div class="card-title font-weight-light" v-text="title" />
      </div>
      <div v-if="$slots['header-actions']" class="ml-auto">
        <slot name="header-actions" />
      </div>
      <div v-if="$slots['card-actions']" class="ml-auto" style="height: 0">
        <slot name="card-actions" />
      </div>
    </div>

    <slot />

    <template v-if="$slots.actions">
      <v-divider class="mt-2" />

      <v-card-actions class="pb-0">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "MaterialCard",

  props: {
    avatar: {
      type: String,
      default: "",
    },
    avatarText: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "success",
    },
    hoverReveal: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: undefined,
    },
    image: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },

  computed: {
    classes() {
      return {
        "v-card--material--has-heading": this.hasHeading,
        "v-card--material--hover-reveal": this.hoverReveal,
      };
    },
    hasHeading() {
      return Boolean(this.$slots.heading || this.title || this.icon);
    },
    hasAltHeading() {
      return Boolean(this.$slots.heading || (this.title && this.icon));
    },
  },
};
</script>

<style lang="sass">
.v-card--material
  &__avatar
    position: relative
    top: -64px
    margin-bottom: -32px

    &__heading
      position: relative
      top: -40px
      transition: .3s ease
      z-index: 1

    &.v-card--material--hover-reveal:hover
      .v-card--material__heading
        transform: translateY(-40px)
</style>
