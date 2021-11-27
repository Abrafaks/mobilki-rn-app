import {Button, View} from "react-native";
import React from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {useDispatch} from "react-redux";
import {enableChangeNote} from "../store/toggle";
import {setEvent} from "../store/event";

const Login = (props) => {
    const dispatch = useDispatch()

    const loginHandler = async (user) => {

            const result = await LocalAuthentication.authenticateAsync({
                disableDeviceFallback: true,
                cancelLabel: "Cancel",
            });



        if (result.success) {
            // Successful Authentication
            dispatch(enableChangeNote())
            dispatch(setEvent())

        } else {
            // Failed Authentication - please try again
            dispatch(setEvent('Authentication failed - please try again later'))
            return;
        }
    };

    return (
        <View>
            <Button title="Log in" onPress={loginHandler}/>
        </View>
    );
};

export default Login;
