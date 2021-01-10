// export default (Component, props) => ({
//   functional: true,
//   render(h) {
//     return h(Component, { props });
//   }
// });

// src/components/factories/container.js
export default (Component, props) => ({
  functional: true,
  props: Component.props,
  render(h, context) {
    return h(Component, {
      props: { ...context.props, ...props },
      scopedSlots: context.scopedSlots
    });
  }
});
