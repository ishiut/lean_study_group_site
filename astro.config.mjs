// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://ishiut.github.io/', 
	base: '/lean_study_group_site', 
	integrations: [
		starlight({
			title: 'Miami Lean Study Group',
			plugins: [
				starlightBlog(), 
			], 
			sidebar: [
				{
					label: 'Documents', 
					items: [
						{ autogenerate: {directory: 'lean'} }, 
					], 
				}, 
			], 
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
