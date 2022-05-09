import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

const KeyboardAvoiding = ({ children }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}>
            {children}
        </KeyboardAvoidingView>
    );
}
export default KeyboardAvoiding;
