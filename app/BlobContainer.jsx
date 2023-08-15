'use client';
import useScrollPosition from '@/hooks/useScrollPosition';
import useMousePosition from '@/hooks/useMousePosition';

import BlobCard from './BlobCard';
import BlobCardListener from './BlobCardListener';

export default function BlobContainer({ data }) {
	const scrollPosition = useScrollPosition();
	const mousePosition = useMousePosition();

	return (
		<div>
			{data.map((d, i) => (
				<BlobCardListener
					key={i}
					pretitle={d.pretitle}
					title={d.title}
					body={d.body}
					textColorMain={d.textColorMain}
					textColorSecondary={d.textColorSecondary}
					bgMain={d.bgMain}
					bgSecondary={d.bgSecondary}
					num={i + 1}
					mousePosition={mousePosition}
					scrollPosition={scrollPosition}
				/>
			))}
		</div>
	);
}
