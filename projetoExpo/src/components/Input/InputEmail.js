import estilo from '../../estilo'
import { AntDesign } from '@expo/vector-icons'
import { View, TextInput} from 'react-native';

export default function InputEmail() {

    return(
        <View style={estilo.viewIcons}>  
            <AntDesign name="user" size={24} color="black"/>
            <TextInput style={estilo.input} placeholder='E-mail' />
      </View>
    )

}