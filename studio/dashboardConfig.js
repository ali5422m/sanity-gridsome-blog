export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c110dbf22cef3c82b4217e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-dr3cdbnz',
                  apiId: 'e21eed71-8915-4c63-9d57-984cc91c9474'
                },
                {
                  buildHookId: '62c110db355a9e379011199d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ap3txsk1',
                  apiId: '2be5acb5-3cf6-4529-a773-21803f08e226'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ali5422m/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ap3txsk1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
