// import {useCallback} from 'react';

// const _noop = () => null
// const usePlayIntroAudio = (addIntroCounter, addToPlayedItems, isIntroActive) => {
// 	const playSignOfCross = useCallback(
// 		(item, audioRef) => {
// 			if (isIntroActive) {
// 				addIntroCounter();
// 				audioRef.current.play();
// 				audioRef.current.onended = () => {
// 					addToPlayedItems(item);
// 				};
// 				if (!isIntroActive) {
// 					audioRef.current.pause();
// 				}
// 			}
// 		},
// 		[addIntroCounter, addToPlayedItems, isIntroActive]
// 	);

// 	const playApostlesCreed = useCallback(
// 		(item, audioRef, isIntroActive) => {
// 			if (isIntroActive) {
// 				addIntroCounter();
// 				audioRef.current.play();
// 				audioRef.current.onended = () => {
// 					addToPlayedItems(item);
// 				};
// 				return _noop;
// 			} else {
// 				audioRef.current.pause();
// 			}
// 		},
// 		[addIntroCounter, addToPlayedItems]
// 	);
// 	const playOurFather = useCallback(
// 		(item, audioRef) => {
// 			addIntroCounter();
// 			audioRef.current.play();
// 			audioRef.current.onended = () => {
// 				addToPlayedItems(item);
// 			};
// 			return _noop;
// 		},
// 		[addIntroCounter, addToPlayedItems]
// 	);
// 	const playHailMary = (item, audioRef) => {
// 		addIntroCounter();
// 		audioRef.current.play();
// 		audioRef.current.onended = () => {
// 			addToPlayedItems(item);
// 		};
// 	};
// 	const playGloryBe = useCallback(
// 		(item, audioRef) => {
// 			addIntroCounter();
// 			audioRef.current.play();
// 			audioRef.current.onended = () => {
// 				addToPlayedItems(item);
// 			};
// 			return _noop;
// 		},
// 		[addToPlayedItems, addIntroCounter]
// 	);
// 	return {
// 		playSignOfCross,
// 		playApostlesCreed,
// 		playOurFather,
// 		playHailMary,
// 		playGloryBe
// 	};
// };


//   export default usePlayIntroAudio;