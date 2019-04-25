import React from 'react';
import { Button, Image, Platform, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./Cv.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
      title="Curriculum Vitae"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1,marginTop: 5, marginLeft: 10,}}>

       
           <Image
        source={require('./Pic.jpg')}
        style={{ width: 120, height: 120,   }}
      />
    
        <Text style={{ color: '#0984C1', fontWeight: 'bold'  , marginTop: 30 , fontSize: 20 }}>Personal Info:</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Name : Muhammad Saqib Noor</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Father Name : Ahmed Noor</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Gender : Male</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Relgion : Islam</Text>

        <Text style={{ color: '#0984C1', fontWeight: 'bold' , marginTop: 30 ,  fontSize: 20 }}>Educational Experience:</Text>
        <Text style={{ color: '#000000', marginTop: 5  }}>Appearing in <Text style={{  fontWeight: 'bold'}}>Mcs</Text> from <Text style={{  fontWeight: 'bold'}}>Muhammad Ali Jinnah University</Text></Text>
       <Text style={{ color: '#000000', marginTop: 5  }}><Text style={{  fontWeight: 'bold'}}>B.com</Text> from <Text style={{  fontWeight: 'bold'}}>Karachi University</Text></Text>
       <Text style={{ color: '#000000', marginTop: 5  }}><Text style={{  fontWeight: 'bold'}}>Intermediate</Text> from <Text style={{  fontWeight: 'bold'}}>Intermediate Board of Karachi </Text></Text>
       <Text style={{ color: '#000000', marginTop: 5  }}><Text style={{  fontWeight: 'bold'}}>Matriculation</Text> from <Text style={{  fontWeight: 'bold'}}>Matric Board of Karachi</Text></Text>
       
        <Text style={{ color: '#0984C1', fontWeight: 'bold' , marginTop: 30 ,  fontSize: 20 }}>Professional Experience:</Text>
        <Text style={{ color: '#000000', marginTop: 5  }}>Working as a <Text style={{  fontWeight: 'bold'}}>Dot Net Trainer</Text>  in <Text style={{  fontWeight: 'bold'}}>Computer Collegiate</Text></Text>
        <Text style={{ color: '#000000', marginTop: 5  }}>Worked as an <Text style={{  fontWeight: 'bold'}}>Accountant</Text> in <Text style={{  fontWeight: 'bold'}}>Bismillah Travel Services</Text></Text>
        <Text style={{ color: '#000000', marginTop: 5  }}>Worked as an <Text style={{  fontWeight: 'bold'}}>IT Officer</Text> in <Text style={{  fontWeight: 'bold'}}>Bismillah Engineering & Construction</Text></Text>
        
      
        
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0984C1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


