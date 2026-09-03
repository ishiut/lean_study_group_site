// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [
				starlightBlog(), 
			], 
			sidebar: [
				{
					label: 'Technical documents', 
					items: [
						{ autogenerate: {directory: 'guides'} }, 
					], 
				}, 
			], 
		}),
	],
});
