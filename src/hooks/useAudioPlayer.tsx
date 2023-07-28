import { useContext, useRef, useEffect, useCallback } from "react";
import { playerDispatchCtx, playerStateCtx } from "../contexts/player/player.context";

export default function useAudioPlayer() {
	const ctxprops = useContext(playerDispatchCtx);
	const { start, next, back, reset } = ctxprops;
	const state = useContext(playerStateCtx);
	const { joyfulPlaylist, currentTrackIdx, isPlaying } = state;

	let audioRef = useRef<HTMLAudioElement>(null);

	let audio;

	// para sure na mauna
	const audioLoader = useCallback(() => {
		audioRef.current = new Audio(joyfulPlaylist[currentTrackIdx]?.audioUrl);
		return audio;
	}, [audio, audioRef, currentTrackIdx, joyfulPlaylist]);

	useEffect(() => {
		audioLoader();
	}, [audio, audioLoader]);

	useEffect(() => {
		if (audio) {
			audio.onended = () => {
				audio?.pause();
				if (isPlaying && currentTrackIdx === joyfulPlaylist.length - 1) {
					// Stop when the playlist reaches its end
					audio?.pause();
					audio.currentTime = 0;
				} else {
					next();
				}
			};

			if (isPlaying && currentTrackIdx === 0) {
				console.log("1 effect fired!");
				console.log(audio.currentTime);
				audio.play();
			} else if (isPlaying && audio.currentTime > 0) {
				console.log("2 effect fired!");
				audio.play();
			} else if (isPlaying) {
				audio.play();
			} else {
				console.log("pause effect fired!");

				audio?.pause();
				console.log("audio.currentTime :", audio.currentTime);
			}
		}

		return () => {
			audio?.removeEventListener("onended", () => {
				start();
				console.log("4 effect fired");
				if (currentTrackIdx === joyfulPlaylist.length - 1) {
					// Stop when the playlist reaches its end
					audio?.pause();
					audio.currentTime = 0;
				} else {
					next();
				}
			});
			console.log("5 effect fired");
			audio?.pause();
			// audio.src = "";
		};
	}, [state, currentTrackIdx, isPlaying, joyfulPlaylist, start, next, audio, audioLoader]);

	return {
		start,
		next,
		back,
		reset,
		joyfulPlaylist,
		currentTrackIdx,
		isPlaying,
		audio
	};
}
