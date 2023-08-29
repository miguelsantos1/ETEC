import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

export default function Routes(){
    
    const Stack = createStackNavigator();
    
    return(
            
        <Stack.Navigator initialRouteName='home'>

            <Stack.Screen
                name="home" 
                component={Home}
                options={{
                    title: 'Início',
                    headerShown: false
                }
            }
            />
            <Stack.Screen
            
                name="details"
                component={Details}
                options={{
                    headerTransparent: true,
                    headerTitle: '',
                    
                    headerBackImage: ()=>(
                        <View style={{
                            borderRadius: '50%',
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            left: '88vw',
                            width: '4vh',
                            height: '4vh',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end'
                        }}>
                            <AntDesign name="left" size={'1.8em'} color="#fff" marginLeft="20%" />
                        </View>
                    )
                }}
            />
         
        </Stack.Navigator>
    )
}