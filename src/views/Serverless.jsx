<Window>
  <Header
    context="secondary"
    title="Boilerplate Mini App"
    subTitle="Serverless"
    safeArea={this.state.safeArea}
    leftIcon="arrow-left"
    leftIconOnPress={() => Ame.navigation.back()}
    rightIcon="close"
    rightIconOnPress={() => Ame.navigation.closeMiniApp()}
    sticky
  />
  <View>
    <Image
      height={200}
      source={require('../assets/images/icon_ame.svg')}
    />
    <Text textAlign="center">{this.state.helloMessage}</Text>
  </View>
</Window>
