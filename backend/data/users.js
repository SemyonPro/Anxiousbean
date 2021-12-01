import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Sara Conor',
        email: 'sara@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Nikola Tesla',
        email: 'nikola@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users