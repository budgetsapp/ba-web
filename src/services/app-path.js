export class appPath {
  static login() {
    return '/login';
  }
  static signup() {
    return '/sign-up';
  }
  // the Route '/' need to have exact={true} prop
  static dashboard() {
    return '/dashboard';
  }
  static categories() {
    return '/categories';
  }
  static addCategory() {
    return '/categories/new';
  }
  static editCategory() {
    return {
      template: `/categories/:id`,
      build: id => `/categories/${id}`
    };
  }
}
