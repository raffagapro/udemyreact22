import { faker } from '@faker-js/faker';
import axios from 'axios';

export const createMockData = (ammaunt = 1) => {
    const mockData = [];
    for (let i = 0; i < ammaunt; i++) {
        let rDate = 'Today at '+ Math.floor(Math.random() * 12) +':00PM';
        mockData.push({
             id: i + 2,
             name: faker.name.findName(),
             date: rDate,
             comment: faker.hacker.phrase(),
             avatar: faker.image.avatar(),
             status: 'pending'
        });         
    }
    return mockData.sort((a, b) => {
        let dateA = a.date.split(' ')[2].split(':')[0];
        let dateB = b.date.split(' ')[2].split(':')[0];
        return dateB - dateA;
    });
}

export const unsplashAxios = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ' + process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    }
});

export const itemsAccord = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
    },
    {
        title: 'Why use React?',
        content: 'React is the best library for frontend',
    },
    {
        title: 'How do you use React?',
        content: 'With yours hands motherfuclker!',
    },
];