import React from 'react';
import bottom from 'assets/bg/advantages-bottom-pattern.svg'
import top from 'assets/bg/advantages-top-pattern.svg'


export const WrapAdvantages = (props) => {

    return (
        <div style={{ margin: props.margin }}>
            <img src={bottom} style={{ marginBottom: '-1rem' }} />
            <div style={{ background: props.bg, }}>
                {props.children}
            </div>
            <img src={top} style={{ marginTop: '-1rem' }} />
        </div>
    );
};
