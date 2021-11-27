import {Button, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import {useDispatch} from "react-redux";
import {setEvent} from "../store/event";


export const ChangeNote = (props) => {
    const [note, setNote] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getNote = async () => {
            const storedNote = await SecureStore.getItemAsync('note');
            console.log('Saved note is', storedNote)
            setNote(storedNote)
        }

        getNote()

    }, [])

    const onChangeNote = (text) => {
        setNote(text)
        dispatch(setEvent())

    }

    const setNewNote = async (e) => {
         await SecureStore.setItemAsync('note', note)

        dispatch(setEvent('Note changed successfully'))
    }

    return (
        <View>
            <Text>Your current note:</Text>
            <TextInput onChangeText={onChangeNote} value={note}></TextInput>
            <Button title="Change note" onPress={setNewNote} />
        </View>
    );
};


