import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro } from 'components/seminar/online'
import { Speakers } from 'components/seminar/common';
import jimmy from 'assets/speakers-icon/jimmy.png'
import oishi from 'assets/speakers-icon/oishi.png'
import jeff from 'assets/speakers-icon/jeff.png'
import luca from 'assets/speakers-icon/luca.png'

export default () => {

	const speakers = [
		{ img: jimmy, name: 'Jimmy Onihsi', company: 'Microsoft', job: '' },
		{ img: oishi, name: 'Takeshi Oishi', company: 'Google', job: '' },
		{ img: jeff, name: 'Jeff Stanford', company: 'Drive mode', job: '' },
		{ img: luca, name: 'Luca', company: 'Uber', job: '' },
	]

	return (
		<Layout>
			<SEO />
			<Intro />
			<Speakers data={speakers} />
		</Layout>);
};