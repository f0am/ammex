import Vue from "vue";
import { VChip } from "vuetify/lib";
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
        context.props.value
      );
    }
  };
};