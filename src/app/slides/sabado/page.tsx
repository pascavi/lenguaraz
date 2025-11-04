"use client";

import React from "react";
import { Cards } from "@/templates";

const CARDS = [
	{
		time: "11:00h",
		day: "Sábado 8",
		location: "MUBAM, Murcia",
		title: "Literatura infantil italiana",
		speakers: [{ name: "Alessandro Montagnana", desc: "Autor de libros infantiles ilustrados" }],
		additional: "Actividad de cuentacuentos",
		images: ["/images/faces/montagnana.png"]
	},
	{
		time: "17:30h",
		day: "Sábado 8",
		location: "MUBAM, Murcia",
		title: "Fenómeno Elena Ferrante",
		speakers: [
			{ name: "Carmen Pujante Segura", desc: "Catedrática de literatura en la UMU" },
			{ name: "María Reyes Ferrer", desc: "Profesora en la UMU" }
		],
		images: ["/images/faces/pujante.png", "/images/faces/ferrer.png"]
	},
	{
		time: "19:00h",
		day: "Sábado 8",
		location: "MUBAM, Murcia",
		title: "Encuentro literario",
		speakers: [
			{ name: "Valentina Colonna", desc: "Poeta, pianista e investigadora" },
			{ name: "Miguel Ángel Hernández", desc: "Escritor y profesor en la UMU" }
		],

		images: ["/images/faces/colonna.png", "/images/faces/hernandez.png"]
	}
];

const Page = () => {
	return <Cards cards={CARDS} />;
};

export default Page;
