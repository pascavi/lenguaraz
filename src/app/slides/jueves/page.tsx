"use client";

import React from "react";
import { Cards } from "@/templates";

const CARDS = [
	{
		time: "17:00h",
		day: "Jueves 6",
		location: "MUBAM, Murcia",
		title: "Inaguración del Lenguaraz",
		speakers: [
			{ name: "Jorge Ollero", desc: "" },
			{ name: "Ana Sánchez", desc: "" }
		],
		additional: "Organizadores del Festival Lenguaraz",

		images: ["/images/faces/ollero.png", "/images/faces/sanchez.png"]
	},
	{
		time: "17:30h",
		day: "Jueves 6",
		location: "MUBAM, Murcia",
		title: "Narrar con liberación",
		speakers: [
			{ name: "Sandra Ollo", desc: "Directora de la editorial Acantilado" },
			{ name: "Lola López Mondéjar", desc: "Escritora y psicoanalista" }
		],
		images: ["/images/faces/ollo.png", "/images/faces/mondejar.png"]
	},
	{
		time: "19:00h",
		day: "Jueves 6",
		location: "MUBAM, Murcia",
		title: "Diálogo sobre la lengua italiana",
		speakers: [
			{ name: "Antonio Candeloro", desc: "Sociedad Dante Alighieri Murcia" },
			{ name: "Mª Belén Hernández", desc: "Catedrática de filología italiana en la UMU" }
		],
		images: ["/images/faces/candeloro.png", "/images/faces/gonzalez.png"]
	}
];

const Page = () => {
	return <Cards cards={CARDS} />;
};

export default Page;
