import React from "react";
import {Text} from "react-native";
import {useSelector} from "react-redux";

export const Event = props => {
    const eventMessage = useSelector((state => state.event.event))

    return <Text>{eventMessage}</Text>
}