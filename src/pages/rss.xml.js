import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./post/personal-blog/*.mdx', { eager: true })

const posts = Object.values(postImportResult);

export const get = () => rss({
  title: 'Aaron Blog & porfoilo',
  description: 'Welcome to my site',
  site: import.meta.env.SITE,
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  }))

})
