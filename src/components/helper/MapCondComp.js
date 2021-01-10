import Vue from "vue";
import { VChip, VAvatar, VIcon } from "vuetify/lib";
import CtaBtn from "./CtaBtn.vue";

export default options => {
  return {
    functional: true,
    render(createElement, context) {
      return createElement(
        VChip,
        {
          ...context.data,
          class: {
            "elevation-1": true
          },
          style: {
            padding: "12px 30px",
            height: "41px",
            "border-radius": "28px"
          },
          props: {
            ...context.props,
            color: options[context.props.value]
          }
        },
        [
          createElement(
            VAvatar,
            {
              class: {
                "mr-3": true
              },
              style: {
                cursor: "pointer",
                transition: "all 0.15s ease-in"
              },
              props: {
                size: 35,
                color: options[context.props.value]
              }
            },
            createElement(VIcon, {}, context.props.value)
          ),
          context.props.value
        ]
      );
    }
  };
};
