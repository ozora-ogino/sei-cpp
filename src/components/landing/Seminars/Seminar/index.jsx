import React from 'react';
import { Link } from 'gatsby';
import { Container, Card } from 'components/common';
import { Wrapper, Content } from './styles';

export const Seminar = (props) => {
    return (
        <Wrapper as={Container} id="projects">
            <Card pad='0rem 0rem 1rem 0rem' radius='.6rem'>
                <Content>
                    <Link to={props.data.to}>
                        <div style={{ overflow: 'hidden', marginBottom: '1rem', borderRadius: '.6rem .6rem 0 0' }}>
                            <img src={props.data.img} />
                        </div>
                    </Link>
                    <h4>{props.data.name}</h4>
                    <p>{props.data.long}</p>
                    <div style={{ padding: '0 1.5rem' }}>
                        <p>{props.data.description}</p>
                    </div>
                </Content>
                {/* <Link to={props.data.to}><Button>コースの詳細はこちら</Button></Link> */}
            </Card>
        </Wrapper >
    );
}