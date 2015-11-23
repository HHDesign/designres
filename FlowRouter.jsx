/* global FlowRouter */
/* global ReactLayout */
/* global MainLayout */
FlowRouter.route('/', {
  name: 'home',
  action(params) {
    /* The key 'content' is now a function */
    ReactLayout.render(MainLayout, {
      content() {
        return <Home />;
      }
    });
  }
});