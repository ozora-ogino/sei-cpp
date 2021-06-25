import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Details } from 'components/seminar/online'
import { Speakers } from 'components/seminar/common';
import jimmy from 'assets/speakers-icon/jimmy.jpeg'
import jimmyPDF from 'assets/pdf-cover/jimmy-2021S.png'
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

	const detailItems = [
		{ title: "コロナ下における働き方改革", name: "Jimmy Onishi", company: "Microsoft", personImg: jimmy, pdfImg: jimmyPDF },
		// { title: "How to DX", name: "Jeff Stanford", company: "Drive mode", personImg: jeff, pdfImg: jeff },
	]

	return (
		<Layout>
			<SEO />
			<Intro />
			<Details data={detailItems} />
		</Layout>);
};