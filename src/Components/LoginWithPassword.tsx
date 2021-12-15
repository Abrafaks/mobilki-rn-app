import {Button, StyleSheet, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import { enableLoginWithPassword} from "../store/toggle";
import {setEvent} from "../store/event";

const LoginWithPassword = (props) => {
    const dispatch = useDispatch()

    const loginHandler = async (user) => {
        dispatch(enableLoginWithPassword())
        dispatch(setEvent())
    };

    const login = (
        <View style={styles.container}>
            <Button title="Log in with password" onPress={loginHandler}/>
        </View>
    );

    return (
        {...login}
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: '100%'
    },
});

export default LoginWithPassword;
