import React from "react";
import { View, Image, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native'
import { Field, reduxForm, reset } from 'redux-form';
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import { connect } from 'react-redux';
import { required, email } from 'redux-form-validators';
import { get } from "lodash";

import bg from "../assest/images/bg.png"
import user from "../assest/images/user.png"
import person from "../assest/images/person.png"
import lock from "../assest/images/lock.png"
import { normalize } from "../components/utils";
import styles from "../assest/styles";


function Login({ navigation }) {
    return (
        <View style={{ flex: 1 }} >
            <StatusBar
                animated={true}
                backgroundColor="#61dafb" />
            <Image source={bg} style={{ height: '100%', width: '100%' }} />
            <View style={{ alignSelf: 'center', position: 'absolute' }} >
                <View style={{ backgroundColor: '#ffffff', top: normalize(225), height: normalize(280), width: normalize(280), borderRadius: normalize(20) }}>
                    <View style={{ backgroundColor: '#00264d', height: normalize(100), width: normalize(100), borderRadius: normalize(50), bottom: normalize(50), alignSelf: 'center', justifyContent: 'center' }} >
                        <Image source={user} style={{ height: normalize(50), width: normalize(50), tintColor: "#ffffff", alignSelf: "center" }} />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                        <View style={{ backgroundColor: '#00264d', height: normalize(40), width: normalize(40), justifyContent: "center" }}>
                            <Image source={person} style={{ height: normalize(30), width: normalize(30), tintColor: '#b1bed1', alignSelf: "center" }} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Email ID"
                            placeholderTextColor={"#b1bed1"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: 'center', paddingTop: normalize(25) }}>
                        <View style={{ backgroundColor: '#00264d', height: normalize(40), width: normalize(40), justifyContent: "center" }}>
                            <Image source={lock} style={{ height: normalize(30), width: normalize(30), tintColor: '#b1bed1', alignSelf: "center" }} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor={"#b1bed1"}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingTop: normalize(30), paddingHorizontal: normalize(20) }}>
                        <Text style={{ fontSize: 20, color: '#00264d', textDecorationLine: 'underline' }} onPress={() => alert('hi')} >Forgot Password?</Text>
                        <Text style={{ fontSize: 20, color: '#00264d', }} onPress={() => { navigation.navigate('Signup') }} >Sign Up </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{ height: normalize(50), width: normalize(240), backgroundColor: '#00264d', alignSelf: 'center', top: normalize(90), borderRadius: normalize(20), justifyContent: 'center' }} onPress={() => { navigation.navigate('Dashboard') }} >
                        <Text style={{ fontSize: 25, color: "#ffffff", textAlign: 'center' }} >LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state.setup,
        initialValues: {
            type: "app"
        },
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitLogin: (data) => { dispatch(submitLogin(data)) },
        reset: () => { dispatch(reset('Login')) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Login',
    enableReinitialize: true
})(Login));