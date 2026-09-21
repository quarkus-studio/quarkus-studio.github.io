// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://quarkus-studio.github.io',
	integrations: [
		starlight({
			title: 'Quarkus Studio',
			favicon: '/favicon/favicon.ico',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon/favicon-16x16.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/favicon/apple-touch-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/favicon/site.webmanifest',
					},
				},
			],
			logo: {
				src: './src/assets/quarkus-studio.jpg',
				replacesTitle: false,
			},
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/maratib/quarkus-studio' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/maratibali/' },
				{ icon: 'external', label: 'Open VSX', href: 'https://open-vsx.org/extension/maratib/quarkus-studio' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Initial Setup', slug: 'guides/initial-setup' },
						{ label: 'Project Builder', slug: 'guides/project-builder' },
					],
				},
				{
					label: 'User Guides',
					items: [
						{ label: 'Apps View & Dev Mode', slug: 'guides/apps-view' },
						{ label: 'Dev Services Manager', slug: 'guides/dev-services' },
						{ label: 'Panache Entity & REST', slug: 'guides/panache-generator' },
						{ label: 'Continuous Testing', slug: 'guides/continuous-testing' },
						{ label: 'Config Assistant & Cloud', slug: 'guides/config-assistant' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Snippets Reference', slug: 'reference/snippets' },
						{ label: 'Settings Reference', slug: 'reference/configuration' },
					],
				},
			],
		}),
	],
});
