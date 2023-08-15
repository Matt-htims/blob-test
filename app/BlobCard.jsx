'use client';
import { useEffect, useRef, useState } from 'react';

export default function BlobCard({
	pretitle,
	title,
	body,
	textColorMain,
	textColorSecondary,
	bgMain,
	bgSecondary,
	num,
	scrollPosition,
	mousePosition,
}) {
	const containerRef = useRef(null);
	const [offsetTop, setOffsetTop] = useState(0);
	const [offsetLeft, setOffsetLeft] = useState(0);
	const [offset, setOffset] = useState({});
	const [docRef, setDocRef] = useState();

	useEffect(() => {
		const pos = window.document.documentElement;
		const windowRef = window;
		setDocRef(pos);
		const handleResize = () => {
			setOffsetTop(containerRef.current.offsetTop);
			setOffsetLeft(containerRef.current.offsetLeft);
			setOffset({
				top: containerRef.current.offsetTop,
				left: containerRef.current.offsetLeft,
			});
		};
		if (containerRef.current) {
			handleResize();
			windowRef.addEventListener('resize', handleResize);

			return function cleanupListener() {
				windowRef.removeEventListener('resize', handleResize);
			};
		}
	}, []);

	useEffect(() => {
		if (docRef) {
			docRef.style.setProperty(
				`--x${num}`,
				mousePosition.x - offsetLeft + 'px'
			);
			docRef.style.setProperty(
				`--y${num}`,
				mousePosition.y - offsetTop + scrollPosition + 'px'
			);
		}
	}, [mousePosition, scrollPosition, offsetLeft, offsetTop, num, docRef]);
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
