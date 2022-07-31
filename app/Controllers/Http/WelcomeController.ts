export default class WelcomeController {
  public async index({ inertia }) {
    return inertia.render('Home', {test: 'Hello from Adonis!'});
  }
}
