import {
  VDialog,
  VAvatar,
  VIcon,
  VBtn,
  VCard,
  VSpacer,
  VToolbar,
  VCardText,
  VCardActions
} from "vuetify/lib";

{
  /* <v-dialog
transition="dialog-bottom-transition"
max-width="600"
>
<template v-slot:activator="{ on, attrs }">
  <v-btn
    color="primary"
    v-bind="attrs"
    v-on="on"
  >From the bottom</v-btn>
</template>
<template v-slot:default="dialog">
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >Opening from the bottom</v-toolbar>
    <v-card-text>
      <div class="text-h2 pa-12">Hello world!</div>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        text
        @click="dialog.value = false"
      >Close</v-btn>
    </v-card-actions>
  </v-card>
</template>
</v-dialog> */
}

export default ({ colors }) => {
  return {
    functional: true,
    render(createElement, context) {
      const options = context.children.reduce((p, c) => {
        return {
          ...p,
          [c.data.slot]: {
            icon: c.data.attrs.icon,
            confirm: c.data.on.confirm,
            title: c.data.attrs.title
          }
        };
      }, {});

      return createElement(VDialog, {
        props: {
          maxWidth: "600"
        },
        scopedSlots: {
          activator: function({ on, attrs }) {
            const vBtnConfig = {
              ...context.data,
              class: {
                "cta-btn": true,
                "elevation-2": !!options[context.props.value],
                "elevation-0": !options[context.props.value]
              },
              style: {
                cursor: !!options[context.props.value] ? "pointer" : "default",
                "padding-left": options[context.props.value] && "4px !important"
              },
              attrs: {
                ...context.attrs,
                ...attrs
              },
              props: {
                ...context.props,
                flat: !options[context.props.value],
                rounded: true,
                color: colors[context.props.value]
              }
            };

            if (options[context.props.value]) {
              vBtnConfig.on = on;
            }
            return createElement(
              VBtn,
              vBtnConfig,
              options[context.props.value]
                ? [
                    createElement(
                      VAvatar,
                      {
                        class: {
                          "mr-3": true,
                          "darken-3": true
                        },
                        style: {
                          cursor: "pointer",
                          transition: "all 0.15s ease-in"
                        },
                        props: {
                          size: 35,
                          color: colors[context.props.value]
                        }
                      },
                      [createElement(VIcon, options[context.props.value].icon)]
                    ),
                    context.props.value
                  ]
                : context.props.value
            );
          },
          default: function(dialog) {
            return createElement(VCard, {}, [
              createElement(
                VToolbar,
                {
                  props: { color: "primary" },
                  class: { "white--text": true, "text-h3": true }
                },
                options[context.props.value].title
              ),
              createElement(
                VCardText,
                {},
                context.slots()[context.props.value]
              ),
              createElement(VCardActions, {}, [
                createElement(VSpacer),
                createElement(
                  VBtn,
                  {
                    props: { color: "primary", outlined: true },
                    on: {
                      click: () => {
                        dialog.value = false;
                      }
                    }
                  },
                  "Cancel"
                ),
                createElement(
                  VBtn,
                  {
                    props: { color: "primary" },
                    on: {
                      click: () => {
                        options[context.props.value].confirm();
                        dialog.value = false;
                      }
                    }
                  },
                  "Confirm"
                )
              ])
            ]);
          }
        }
      });
    }
  };
};
