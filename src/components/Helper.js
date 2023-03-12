import { createContext } from 'react';

export const AudioContext = createContext({
	audioElement: null,
	setAudioElement: () => { },
});

export let audioElement = null;

export const setAudioElement = (element) => {
	audioElement = element;
};
