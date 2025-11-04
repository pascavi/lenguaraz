"use client";

import React from "react";

import { Cards } from "@/templates";

const CARDS = [
	{
		time: "17:00h",
		day: "Viernes 7",
		location: "MUBAM, Murcia",
		title: "Ediciones bilingües",
		speakers: [
			{ name: "Ángel Erro", desc: "Poeta y traductor" },
			{ name: "José López Camarillas", desc: "Editorial Llibres de l'Encobert" }
		],
		images: ["/images/faces/erro.png", "/images/faces/camarillas.png"]
	},
	{
		time: "19:00h",
		day: "Viernes 7",
		location: "MUBAM, Murcia",
		title: "Ediciones bilingües",
		speakers: [
			{ name: "Jordi Martí Garcés", desc: "Editor en la editorial Blackie Books" },
			{ name: "Juan Carlos Abril", desc: "Poeta y traductor" }
		],
		images: ["/images/faces/marti.png", "/images/faces/abril.png"]
	},
	{
		time: "21:00h",
		day: "Viernes 7",
		location: "Café-bar El Sur",
		title: "La Tarantela Italiana",
		speakers: [{ name: "Lidia García García", desc: "Escritora e investigadora" }],
		additional: "Con la animación de DJ Lady Dilema",
		images: ["/images/faces/garcia.png", "/images/faces/dilema.png"]
	}
];

const Page = () => {
	return <Cards cards={CARDS} />;
};

export default Page;
