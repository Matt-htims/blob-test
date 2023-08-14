import Image from 'next/image';

// Components
import Section from './Section';

export default function Home() {
	return (
		<main className="">
			<Section
				pretitle="Monday"
				title="Put the right systems in place."
				body="Everything you need to ground your business, all in one place. Whatever your stage, Tomorrow helps implement systems and best practices to lay the foundations for growth."
				textColorMain="text-white"
				bgMain="bg-green-400"
				textColorSecondary="text-green-200"
				bgSecondary="bg-blue-500"
				num={1}
			/>
			<Section
				pretitle="Tuesday"
				title="Streamline your logistics."
				body="Use our in-house logistics network to store, ship and track your products. We’ll seamlessly integrate our warehouse systems with your eCommerce platform."
				textColorMain="text-white"
				bgMain="bg-yellow-400"
				textColorSecondary="text-blue-500"
				bgSecondary="bg-yellow-200"
				num={2}
			/>
			<Section
				pretitle="Wednesday"
				title="Promote a business that reaches and resonates"
				body="Tomorrow demystifies how to creatively market your business, making it easy to create bespoke strategy that spends your budget in the right places."
				textColorMain="text-white"
				bgMain="bg-red-400"
				textColorSecondary="text-yellow-300"
				bgSecondary="bg-blue-500"
				num={3}
			/>
			<Section
				pretitle="Thursday"
				title="Invest in your personal growth."
				body="When your business grows, you grow. We offer targeted business advice along with all the support you need to build a network you can rely on."
				textColorMain="text-white"
				bgMain="bg-blue-500"
				textColorSecondary="text-pink-300"
				bgSecondary="bg-blue-900"
				num={4}
			/>
			<Section
				pretitle="Friday"
				title="Time off makes time on more powerful."
				body="Connect with yourself and your community – we’ve got your tomorrow covered so that you can take time to recharge today."
				textColorMain="text-white"
				bgMain="bg-blue-900"
				textColorSecondary="text-yellow-400"
				bgSecondary="bg-blue-500"
				num={5}
			/>
		</main>
	);
}
