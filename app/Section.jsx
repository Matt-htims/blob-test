'use client';
import { useEffect, useRef, useState } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';

export default function Section({
	pretitle,
	title,
	body,
	textColorMain,
	textColorSecondary,
	bgMain,
	bgSecondary,
	num,
}) {
	const containerRef = useRef(null);
	const [offsetTop, setOffsetTop] = useState(0);
	const [offsetLeft, setOffsetLeft] = useState(0);
	const [mouseLocation, setMouseLocation] = useState({});

	const scrollPosition = useScrollPosition();

	useEffect(() => {
		console.log('hi');
		const pos = window.document.documentElement;
		const windowRef = window;
		const handleResize = () => {
			setOffsetTop(containerRef.current.offsetTop);
			setOffsetLeft(containerRef.current.offsetLeft);
		};

		const handleMouseMove = (e) => {
			setMouseLocation({ x: e.clientX, y: e.clientY });
			pos.style.setProperty(`--x${num}`, e.clientX - offsetLeft + 'px');
			pos.style.setProperty(
				`--y${num}`,
				e.clientY - offsetTop + scrollPosition + 'px'
			);
		};
		if (containerRef.current) {
			handleResize();
			pos.addEventListener('mousemove', handleMouseMove);
			windowRef.addEventListener('resize', handleResize);

			return function cleanupListener() {
				pos.removeEventListener('mousemove', handleMouseMove);
				windowRef.removeEventListener('resize', handleResize);
			};
		}
	}, [offsetTop, offsetLeft, scrollPosition, num]);

	useEffect(() => {
		const pos = window.document.documentElement;
		// pos.style.setProperty(`--x${num}`, mouseLocation.x - offsetLeft + 'px');
		pos.style.setProperty(
			`--y${num}`,
			mouseLocation.y - offsetTop + scrollPosition + 'px'
		);
	}, [scrollPosition]);

	return (
		<div
			ref={containerRef}
			className={`relative m-6 rounded-2xl p-20 select-none ${textColorMain} ${bgMain}`}
		>
			<h2 className="uppercase font-bold text-xl mb-8">{pretitle}</h2>
			<h1 className="text-6xl mb-8">{title}</h1>
			<p className="text-2xl">{body}</p>
			<div
				className={`circle${num} aria-hidden absolute top-0 left-0 right-0 bottom-0 rounded-2xl p-20 pointer-events-none duration-[50ms] ${textColorSecondary} ${bgSecondary}`}
			>
				<h2 className="uppercase font-bold text-xl mb-8">{pretitle}</h2>
				<h1 className="text-6xl mb-8">{title}</h1>
				<p className="text-2xl">{body}</p>
			</div>
		</div>
	);
}
