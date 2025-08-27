import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://lenguarazfest.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		},
		{
			url: "https://lenguarazfest.com/el-festival",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: "https://lenguarazfest.com/los-libros",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		{
			url: "https://lenguarazfest.com/el-programa",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5
		},
		{
			url: "https://lenguarazfest.com/el-proyecto",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5
		}
	];
}
