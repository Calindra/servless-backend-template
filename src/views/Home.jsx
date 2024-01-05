<Window>
  <Header
    context="primary"
    title="Boilerplate Mini App"
    safeArea={this.state.safeArea}
    leftIcon="arrow-left"
    leftIconOnPress={() => Ame.navigation.back()}
    rightIcon="help"
    rightIconOnPress={() => Ame.navigation.navigate({ path: "/About" })}
    sticky
  />
  <View>
   
    <Image
      style={{ height: 200 }}
      src={require('../assets/images/icon_ame.svg')}
    />
<View marginBottom="medium">
    <Text textAlign="center">[b]MiniApp Ametista 3.0.0[/b]</Text>
</View>
    <List items={this.state.links} onItemPress={this.navigateTo} />
  </View>
</Window>
