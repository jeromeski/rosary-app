import { usePlayerDispatch, usePlayerState } from "contexts/player/player.context";
import React, { forwardRef, useEffect, useState, useCallback } from "react";

const noop = () => null;

type Ref = HTMLAudioElement;

type Props = {};

const Controls = forwardRef<Ref, Props>((props, ref) => {
	const audioRef = ref as React.RefObject<HTMLAudioElement>;
	if (audioRef != null && typeof audioRef !== "function") {
		console.log(audioRef.current);
		audioRef.current;
	}
	const { back, next, start, reset, stop } = usePlayerDispatch();
	const { currentTrackIdx, isPlaying, joyfulPlaylist } = usePlayerState();
	const [, setState] = useState(true);

	const handlePause = useCallback(() => {
		audioRef.current.pause();
	}, [audioRef]);

	const handlePlay = useCallback(() => {
		audioRef.current.play();
	}, [audioRef]);

	const startButton = useCallback(() => {
		start();
		return;
	}, [start]);

	const pauseButton = () => {
		return;
	};

	const playButton = () => {
		return;
	};

	const handleNext = () => {
		audioRef.current.pause();
		audioRef.current.src = "";
		audioRef.current.currentTime = 0;
		stop();
		next();
		noop();
	};

	const handleBack = () => {
		audioRef.current.pause();
		audioRef.current.src = "";
		audioRef.current.currentTime = 0;
		stop();
		back();
		noop();
	};

	const handleReset = () => {
		console.log("Reset fired!");
		audioRef.current.pause();
		audioRef.current.src = "";
		audioRef.current.currentTime = 0;
		reset();
	};

	useEffect(() => {
		if (!audioRef) {
			setState((prev) => !prev);
		}
	}, [audioRef]);

	return (
		<>
			<br />
			<button onClick={() => start()}>start</button>{"    "}
			{!isPlaying && startButton()}
			<button onClick={() => handlePlay()}>
				play
			</button>
			{"    "}
			<button  onClick={() => handlePause()}>
				pause
			</button>
			{"    "}
			<button disabled={currentTrackIdx === 0} onClick={handleNext}>
				next
			</button>{" "}
			{"    "}
			<button disabled={currentTrackIdx === 0} onClick={handleBack}>
				back
			</button>{" "}
			{"    "}
			<button onClick={() => handleReset()}>reset</button>
			<br />
		</>
	);
});

Controls.displayName = "PlayerControls";

export default Controls;
