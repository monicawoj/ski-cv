export const CVData = {
    personalData: {
        name: 'Monica Wojciechowska',
        title: 'monica.wojciechowski@gmail.com',
        image: `${require('./cv_photo.jpg')}`,
        contacts: [
            { type: 'phone', value: '+48 (795) 098 721' },
            { type: 'website', value: 'https://www.reflectingreason.com' },
            { type: 'linkedin', value: 'linkedin.com/in/monicawoj' },
            { type: 'twitter', value: 'twitter.com/monica_woj' },
            { type: 'github', value: 'github.com/monicawoj' }
        ]
    },
    sections: [
        {
            type: 'text',
            title: 'Profile',
            content: 'Frontend Developer, Blogger, Speaker, Adventurer. Lifelong learner and fan of simplicity. Dual US / Polish citizen.',
            icon: 'usertie'
        },
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Systems Engineering (BSE)',
                    authority: 'University of Pennsylvania',
                    authorityWebSite: 'https://www.upenn.edu/',
                    rightSide: '2012 - 2016'
                },
                {
                    title: 'Economics (BSE)',
                    authority: 'The Wharton School of Business',
                    authorityWebSite: 'https://www.wharton.upenn.edu/',
                    rightSide: '2012 - 2016'
                }
            ]
        },
        {
            type: 'experiences-list',
            title: 'Work Experience',
            icon: 'archive',
            items: [
                {
                    title: 'Frontend Developer',
                    company: 'Netguru',
                    description: 'custom software development for European and US clients',
                    companyWebSite: 'https://www.netguru.com/',
                    companyMeta: '',
                    datesBetween: 'November 2018 - Present',
                },
                {
                    title: 'Data Visualization Engineer',
                    company: 'Wharton People Analytics',
                    description: 'development of custom web-based visual reporting tool',
                    companyWebSite: 'https://wpa.wharton.upenn.edu/',
                    companyMeta: '',
                    datesBetween: 'July 2018 - January 2019'
                },
                {
                    title: 'Marketing Analyst',
                    company: 'Mastercard',
                    description: 'Go-to-market strategy, lead generation, and thought leadership',
                    companyWebSite: 'https://www.mastercardservices.com/en',
                    companyMeta: 'Applied Predictive Technologies',
                    datesBetween: 'August 2016 - February 2018'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Outdoors Experience',
            description: 'My heart belongs to the mountains, lakes, and oceans that cover this beautiful world (and all fields, valleys, and dance floors in between)...',
            icon: 'cubes',
            items: ['Hiking', 'Skiing', 'Snowboarding', 'Kite-surfing', 'Swimming', 'Scuba', 'Muay Thai', 'Dance', 'and everything in between']
        },
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'English',
                    authorityMeta: 'Native'
                },
                {
                    authority: 'Polish',
                    authorityMeta: 'Native'
                },
                {
                    authority: 'Spanish',
                    authorityMeta: 'Intermediate'
                }
            ]
        },
        {
            type: 'common-list',
            title: 'Presentations',
            description: 'Speaker at local and international conferences',
            icon: 'comments',
            items: [
                {
                    title: 'NordicJS 2019',
                    authority: 'Hooked on D3: Creating Animated Charts with D3 and React Hooks',
                    authorityWebSite: 'https://www.youtube.com/watch?v=bQSDwPioK6Y&t=1s',
                    rightSide: 'Stockholm, Sweden'
                },
                {
                    title: 'React Advanced 2019',
                    authority: 'Data Visualization with D3 and React',
                    authorityWebSite: 'https://reactadvanced.com/#speakers',
                    rightSide: 'London, UK'
                },
                {
                    title: 'GrillJS 2019',
                    authority: 'The Art of Storythinking: Compelling Storytelling and Critical Thinking',
                    authorityWebSite: 'https://www.youtube.com/watch?v=wMfPxckTQ0A',
                    rightSide: 'Wrocław, Poland'
                }
            ]
        },
        {
            type: 'tag-list',
            title: 'Technical Skills',
            description: 'My mind belongs to deep conversations and translation: from idea to code, from data to art, from Polish to English...',
            icon: 'rocket',
            items: ['React', 'Javascript', 'D3', 'CSS', 'Gatsby', 'GraphQL', 'Wordpress', 'Translation of Poetry']
        },
    ]
}