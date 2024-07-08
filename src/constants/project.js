import { FunderLabel, ViewLink, DateLabel } from '@/components/common/styles'
export const columns=[
    {title: 'Name', dataIndex: 'name', key: 'name'},
    {title: 'Funders', dataIndex: 'funders', key: 'funders', render: (text) => (<FunderLabel funder={text}>{text}</FunderLabel> ) },
  {title: 'Start - End date', dataIndex: 'date', key: 'date', render: (date) => (<DateLabel date={date}>{date}</DateLabel> ) },
  {title: 'Project budget (USD $)', dataIndex: 'budget', key: 'budget', render: (amt) => (<DateLabel budget={amt}>{amt}</DateLabel> ) },
  {title: 'Country', dataIndex: 'country', key: 'country', render: (name) => (<DateLabel country={name}>{name}</DateLabel> ) },
  {title: '', dataIndex: 'view', key: 'view', render: () => <ViewLink>View</ViewLink> },
];

export const data=[
    {key: '1', name: 'Green Agriculture Monitoring', funders: 'GEF', date: 'Jan 6, 2022 – Jan 6, 2024', budget: '$2,000,000', country: 'Thailand', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}], leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]},
    {key: '2', name: 'Binford Ltd.', funders: 'EFF', date: 'Oct 6, 2022 – Oct 6, 2024', budget: '$1,004,500', country: 'Peru', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}], leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]},
    {key: '3', name: 'Barone LLC.', funders: 'GEF', date: 'Sep 23, 2021 – Sep 23, 2026', budget: '$4,013,216', country: 'Myanmar', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}], leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]},
    {key: '4', name: 'Acme Co.', funders: 'EFF', date: 'May 24, 2020 – Feb 1, 2023', budget: '$2,266,512', country: 'Republic of Korea', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}],  leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]},
    {key: '5', name: 'Biffco Enterprises Ltd.', funders: 'GEF', date: 'May 24, 2019 – May 24, 2022', budget: '$1,822,130', country: 'Vietnam', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}], leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]},
    {key: '6', name: 'Abstergo Ltd.', funders: 'EFF', date: 'Sep 21, 2018 – Sep 21, 2021', budget: '$2,411,818', country: 'Cambodia', target: '98', status: 'Ongoing', leftimage: [{src: '/assets/photos/chartleftimg_1.png'}, {src: '/assets/photos/chartleftimg_2.png'}], rightimage: [{src: '/assets/photos/chartrightimg_1.png'}, {src: '/assets/photos/chartrightimg_2.png'}],  leftdescription: [{description: 'Targets and Achievements'}, {description: 'Target and Achievements by SDGs'}], rightdescription: [{description: 'Completion by Outputs'},{description: 'Chart'}]}, 
];

export const fetchedDetails = [
    { title: 'Projects', count: 25 },
    { title: 'Completed', count: 14 },
    { title: 'Ongoing', count: 9 },
    { title: 'Countries', count: 6 },
    { title: 'Overall budget', count: '$21,000,000' },
];
