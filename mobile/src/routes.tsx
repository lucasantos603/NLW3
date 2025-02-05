import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import Header from './components/Header'

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'

import SelectMapPosition from './CretaOrphanage/SelectMapPosition'
import OrphanageData from './CretaOrphanage/OrphanageData'


export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions = {{headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'}}}>
                <Screen name = "OrphanagesMap" component = {OrphanagesMap}/>
                
                <Screen 
                name = "OrphanageDetails" 
                component = {OrphanageDetails}
                options= {{
                    headerShown: true,
                    header: () => <Header showCancel= {false} title = "Orfanato"/>
                }}
                />

                <Screen 
                name = "SelectMapPosition" 
                component = {SelectMapPosition}
                options= {{
                    headerShown: true,
                    header: () => <Header title = "Selecione no Mapa"/>
                }}
                />
               
                <Screen 
                name = "OrphanageData" 
                component = {OrphanageData}
                options= {{
                    headerShown: true,
                    header: () => <Header title = "Informe os Dados"/>
                }}/>
                
            </Navigator>
        </NavigationContainer>
    )
}