import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const servicesList = [
	{ name: "Software Development"},
	{ name: "Consultancy"},
	{ name: "Digitalization Initiatives"},
	{ name: "Digital Business Cards"},
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					<p className="text-m duration-500 text-zinc-500 hover:text-zinc-300">
						{"site under construction".toUpperCase()}
					</p>
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				SonicLynxDigital
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{servicesList.map((service, index) => (
						<li key={index} className="text-m duration-500 text-zinc-500 hover:text-zinc-300">
							{service.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
