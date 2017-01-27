import React, { Component } from 'react';
import { AppRegistry,
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  ScrollView } from 'react-native';

const styles = StyleSheet.create({
  darkPink: {
    color: '#fd0efd',
    fontSize: 25
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: 30,
  },
  blinkBlock: {
    position: 'absolute',
    top: 200,
    left: 0
  }
})

class CatHead1 extends Component {
  render() {
    let catPic = {
      uri: 'https://lh3.ggpht.com/QJx2rTPoiajr-mHOfVklblyDZHScoTLx91CrdrnQOaf8oHBCkESzzmWAeIskzmACj38=w300'
    };
    return (
      <Image source={catPic} style={{width: 200, height: 200}} />
    );
  }
}

class CatHead2 extends Component {
  render() {
    let catPic2 = {
      uri: 'https://s-media-cache-ak0.pinimg.com/originals/ce/d3/7a/ced37a6ffdd79fa7f98e96a927b4458d.gif'
    };
    return (
      <Image source={catPic2} style={{width: 200, height: 200, marginTop: 50}} />
    );
  }
}

class CatHeadBlock extends Component {
  render() {
    return (
      <View>
        <CatHead1 />
        <CatHead2 />
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
  super(props);
  // setting the initial to show the text
  this.state = {showText: true};

  //Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text style={styles.darkPink}>{display}</Text>
    );
  }
}

class BlinkBlock extends Component {
  render() {
    return (
      <View style={styles.blinkBlock}>
        <Blink text='Blinkin' />
        <Blink text='and Blingin' />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{paddingTop: 70}}>
        <TextInput
          style={{padding: 5, height: 40, width: 200, backgroundColor: 'white', color: '#fd0efd'}}
          placeholder="Meow Translator!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <View>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Image style={{height: 100, width: 100}} source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/b5/f4/47/b5f447bfcdc8bf5f401afac99a9cf5f9.jpg'}} />
          <Text style={{fontSize:80}}>React Native</Text>
        </View>
    );
  }
}

class LotsOfStuff extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <CatHeadBlock />
          <CatHeadBlock />
          <BlinkBlock />
          <PizzaTranslator/>
          <IScrolledDownAndWhatHappenedNextShockedMe/>
        </View>
      </ScrollView>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfStuff);
