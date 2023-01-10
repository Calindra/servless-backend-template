import Ame from "ame-super-app-client";

export default class Serverless {
  state = { helloMessage: '' };

  async componentDidMount() {
    try {
      const body = {
        message: 'World'
      }
      const result = await Ame.server.exec('HelloWorldBackend.sayHello', body);
      this.setState({helloMessage: result.hello});
    } catch (e) {
        console.error('Error: ', e)
      this.setState({helloMessage: `Ops! Algo saiu errado: ${e.message}`});
    }
  }
}