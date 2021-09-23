import {
  VList,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VIcon,
  VListItemIcon,
  VDivider
} from "vuetify/lib";

export default items => {
  return {
    functional: true,
    render(createElement, context) {
      const item = context.props.item;
      const listItems = items.map(({ label, name, icon, title, divider }) => {
        return createElement(VListItem, {}, [
          divider && createElement(VDivider),
          !title &&
            createElement(VListItemIcon, {}, [
              icon && createElement(VIcon, {}, icon)
            ]),
          createElement(VListItemContent, {}, [
            (label || title) &&
              createElement(
                VListItemTitle,
                { class: { "text-h4": title } },
                label ||
                  (name &&
                    `${title} - ${name
                      .split(".")
                      .reduce((o, i) => o[i] || o, item)}`) ||
                  title
              ),
            title && createElement(VDivider),
            name &&
              !title &&
              createElement(
                VListItemSubtitle,
                {},
                name.split(".").reduce((o, i) => o[i] || o, item)
              )
          ])
        ]);
      });

      return createElement(VList, {}, listItems);
    }
  };
};
