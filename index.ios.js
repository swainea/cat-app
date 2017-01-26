import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet } from 'react-native';

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
      <Image source={catPic2} style={{width: 200, height: 200}} />
    );
  }
}

class CatHead3 extends Component {
  render() {
    let catPic3 = {
      uri: 'https://66.media.tumblr.com/5c23f40850691f17d9a05ad798279371/tumblr_msf2bpQpsv1rtieoxo1_500.gif'
    };
    return (
      <Image source={catPic3} style={{width: 200, height: 200}} />
    );
  }
}

class CatHeadBlock extends Component {
  render() {
    return (
      <View>
        <CatHead1 />
        <CatHead2 />
        <CatHead3 />
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

class LotsOfStuff extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CatHeadBlock />
        <BlinkBlock />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfStuff);
