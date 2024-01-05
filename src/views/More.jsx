<Window>
  <Header
    context="secondary"
    title="Boilerplate Mini App"
    subTitle="More"
    safeArea={this.state.safeArea}
    leftIcon="arrow-left"
    leftIconOnPress={() => Ame.navigation.back()}
    rightIcon="close"
    rightIconOnPress={() => Ame.navigation.closeMiniApp()}
    sticky
  />
  <Image src={require('../assets/images/icon_ame.svg')} />
  <Text>Detalhes desta versão</Text>
  <View>
    <Text>Todas as informações sobre os componentes, as API's de comunicação e outros detalhes você encontra em nosso portal de desenvolvimento.</Text>
   
    <Button
      label="Abrir"
      display
      onPress={this.accessPortal}
    />
  </View>
</Window>
