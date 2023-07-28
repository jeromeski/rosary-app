import React, { forwardRef } from "react";


type IntroType = {
	items: {
		id: number;
		title: string;
		isPlay: boolean;
		isEnded: boolean;
	}[];
};



const Intro = ({items}:IntroType) => {

		return (
			<>
				<div>
					{items?.slice(0,7).map((item) => (

							<button key={item.id}>{item.title}</button>

					))}
				</div>
			</>
		);
};

Intro.displayName = 'Intro';

export default Intro;
