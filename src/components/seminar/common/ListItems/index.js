import React from 'react';
import { Card } from 'components/common';
import styled from 'styled-components';


const Wrapper = styled.div`
    h3 {
        margin-top: 1rem;
        padding-bottom: .5rem;
        border-bottom: 1px solid #cfd8dc;
    }
    ul {
        list-style: none;
        margin-bottom: 0;
    }
`;

export const ListItems = (props) => {

    return (
        <Card pad='1rem 0 0 0'>
            <Wrapper>
                <h3>{props.title}</h3>
                <ul>
                    {props.data.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </Wrapper>
        </Card>
    )
}

const TargetWrapper = styled.div`
    margin: auto;
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
        <Card pad='1rem'>
            <TargetWrapper>
                <h3>{props.title}</h3>
                <ul>
                    {props.data.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </TargetWrapper>
        </Card>
    )
}