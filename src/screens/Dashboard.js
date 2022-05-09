import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { normalize } from "../components/utils";
import { logout } from "../actions";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';

function Dashboard({handleSubmit,logout}) {

    const submit = value => {
        console.log("value",value)
        logout(value)
    } 

    return (
        <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
            <TouchableOpacity style={{ height: normalize(40), width: normalize(180), borderRadius: normalize(15), backgroundColor: "#42A5F5", justifyContent: 'center',  alignSelf: 'center', left: normalize(20) }} onPress={handleSubmit(submit)} >
                <Text style={{ fontSize: 18, color: "#ffffff", textAlign: "center", fontWeight: '500', }} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.setup,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: (data) => { dispatch(logout(data)) },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Dashboard',
})(Dashboard));
