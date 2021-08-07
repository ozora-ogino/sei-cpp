import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Details } from 'components/seminar/online'
import jimmy from 'assets/speakers-icon/jimmy.jpeg'
// import jimmyPDFImg from 'assets/pdf-cover/jimmy-2021S.png'
import jimmyPDF from 'assets/pdf/jimmy-2021-spring.pdf'
import jeffPDF from 'assets/pdf/jeff-2021-spring.pdf'
import oishi from 'assets/speakers-icon/oishi.png'
import jeff from 'assets/speakers-icon/jeff.png'


export default () => {
	const detailItems = [
		{ title: "コロナ下における働き方改革", name: "Jimmy Onishi", company: "Microsoft", personImg: jimmy, pdfImg: jimmyPDF },
		{ title: "", name: "Jeff Stanford", company: "Drive mode", personImg: jeff, pdfImg: jeffPDF },
		// { title: "", name: "Takeshi Oishi", company: "Google", personImg: oishi, pdfImg: jimmyPDF },
	]

	return (
		<Layout>
			<SEO />
			<Intro />
			<Details data={detailItems} />
		</Layout>);
};