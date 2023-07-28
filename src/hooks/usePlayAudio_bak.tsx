// import { useEffect, useCallback, MutableRefObject } from "react";
// import useGetJoyfulAudio from "hooks/useGetJoyfulAudio";
// // import { isNonNullChain } from "typescript";
// // import usePlayIntroAudio from "./usePlayIntro";

// type AudioRefType<T> = MutableRefObject<T>;

// const usePlayAudio = (
// 	addIntroCounter,
// 	addToPlayedItems,
// 	isIntroActive,
// 	prayerItems,
// 	introCounter,
// 	playedItems
// ) => {

// 	const { blessSelf, apostlesCreed, ourFather, hailMary, gloryBe, fatimaPrayer } =
// 		useGetJoyfulAudio();
// 	// const { playSignOfCross, playApostlesCreed, playOurFather, playHailMary, playGloryBe } =
// 	// 	usePlayIntroAudio(addIntroCounter, addToPlayedItems, isIntroActive);

// 	/*
// @ Initialize IntroCounter to start playing audio
// */

// const playSignOfCross = useCallback(async (): Promise<void> => {
// 	if (blessSelf.current) {
// 		try {
// 			await blessSelf.current.play();
// 			blessSelf.current.onended = () => {
// 				addToPlayedItems(prayerItems[0]);
// 			};
			
// 		} catch (error) {
// 			console.error("Error while playing audio:", error);
// 		}
// 	}
// }, [
// 	blessSelf, 
// 	addToPlayedItems, 
// 	prayerItems, 
// ]);

// const playApostlesCreed = useCallback(async (): Promise<void> => {
// 	if (apostlesCreed.current) {
// 		try {
// 			await apostlesCreed.current.play();
// 			apostlesCreed.current.onended = () => {
// 				addToPlayedItems(prayerItems[1]);
// 				addIntroCounter();
// 			};
// 		} catch (error) {
// 			console.error("Error while playing audio:", error);
// 		}
// 	}
// }, [apostlesCreed, addToPlayedItems, prayerItems, addIntroCounter]);

// 	useEffect(() => {
// 		if (isIntroActive && playedItems.length === 0 && introCounter === 0) {
// 			addIntroCounter();
// 		}
// 	}, [isIntroActive, playedItems.length, addIntroCounter, introCounter]);

// 	/*
// 	@ Handling pause
// 	*/

// 	useEffect(() => {
// 		if (introCounter === 1 && playedItems.length === 0) {
// 			playSignOfCross();
// 		}
// 		if (!isIntroActive && blessSelf.current.currentTime > 0) {
// 			blessSelf.current.pause();
// 		} else if (!isIntroActive && apostlesCreed.current.currentTime > 0) {
// 			apostlesCreed.current.pause();
// 		}
// 	}, [ 
// 		introCounter, 
// 		blessSelf, 
// 		prayerItems, 
// 		addToPlayedItems, 
// 		isIntroActive, 
// 		playSignOfCross,
// 		playedItems.length ,
// 		apostlesCreed
// 	]);

// 	useEffect(() => {
// 		if(introCounter === 1 && playedItems.length === 1){
// 			 playApostlesCreed()
// 		}
// 	},[introCounter, playApostlesCreed, playedItems.length])

// 	// useEffect(() => {
// 	// 	if ()
// 	// },[])

// 	// const playNextAudio = useCallback(
// 	// 	(item: {}, audioRef: MutableRefObject<any>) => {},
// 	// 	[addIntroCounter, addToPlayedItems, isIntroActive, introCounter, playedItems, prayerItems]
// 	// );

// 	// useEffect(() => {
// 	// 	if (isIntroActive && !playedItems.length && !introCounter) {
// 	// 		playSignOfCross(prayerItems[0], blessSelf );
// 	// 	}
// 	// }, [isIntroActive]);

// 	// useEffect(() => {
// 	// 	if (isIntroActive && playedItems.length === 1 && introCounter === 1) {
// 	// 		playApostlesCreed(prayerItems[1], apostlesCreed, isIntroActive);
// 	// 	}
// 	// }, [playedItems.length, introCounter]);

// 	// useEffect(() => {
// 	// 	if (isIntroActive && playedItems.length === 2 && introCounter === 2) {
// 	// 		playOurFather(prayerItems[2], ourFather);
// 	// 	}
// 	// }, [playedItems.length, introCounter]);

// 	// useEffect(() => {
// 	// 	if (isIntroActive && playedItems.length < 6 && introCounter < 6) {
// 	// 		if (playedItems.length >= 3 && introCounter >= 3) {
// 	// 			playHailMary(prayerItems[3], hailMary);
// 	// 		}
// 	// 	}
// 	// }, [isIntroActive, playedItems.length]);

// 	// useEffect(() => {
// 	// 	if (isIntroActive && playedItems.length === 6) {
// 	// 		playGloryBe(prayerItems[4], gloryBe);
// 	// 	}
// 	// }, [isIntroActive, playedItems.length]);
// };

// export default usePlayAudio;
