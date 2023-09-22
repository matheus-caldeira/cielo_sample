import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Pressable,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Cielo} from './services/Cielo';

function App(): JSX.Element {
  const [response, setResponse] = React.useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const colorStyle = {
    color: isDarkMode ? Colors.light : Colors.dark,
  };

  const handle = async () => {
    setResponse('Aguarde...');
    const service = new Cielo();

    const data = await service.payment();

    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.text, colorStyle]}>
              VENDA TESTE - REACT NATIVE
            </Text>
            <Text style={[styles.description, colorStyle]}>
              Necessário alterar as chaves de acesso no arquivo src/src/Cielo.ts
            </Text>
          </View>
          <Pressable onPress={handle}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>EMITIR VENDA TESTE</Text>
            </View>
          </Pressable>
          <ScrollView>
            <Text>{response}</Text>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  header: {
    marginBottom: 32,
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#3399FF',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
});

export default App;
