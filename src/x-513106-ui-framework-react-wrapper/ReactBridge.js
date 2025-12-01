/** @jsx React.createElement */
/** @jsxFrag React.Fragment */
import React from 'react';

// Actual React app
import { MyReactApp } from '../components/MyReactApp';

export const ReactBridge = (props) => {
    const { dispatch, name } = props;
    return (
        <MyReactApp 
            onDispatchEventClick={(payload) => {
                dispatch('MY_REACT_CLICKED', payload)
            }}
            name={name} 
        />
    )

};