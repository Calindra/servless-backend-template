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
        src={require('../assets/images/icon_ame.svg')}
      />
    </View>
    <Text textAlign='center'>Este miniapp foi desenvolvido utilizando as versões:</Text>
    <Text textAlign='center'>ame-miniapp-components: <Text style={{ fontWeight: 'bold' }}>###COMPONENTS_LIBRARY_VERSION_HIGHLIGHTER###</Text></Text>
    <Text textAlign='center'>ame-super-app-client: <Text style={{ fontWeight: 'bold' }}>###SUPER_APP_CLIENT_VERSION_HIGHLIGHTER###</Text></Text>
    <Text textAlign='center'>ame-mini-app-sdk-support: <Text style={{ fontWeight: 'bold' }}>2.x.x</Text></Text>

  </View>
</Window>
