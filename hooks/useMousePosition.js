'use client';
import { useEffect, useRef, useState } from 'react';

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({});
	const mousePositionRef = useRef(mousePosition);
	const setMousePositionState = (data) => {
		mousePositionRef.current = data;
		setMousePosition(data);
	};

	useEffect(() => {
		const updatePosition = (e) => {
			// setMousePosition({ x: e.clientX, y: e.clientY });
			setMousePositionState({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', updatePosition);
		return () => window.removeEventListener('mouseMove', updatePosition);
	}, []);

	return mousePositionRef;
};

export default useMousePosition;
