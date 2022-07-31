export default class WelcomeController {
  public async index({ inertia }) {
    return inertia.render('Home', {test: 'Hello from Adonis!'});
  }

  public async about({inertia}) {
    return inertia.render('About', {});
  }

  public async meow({ inertia }) {
    return inertia.render('Meow');
  }
}
