"use client";

import React from "react";
import { Cards } from "@/templates";

const CARDS = [
	{
		time: "12:00h",
		day: "Domingo 9",
		location: "MUBAM, Murcia",
		title: "Todo empezó en Italia",
		speakers: [
			{ name: "Steven Forti", desc: "Escritor y profesor en la UAB" },
			{ name: "Enric Juliana", desc: "Escritor y periodista" }
		],
		images: ["/images/faces/forti.png", "/images/faces/juliana.png"]
	},
	{
		time: "14:00h",
		day: "Domingo 9",
		location: "MUBAM, Murcia",
		title: "Clausura del Lenguaraz",
		speakers: [
			{ name: "Jorge Ollero", desc: "" },
			{ name: "Ana Sánchez", desc: "" }
		],
		additional: "Organizadores del Festival Lenguaraz",

		images: ["/images/faces/ollero.png", "/images/faces/sanchez.png"]
	}
];

const Page = () => {
	return <Cards cards={CARDS} />;
};

export default Page;
