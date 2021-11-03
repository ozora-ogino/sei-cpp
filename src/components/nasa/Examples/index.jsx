import React from 'react';
import { Card } from 'components/common';
import styled from 'styled-components';
// import jeff from 'assets/speakers-icon/jeff.jpg';
import drivemodeLogo from 'assets/company-logos/drivemode.png';
import logovistaLogo from 'assets/company-logos/logovista.png';

const Root = styled.div`
  margin: auto;
  p {
    color: black;
  }
`;

const drivemode = {
  logo: drivemodeLogo,
  companyName: 'Drivemode',
  description:
    'CalPolyで多くの事業の立ち上げを経験後、世界初のスマホナビを開発。現在はHondaの子会社としてシリコンバレーを拠点としてホンダ研究所で活躍している。',
};

const logovista = {
  logo: logovistaLogo,
  companyName: 'LogoVista',
  description:
    'LogoVistaは日本企業の大きな課題であった海外マーケティングをNASA-CPPを利用することで克服し、世界市場への第一歩を踏み出すことに成功しました。',
};

export const Examples = ({ examples }) => (
  <Root>
    <ExampleCard data={drivemode} />
    <ExampleCard data={logovista} />
  </Root>
);

const ExampleCard = ({ data }) => (
  <Example>
    <Card>
      <div className="flex">
        <img src={data.logo} className="logo" alt="logo" />
        <div className="description">
          <h3>{data.companyName}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </Card>
  </Example>
);

const Example = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  color: black;

  p {
    color: black;
  }

  .logo {
    width: 30%;
    flex: 1;
    margin: auto;
  }

  .flex {
    display: flex;
  }

  .description {
    flex: 2;
    margin: auto;
    text-align: left;
  }
`;
