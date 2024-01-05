<Window>
  <Header
    context="secondary"
    title="Boilerplate Mini App"
    subTitle="About"
    safeArea={this.state.safeArea}
    leftIcon="arrow-left"
    leftIconOnPress={() => Ame.navigation.back()}
    rightIcon="close"
    rightIconOnPress={() => Ame.navigation.closeMiniApp()}
    sticky
  />
  <View>
    <View justify='center'>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('../assets/images/icon_ame.svg')}
      />
    </View>
    <Text textAlign='center'>Este mini-app foi desenvolvido utilizando as versões:</Text>
    <Text textAlign='center'>ame-miniapp-components: <Text style={{ fontWeight: 'bold' }}>3.0.0-beta.15</Text></Text>
    <Text textAlign='center'>ame-super-app-client: <Text style={{ fontWeight: 'bold' }}>2.27.0</Text></Text>
  </View>
</Window>
