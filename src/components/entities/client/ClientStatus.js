import CtaBtn from "@/components/helper/CtaBtn";
import ChipColor from "@/components/helper/ColoredChip";

const ClientStatus = ChipColor({
  PENDING: "primary",
  ACTIVE: "success",
  DISABLED: ""
});

import { VBtn } from "vuetify/lib";
export default options => {
  return {
    functional: true,
    render(createElement, context) {
      console.log(context);
      return createElement(
        VBtn,
        {
          ...context.data,
          props: {
            ...context.props,
            color: options[context.props.value]
          }
          // scopedSlots: {
          //   default: function(props) {
          //     return createElement()
          //   }
          // }
        },
        context.props.value
      );
    }
  };
};
