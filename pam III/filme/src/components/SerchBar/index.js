import React from "react"
import { TextInput, View, TouchableOpacity } from "react-native"
import styles from "./style"

export default function SerchBar() {

    return(
        <View style={styles.containerSearch}>
            <TextInput 
             placeholder="Digite o filme desejado"
             style={styles.inputSearch}
             >

             </TextInput>
        </View>
    )

}