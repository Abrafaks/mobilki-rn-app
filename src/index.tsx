import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Login from "./Components/Login";
import {ChangeNote} from "./Components/ChangeNote";
import {Button} from "react-native";
import {disableChangeNote} from "./store/toggle";
import {Event} from "./Components/Event";
import {setEvent} from "./store/event";

export const Index = () => {
    const changeNote = useSelector((state => state.toggle.changeNote))
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(setEvent())
        dispatch(disableChangeNote())
    }

    return <>
        {!changeNote && <Login/>}
        {changeNote && <Button title="Log out" onPress={logoutHandler}/>}
        {changeNote && <ChangeNote/>}
        <Event/>
    </>
}