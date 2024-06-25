import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: "/",
  customProps: {
    githubLink: "https://github.com/vue-microfrontends/root-config",
  },
});

// ORIGINAL
registerApplication({
  name: "@vue-mf/dogs-dashboard",
  app: () => System.import("@vue-mf/dogs-dashboard"),
  activeWhen: "/view-doggos",
});

registerApplication({
  name: "@vue-mf/rate-dogs",
  app: () => System.import("@vue-mf/rate-dogs"),
  activeWhen: "/rate-doggos",
});

// registerApplication({
//   name: "@vue-mf/dogs-dashboard",
//   app: () => System.import("@vue-mf/dogs-dashboard"),
//   activeWhen: "/rate-doggos",
// });

// registerApplication({
//   name: "@vue-mf/rate-dogs",
//   app: () => System.import("@vue-mf/rate-dogs"),
//   activeWhen: "/view-doggos",
// });

start();
