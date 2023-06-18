import { NextApiRequest, NextApiResponse } from 'next';


//i highly recommend to check the official faker docs : https://fakerjs.dev/guide/usage.html
//Easy peasy lemon squeezy
import { faker } from '@faker-js/faker';

function createRandomUser() {
    return {
        sex : faker.person.sexType(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.past(),
        registeredAt: faker.date.past(),
    };
}

const generateRandomUsers = (count: number) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const user = createRandomUser();
        users.push(user);
    }
    return users;
};
const users = generateRandomUsers(20);


export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ message: 'Hello, i am using Faker!', users });
};