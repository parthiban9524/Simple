import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { normalize } from "./utils";

export default function Input(props) {

    const [values, setvalues] = useState(props.input.value || props.initValue || "");
    const [valueEntered, setvalueEntered] = useState((props.input.value || props.initValue) ? true : false);
    const [isFocused, setisFocused] = useState(false);

    const { meta: { touched, error }, input: { value }, initValue, label, serverError, inputstyle = {}, without_background = false } = props;

    useEffect(() => {
        setvalueEntered(initValue !== "" ? true : false)
        setvalues(initValue)
    }, [initValue])

    useEffect(() => {
        setvalueEntered(value ? true : false)
        setvalues(value)
    }, [value])

    const onChangeHandler = (value) => {
        const { input: { onChange } } = props;
        onChange(value);
        setvalues(value);
    }
    const onBlurHandler = () => {
        setisFocused(false);
    }
    const handleFocus = () => {
        setisFocused(true);
    }
    return (
        <>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={label}
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={onChangeHandler}
                onBlur={onBlurHandler}
                value={values}
                onFocus={handleFocus}
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}
                {...props}
            />
        </View>
         {
            touched && (error || serverError) && (
                <View style={{ paddingHorizontal: 40 }}>
                    <Text>{serverError ? serverError : error}</Text>
                </View>
            )
        }
        </>
    )
}

const styles = StyleSheet.create({

    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        paddingLeft: normalize(10)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: normalize(75),
        left : normalize(10)
    },
    button: {
        color: "red"
    }
})