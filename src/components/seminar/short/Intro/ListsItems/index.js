import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #ffffff;
    border: solid 1px #cfd8dc;
    border-radius: .3rem;
    max-width: 800px;
    height: 100%;
    width: 100%;
    margin: auto;
    padding: 1rem;
    h3 {
        margin-top: 1rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid #cfd8dc;
    }
    ul {
        list-style: none;
        margin-bottom: 0;
    }
    padding-bottom: 0;
`;

export const ListItems = (props) => {

    return (
        <Wrapper>
            <h3>{props.title}</h3>
            <ul>
                {props.data.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </Wrapper>
    )
}

const TargetWrapper = styled.div`
    background: #ffffff;
    // border: solid 3px #00acc1;
    border: solid 1px #cfd8dc;
    border-radius: .3rem;
    // max-width: 800px;
    margin: auto;
    padding: 1rem;
    h3 {
        margin-top: 1rem;
        padding-bottom: .5rem;
        // border-bottom: 1px solid #00acc1;
        border-bottom: 1px solid #cfd8dc;
    }
    ul {
        list-style: none;
        margin-bottom: 0;
    }
`;


export const Targets = (props) => {

    return (
        <TargetWrapper>
            <h3>{props.title}</h3>
            <ul>
                {props.data.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </TargetWrapper>
    )
}