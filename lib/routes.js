FlowRouter.route('/', {
  name: 'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe-view',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});
