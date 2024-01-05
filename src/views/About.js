import Ame from "ame-super-app-client"

export default class About {
    
    state = {
        safeArea: 0
    }
    async componentDidMount() {    
        try{
            const specs = await Ame.getDeviceSpecs()
            this.setState({safeArea:specs.safeAreas.top})
        } catch(e){
            console.error("erro ao executar o método getDeviceSpecs", e);
        }
      
    }

}

