import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Keyboard, Image } from 'react-native'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { required, email, confirmation, length, format } from 'redux-form-validators';
import {get} from 'lodash';

import { normalize, screenHeight, screenWidth, showToast } from '../components/utils'
import { submitSignup } from '../actions';
import sign_up from "../assest/images/sign_up.png"
import BG1 from "../assest/images/BG1.png"
import Input from '../components/Input'
import KeyboardAvoiding from '../components/KeyboardAvoiding';


function signup({ handleSubmit, submitSignup, serverError, data }) {

    const isInitialMount = useRef(true);

    const onChangeText = (key, val) => {
        console.log("data", key, val)
    }

    const submit = value => {
        submitSignup(value)
    }
    useEffect(() => {
        if (serverError && serverError.length !== 0 && get(serverError, 'message')) {
            Keyboard.dismiss();
            // showToast(get(serverError, 'message'));
        }
    }, [serverError])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (data && get(data, 'status') === 200 && get(data, 'meta') === 'signup') {
                reset()
                navigation.navigate('Login');
            }
        }
    }, [data]);
    
    return (
        <KeyboardAvoiding> 
            <Image source={BG1} style={{ height: '100%', width: '100%', flex : 1 }} />
            <View style={{ position: 'absolute' }} >
                <View style={{ alignSelf: "center", top: normalize(120), left : normalize(45) }} >
                    <Image source={sign_up} style={{ height: normalize(120), width: normalize(175), resizeMode: 'contain' }} />
                </View>
                <View style = {{top : normalize(60), left :normalize(40)}}>
                    <Field
                        name='firstname'
                        component={Input}
                        validate={[required()]}
                        label="First Name *"
                        autoCapitalize={'none'}
                    />
                    <Field
                        name='lastname'
                        component={Input}
                        validate={[required()]}
                        label="Second Name *"
                        autoCapitalize={'none'}
                    />
                    <Field
                        name='email'
                        component={Input}
                        keyboardType={'email-address'}
                        serverError={serverError['userapp-email']}
                        validate={[required()]}
                        label="Email *"
                        autoCapitalize={'none'}
                    />
                    <Field
                        name='password'
                        component={Input}
                        validate={[required()]}
                        label="Password *"
                        autoCapitalize={'none'}
                    />
                    <Field
                        name='confirm_password'
                        component={Input}
                        validate={[required()]}
                        label="Confirm Password *"
                        autoCapitalize={'none'}
                    />
                    <TouchableOpacity style={{ height: normalize(40), width: normalize(100), borderRadius: normalize(15), backgroundColor: "#42A5F5", justifyContent: 'center', top: normalize(90), alignSelf: 'center', left: normalize(10) }} onPress={handleSubmit(submit)} >
                        <Text style={{ fontSize: 18, color: "#ffffff", textAlign: "center", fontWeight: '500', }} >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoiding>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.setup,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitSignup: (data) => { dispatch(submitSignup(data)) },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'signup',
})(signup));
