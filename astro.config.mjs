import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs - Valzy',
			social: {
				youtube: 'https://youtube.com/@valzyofc',
			},
			sidebar: [
				{
					label: 'tutorial sczura',
					autogenerate: { directory: 'tutorial' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'tutorial',
					autogenerate: { directory: 'tutor' },
				},
			],
		}),
	],
});
