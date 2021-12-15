import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Login from "./Components/Login";
import {ChangeNote} from "./Components/ChangeNote";
import {Button} from "react-native";
import {disableChangeNote, disableChangePassword, disableLoginWithPassword} from "./store/toggle";
import {Event} from "./Components/Event";
import {setEvent} from "./store/event";
import LoginWithPassword from "./Components/LoginWithPassword";
import {ChangePassword} from "./Components/ChangePassword";

export const Index = () => {
    const changeNote = useSelector((state => state.toggle.changeNote))
    const loginWithPassword = useSelector((state => state.toggle.loginWithPassword))
    const changePassword = useSelector((state => state.toggle.changePassword))
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(setEvent())
        dispatch(disableChangeNote())
        dispatch(disableLoginWithPassword())
        dispatch(disableChangePassword())
    }

    return <>
        {!changeNote && !loginWithPassword && <Login/>}
        {!changeNote && !loginWithPassword && <LoginWithPassword/>}
        {(loginWithPassword || changePassword) && <ChangePassword/>}
        {changeNote && <Button title="Log out" onPress={logoutHandler}/>}
        {changeNote && <ChangeNote/>}
        <Event/>
    </>
}