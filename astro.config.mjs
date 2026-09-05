// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	site: 'https://ishiut.github.io/', 
	integrations: [
		starlight({
			title: "Tetsuya Ishiu's page",
			plugins: [
				starlightBlog(), 
			], 
			sidebar: [
				{
					label: 'Documents', 
					items: [
						{ autogenerate: {directory: 'lean-sg'} }, 
					], 
				}, 
			], 
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
