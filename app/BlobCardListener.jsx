'use client';
import { useEffect, useRef, useState } from 'react';

export default function BlobCardListener({
	pretitle,
	title,
	body,
	textColorMain,
	textColorSecondary,
	bgMain,
	bgSecondary,
	scrollPosition,
	mousePosition,
	num,
}) {
	const containerRef = useRef(null);
	const [offset, setOffset] = useState({});
	const offsetRef = useRef(offset);
	const [mouseFound, setMouseFound] = useState(false);

	const setOffsetState = (data) => {
		offsetRef.current = data;
		setOffset(data);
	};

	useEffect(() => {
		const pos = window.document.documentElement;
		const windowRef = window;
		const handleResize = () => {
			setOffsetState({
				top: containerRef.current.offsetTop,
				left: containerRef.current.offsetLeft,
			});
		};
		const handleMouseMove = () => {
			pos.style.setProperty(
				`--x${num}`,
				mousePosition.current.x - offsetRef.current.left + 'px'
			);
			pos.style.setProperty(
				`--y${num}`,
				mousePosition.current.y -
					offsetRef.current.top +
					scrollPosition.current +
					'px'
			);
			setTimeout(() => {
				setMouseFound(true);
			}, '5');
		};
		if (containerRef.current) {
			handleResize();
			// handleMouseMove();
			pos.addEventListener('mousemove', handleMouseMove);
			windowRef.addEventListener('resize', handleResize);
			windowRef.addEventListener('scroll', handleMouseMove);

			return function cleanupListener() {
				pos.removeEventListener('mousemove', handleMouseMove);
				windowRef.removeEventListener('resize', handleResize);
				windowRef.removeEventListener('scroll', handleMouseMove);
			};
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className={`relative m-6 rounded-2xl p-20 select-none ${textColorMain} ${bgMain}`}
		>
			<h2 className="uppercase font-bold text-xl mb-8">{pretitle}</h2>
			<h1 className="text-6xl mb-8">{title}</h1>
			<p className="text-2xl">{body}</p>
			<div
				className={`circle${num} aria-hidden absolute top-0 left-0 right-0 bottom-0 rounded-2xl p-20 pointer-events-none duration-[350ms] ease-out ${textColorSecondary} ${bgSecondary} ${
					mouseFound ? '' : 'opacity-0'
				}`}
			>
				<h2 className="uppercase font-bold text-xl mb-8">{pretitle}</h2>
				<h1 className="text-6xl mb-8">{title}</h1>
				<p className="text-2xl">{body}</p>
			</div>
		</div>
	);
}
