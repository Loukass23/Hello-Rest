import React from 'react';
import {
    View,
    TextInput,
    Button
} from 'react-native'



class Test extends React.Component {
    render() {
        return ( 
              <View>
            <TextInput placeholder='Titre'/>
            <Button title='Rechercher' onPress={() => {}}/>
          </View>
          );
    }
}

export default Test;