/**
 * @version 0.9
 */
import React, { Component } from 'react'
import { View, Text, ScrollView, Image, TextInput, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Dimensions, PixelRatio  } from 'react-native'

import Navigation from '../../components/navigation/Navigation'
import Button from '../../components/elements/Button'
import { strings } from '../../services/i18n'
import Feather from 'react-native-vector-icons/Feather'
import Icon from '../../components/elements/CustomIcon.js'
import GradientView from '../../components/elements/GradientView'

import RequestItem from './elements/RequestItem'


const DATA_PENDING = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Requested BTC 1',
        date: '9/29/2020',
        time: '4:42 PM',
        descr: 'Demo request',
        currencyCode: 'BTC',
        sum: '0.0005',
        sumUSD: '$ 0.04',
        status: 'Recieved',
        type: 'pending',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Requested ETH',
        date: '9/29/2020',
        time: '4:42 PM',
        descr: 'Demo request',
        currencyCode: 'ETH',
        sum: '0.0005',
        sumUSD: '$ 0.04',
        status: 'Rejected',
        type: 'pending',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Requested BTC 3',
        date: '9/29/2020',
        time: '4:42 PM',
        descr: 'Demo request',
        currencyCode: 'BTC',
        sum: '0.0005',
        sumUSD: '$ 0.04',
        status: 'Recieved',
        type: 'pending',
    },
];

const DATA_SENT = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Requested BTC 1',
        date: '9/29/2020',
        time: '4:42 PM',
        descr: 'Demo request',
        currencyCode: 'BTC',
        sum: '0.0005',
        sumUSD: '$ 0.04',
        from: 'pm@fio.testnet',
        status: 'Recieved',
        type: 'sent',
    },
];


class FioRequestsList extends Component {

    renderRequestList = (data) => {
        return (
            data.map((item, key) => (
                <>
                    <Text style={styles.txt}>{item.date}</Text>
                    <RequestItem
                        key={key}
                        data={item}
                        callback={() => console.log("Request pressed array" + item.id) }/>
                </>
            ))
        )
    }

    render() {
        return (
            <View>
                <SafeAreaView style={{flex: 0, backgroundColor: '#f5f5f5'}}>
                    <Navigation title={strings('FioRequestsList.title')}/>


                    <View style={{paddingTop: 80, height: '100%'}}>

                        <GradientView
                                      array={typeof backgroundColorArray == 'undefined' ? styles_.array : backgroundColorArray}
                                      start={styles_.start} end={styles_.end}>
                            <View style={styles.title_section}>
                                <Icon name="info" size={20} style={styles.icon1}/>
                                <Text
                                    style={styles.title_section_txt}>{strings('FioRequestsList.pendingRequests')}</Text>
                            </View>
                        </GradientView>

                        <ScrollView>
                            <View style={styles.container}>

                               {/* <RequestItem
                                    data={DATA_PENDING[1]}
                                    callback={() => console.log("Request pressed array 2") } />
                                */}

                                {this.renderRequestList(DATA_PENDING)}

                            </View>
                        </ScrollView>


                        <GradientView
                                      array={typeof backgroundColorArray == 'undefined' ? styles_.array : backgroundColorArray}
                                      start={styles_.start} end={styles_.end}>
                            <View style={styles.title_section}>
                                <Icon name="reload" size={20} style={styles.icon1}/>
                                <Text
                                    style={styles.title_section_txt}>{strings('FioRequestsList.sentRequests')}</Text>
                            </View>
                        </GradientView>

                        <ScrollView>
                            <View style={styles.container}>

                                {this.renderRequestList(DATA_SENT)}
                                
                            </View>
                        </ScrollView>


                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

export default FioRequestsList

const styles_ = {
    array: ['#555', '#999'],
    start: { x: 0.0, y: 0.5 },
    end: { x: 1, y: 0.5 }
}

const styles = {

    title_section: {
        padding: 10,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    title_section_txt: {
        fontFamily: 'SFUIDisplay-Regular',
        fontSize: 20,
        color: '#fff',
    },

    icon1: {
        marginRight: 10,
        color: '#fff'
    },

    container: {
        padding: 15,
        height: '100%',
        flexDirection: 'column',
        flex: 1,
    },

    


}