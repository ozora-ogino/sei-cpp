import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Details } from 'components/seminar/online'
import jimmy from 'assets/speakers-icon/jimmy.jpeg'
import jimmyPDF from 'assets/pdf-cover/jimmy-2021S.png'
import oishi from 'assets/speakers-icon/oishi.png'
import jeff from 'assets/speakers-icon/jeff.png'

export default () => {
	const detailItems = [
		{ title: "コロナ下における働き方改革", name: "Jimmy Onishi", company: "Microsoft", personImg: jimmy, pdfImg: jimmyPDF },
		// { title: "", name: "Takeshi Oishi", company: "Google", personImg: oishi, pdfImg: oishi },
		// { title: "", name: "Jeff Stanford", company: "Drive mode", personImg: jeff, pdfImg: jeff },
	]

	return (
		<Layout>
			<SEO />
			<Intro />
			<Details data={detailItems} />
		</Layout>);
};