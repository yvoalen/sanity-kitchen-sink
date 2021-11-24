export default {
  widgets: [
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
                  buildHookId: '619e394b2019c742510b2212',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oipekqh3',
                  apiId: 'be960304-a757-4829-b4d3-54862d3df138'
                },
                {
                  buildHookId: '619e394b25633b4e78e2fad7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4i73ae1r',
                  apiId: '5b547de7-7ee0-414e-ae39-96833d3998e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yvoalen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4i73ae1r.netlify.app', category: 'apps'}
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
