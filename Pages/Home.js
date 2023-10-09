import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Flatlist, SafeAreaView } from 'react-native';
import {CardComponent} from '../Components/Card'

const data=[
  {nome:'Bruno', tipoSanguineo:'AB+'}
]

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Flatlist
        data={data}
        renderItem={({item})=> <CardComponent nome={item.nome} tipoSanguineo={item.tipoSanguineo}/>}
        keyExtractor={ ({item})=> item.id}
        />
        </SafeAreaView> 
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
