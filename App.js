/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />

              <Text>My modules this semester:</Text>
              <SemModule day="Monday" mCode="C348" />
              <SemModule day="Tuesday" mCode="C273" />
              <SemModule day="Wednesday" mCode="C390" />
              <SemModule day="Thursday" mCode="B002, T002" />
              <SemModule day="Friday" mCode="C308" />

              <Text>{'\n'}Recommended Eats @ RP</Text>
              <Eats
                name="Sweet Tooth Waffles"
                location="W6 Level 1, E-canteen"
              />
              <Eats name="Crowded Bowl" location="W4/W6 Lawn Canteen" />
              <Eats
                name="Western Cuisine @ Koufu"
                location="E1 Level 1, Koufu"
              />

              <Eats name="Ayam Penyet" location="W4/W6 Lawn Canteen" />

              <Text>World Clock</Text>
              <WorldClock />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};

class MyFirstApp extends React.Component {
  render() {
    return <Text>My first React Native app{'\n'}</Text>;
  }
}

const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.mCode}
    </Text>
  );
};

class Eats extends React.Component {
  render() {
    return (
      <Text>
        {this.props.name}
        {'\n'}
        {this.props.location}
        {'\n'}
      </Text>
    );
  }
}

class Clock extends React.Component {
  render() {
    //var as = moment.tz('Asia/Singapore').format('H:HH Z');
    return (
      <Text>
        {this.props.location} -{' '}
        {moment.tz(this.props.location).format('H:m Z')} {'\n'}
      </Text>
    );
  }
}

const WorldClock = () => {
  return (
    <Text>
      <Clock location="Asia/Singapore" />
      <Clock location="Europe/London" />
      <Clock location="America/New_York" />
      <Clock location="Europe/Oslo" />
    </Text>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
