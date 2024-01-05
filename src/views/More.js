import Ame from 'ame-super-app-client';
export default class More {
  state = {
       safeArea:0
  }

  // Esta função é responsável por abrir uma URL externa
  accessPortal = () => {
    // Verificar se o método Ame.openBrowser existe
    if (typeof Ame.openBrowser === 'function') {
      // Este método só aceita URL's seguras com protocolo HTTPS
      Ame.openBrowser({ url: 'https://developer.ame.calindra.com.br/' });
    } else {
      // Exibir um alerta ao usuário caso ele esteja com um aplicativo desatualizado.
      Ame.alert({
        title: 'Ops',
        description: 'Parece que o seu Aplicativo da AME DIGITAL não está atualizado.',
        buttonText: 'OK',
      });
    }
  };

  async componentDidMount() {
    Ame.delegate2impl("setSceneType", ["FULL_SCREEN"])

    try{
        const specs = await Ame.getDeviceSpecs()
        this.setState({safeArea: specs.safeAreas.top})
    } catch(e){
        console.error("erro ao executar o método getDeviceSpecs", e);
    }
  
}
}
