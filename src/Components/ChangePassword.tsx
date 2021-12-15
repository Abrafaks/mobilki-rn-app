import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import {useDispatch, useSelector} from "react-redux";
import {setEvent} from "../store/event";
import Auth from "../Bcrypt/Auth";
import {disableLoginWithPassword, enableChangeNote, enableChangePassword} from "../store/toggle";


export const ChangePassword = (props) => {
    const [password, setPassword] = useState("")
    const [storedPasswordHash, setStoredPasswordHash] = useState("")
    const [loginWithPassword, setLoginWithPassword] = useState("")
    const [changePassword, setChangePassword] = useState("")
    const dispatch = useDispatch()
    const login = (useSelector((state => state.toggle.loginWithPassword)))
    const change = (useSelector((state => state.toggle.changePassword)))

    useEffect(() => {

        setLoginWithPassword(login)
        setChangePassword(change)

        const getPassword = async () => {
            const hashFromStore = await SecureStore.getItemAsync('password');
            console.log('Saved password is', hashFromStore)
            setStoredPasswordHash(hashFromStore)
        }

        if (storedPasswordHash) {

        }

        getPassword()

    }, [])

    const onChangePassword = (text) => {
        setPassword(text)
        dispatch(setEvent())
    }

    const setNewPassword = async (e) => {

        const hashedPassword = await Auth.hashPassword(password)

        if (!storedPasswordHash || changePassword) {
            await SecureStore.setItemAsync('password', hashedPassword)
        } else {
            if (!(await Auth.arePasswordsMatching(password, storedPasswordHash))) {
                console.log("WRONG PASSWORD")
                console.log(await Auth.arePasswordsMatching(password, storedPasswordHash))
                // set error
                return
            } else {
                await SecureStore.setItemAsync('password', hashedPassword)
            }
        }



        let eventMessage = ''

        if (loginWithPassword) {
            eventMessage = 'Successful login'
        }

        if (changePassword) {
            eventMessage = 'Password changed successfully'
        }

        if (!storedPasswordHash) {
            eventMessage = 'Password set successfully'
        }

        dispatch(setEvent(eventMessage))


        dispatch(enableChangePassword())
        dispatch(disableLoginWithPassword())
        dispatch(enableChangeNote())
        setChangePassword(true)
        setPassword('')

    }

    let changeOrSetNewPasswordMessage = '';
    let buttonText = '';

    if (loginWithPassword) {
        changeOrSetNewPasswordMessage = 'Login with password.'
        buttonText = 'Login'
    }

    if (changePassword) {
        changeOrSetNewPasswordMessage = 'Change password.'
        buttonText = 'Save new password'
    }

    if (!storedPasswordHash) {
        changeOrSetNewPasswordMessage = 'Set new password.'
        buttonText = 'Save new password'
    }

    return (
        <View style={styles.container}>
            <Text>{changeOrSetNewPasswordMessage}</Text>
            <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry={true}></TextInput>
            <Button title={buttonText} onPress={setNewPassword}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 20,
        padding: 10,
        borderWidth: 1
    },
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 12
    }
});

