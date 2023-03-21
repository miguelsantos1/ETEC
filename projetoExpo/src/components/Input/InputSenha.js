import estilo from '../../estilo'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function InputSenha() {

    return(
        <View style={estilo.viewIcons}> 
        <Ionicons name="key" size={24} color="black" />
        <TextInput style={estilo.input}  placeholder='Senha' />
      </View>
    )

}