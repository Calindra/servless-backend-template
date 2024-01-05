import Ame from "ame-super-app-client";

export default class Serverless {
  state = { helloMessage: '', safeArea:0 };
  
  async componentDidMount() {
    try{
      const specs = await Ame.getDeviceSpecs()
      this.setState({safeArea: specs.safeAreas.top})

  } catch(e){
      console.error("erro ao executar o método getDeviceSpecs", e);
  }
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