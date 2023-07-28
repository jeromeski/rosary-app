// // import React, { useCallback, useContext, useEffect, useRef } from "react";
// // import { appDispatchCtx, appStateCtx } from "../../contexts/player/player.context";
// import Intro from "components/intro";
// import { NextPage } from "next";
// // import useGetJoyfulAudio from "hooks/useGetJoyfulAudio";
// // import usePlaySetIntro from "hooks/usePlaySetIntro";
// // import usePlayAudio from "./../../hooks/usePlayAudio";

// const Joyful: NextPage<{}> = () => {
// 	// const { prayerItems, isIntroActive, introCounter, playedItems } = useContext(appStateCtx);
// 	// const { togglePlay, addToPlayedItems, addIntroCounter, reset } = useContext(appDispatchCtx);

// 	// usePlayAudio(
// 	// 	addIntroCounter,
// 	// 	addToPlayedItems,
// 	// 	isIntroActive,
// 	// 	prayerItems,
// 	// 	introCounter,
// 	// 	playedItems
// 	// );

// 	useEffect(() => {
// 		console.log("playedItems :", playedItems);
// 		console.log("introCounter :", introCounter);
// 		console.log("isIntroActive :", isIntroActive)
// 	}, [playedItems, introCounter, isIntroActive]);

// 	return (
// 		// <>
// 		// 	<button onClick={() => togglePlay()}>{!isIntroActive ? "start": "pause"}</button>
// 		// 	<button onClick={() => reset()}>reset</button>
// 		// 	<Intro items={prayerItems} />
// 		// </>
// 	);
// };

// export default Joyful;
