import Ame from "ame-super-app-client";

export default class Home {
  state = {
    safeArea:0,
    links: [
      {
        key:1,
        title: "About",
        subtitle: "Última versão dos componentes",
        to: "/About",
      },
      {
        key:2,
        title: "More",
        subtitle: "Mais detalhes sobre os componentes",
        to: "/More",
      },
      {
        key:3,
        title: "Serverless",
        subtitle: "Demonstra o uso do serverless",
        to: "/Serverless",
      },
    ]
  };
  navigateTo = (item) => {
    Ame.navigation.navigate(item.to);
  };

  async componentDidMount() {
    //Método para desativar header antigo
    Ame.delegate2impl("setSceneType", ["FULL_SCREEN"])

    try{
      //Função para obter a safeArea do dispotivo, propriedade obrigatória para usar o header
      const specs = await Ame.getDeviceSpecs()
      this.setState({safeArea: specs.safeAreas.top})

    } catch(e){
        console.error("erro ao executar o método getDeviceSpecs", e);
    }
  
}
}
