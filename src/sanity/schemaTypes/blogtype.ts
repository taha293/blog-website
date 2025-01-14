const blogPost = {
    name: 'blogs',
    type: 'document',
    title: 'Blogs',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Title',
            validation: (Rule:any) => Rule.required().error('This field is required!'),
        },{
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: (Rule:any) => Rule.required().error('This field is required!'),
            options: {
              source: 'heading',
              maxLength: 200, 
              slugify: (input: string) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },{
            name: 'blog',
            title: 'blog',
            type: 'array',
            validation: (Rule:any) => Rule.required().error('This field is required!'),
            of: [
              {
                type: 'block',
              },
            ],
          },{
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
              },
            validation: (Rule:any) => Rule.required().error('This field is required!'),
        },{
            name: 'date',
            type: 'string',
            title: 'Date',
            validation: (Rule:any) => Rule.required().error('This field is required!'),
        }
    ]
}

export default blogPost