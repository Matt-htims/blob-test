'use client';
import { useEffect, useRef, useState } from 'react';

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const scrollPositionRef = useRef(scrollPosition);
	const setScrollPositionState = (data) => {
		scrollPositionRef.current = data;
		setScrollPosition(data);
	};

	useEffect(() => {
		const updatePosition = () => {
			setScrollPositionState(window.scrollY);
		};
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return scrollPositionRef;
};

export default useScrollPosition;
