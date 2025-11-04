"use client";

import React from "react";
import { Cards } from "@/templates";

const CARDS = [
	{
		time: "10:30h",
		day: "Miércoles 5",
		location: "Centro Penitenciario Murcia II",
		title: "Escribir la utopía",
		speakers: [{ name: "Patrizia Patrizi", desc: "Profesora en la Universidad de Sassari" }],
		additional: "Colabora: Ángeles Carnacea",
		images: ["/images/faces/patrizi.png", "/images/faces/carnacea.png"]
	},
	{
		time: "18:00h",
		day: "Miércoles 5",
		location: "MUBAM, Murcia",
		title: "Escribir la utopía",
		speakers: [{ name: "Patrizia Patrizi", desc: "Profesora en la Universidad de Sassari" }],
		additional: "Colabora: Jorge Ollero",
		images: ["/images/faces/patrizi.png"]
	}
];

const Page = () => {
	return <Cards cards={CARDS} />;
};

export default Page;
