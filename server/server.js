const express = require('express');
const app = express()

//solving access block
const cours = require('cors')
app.use(cours())

app.get('/fetch-xAxisData', (req, res) => {
    res.json({
        "xAxisData": [
            {
                name: 'Jan.',
                sale: '90000'
            },
            {
                name: 'Feb.',
                sale: '20000'
            },
            {
                name: 'Mar.',
                sale: '60000'
            },
            {
                name: 'Apr.',
                sale: '25000'
            },
            {
                name: 'May',
                sale: '66000'
            },
            {
                name: 'Jun.',
                sale: '90000'
            },
            {
                name: 'Jul.',
                sale: '35000'
            },
            {
                name: 'Aug',
                sale: '45000'
            },
            {
                name: 'Sep.',
                sale: '55000'
            },
            {
                name: 'Oct.',
                sale: '10000'
            },
            {
                name: 'Nov.',
                sale: '18000'
            },
            {
                name: 'Dec.',
                sale: '33000'
            },]
    })
})


app.get('/fetch-users', (req, res) => {
    res.json({
        "newUsers": [
            { id: 1, name: "Rose P. Winn", job: "Artificial inseminator", profileImg: '/images/new-users/60.jpg' },
            { id: 2, name: "Carol W. Murphy", job: "Job analysis manager", profileImg: '/images/new-users/16.jpg' },
            { id: 3, name: "Dominic M. Cruz", job: "Obstetric sonographer", profileImg: '/images/new-users/23.jpg' },
            { id: 4, name: "Danny J. Pinto", job: "Rough carpenter", profileImg: '/images/new-users/6.jpg' },
            { id: 5, name: "Gloria E. Faber", job: "Airline steward", profileImg: '/images/new-users/77.jpg' },
            { id: 6, name: "Jeff D. Davis", job: "Safety engineer", profileImg: '/images/new-users/38.jpg' },
            { id: 7, name: "Robert V. Jones", job: "Lead abatement worker", profileImg: '/images/new-users/78.jpg' },
            { id: 8, name: "Diana M. Tiffany", job: "Bureau of Diplomatic Security special agent", profileImg: '/images/new-users/67.jpg' },
        ]
    })
})
app.get('/fetch-transactions', (req, res) => {
    res.json({
        "transactions": [
            { id: 1, img: '/images/transactions/22.jpg', name: 'Paul A Roberts', date: '2 jul 2024', amount: '$4,200', status: 'Approved' },
            { id: 2, img: '/images/transactions/33.jpg', name: 'Joy L Steward', date: '1 jul 2024', amount: '$2,200', status: 'Pending' },
            { id: 3, img: '/images/transactions/31.jpg', name: 'Diane D Odell', date: '31 May 2025', amount: '$100', status: 'Decline' },
            { id: 4, img: '/images/transactions/3.jpg', name: 'Bernadette A Tucker', date: '30 May 2025', amount: '$1000', status: 'Approved' },
            { id: 5, img: '/images/transactions/83.jpg', name: 'James P Moore', date: '29 May 2025', amount: '$8000', status: 'Decline' },
            { id: 6, img: '/images/transactions/26.jpg', name: 'Paula L Wolford', date: '28 May 2025', amount: '$20', status: 'Approved' },
            { id: 7, img: '/images/transactions/79.jpg', name: 'Harold P Cambra', date: '27 May 2025', amount: '$622', status: 'Approved' },
            { id: 8, img: '/images/transactions/76.jpg', name: 'Jana W Hunter', date: '26 May 2025', amount: '$6517', status: 'Pending' },
            { id: 9, img: '/images/transactions/26.jpg', name: 'Paula L Wolford', date: '28 May 2025', amount: '$20', status: 'Approved' },
            { id: 10, img: '/images/transactions/79.jpg', name: 'Harold P Cambra', date: '27 May 2025', amount: '$622', status: 'Approved' }
        ]
    })
})

app.get('/fetch-user-list', (req, res) => {
    res.json({
        "users": [
            { id: 1, avatar: '/images/new-users/60.jpg', userName: 'Rose P. Winn', email: 'rose@email.com', status: 'online', transaction: '230$' },
            { id: 2, avatar: '/images/new-users/16.jpg', userName: 'Carol W. Murphy', email: 'cacrol@email.com', status: 'offline', transaction: '2$' },
            { id: 3, avatar: '/images/new-users/23.jpg', userName: 'Dominic M. Cruz', email: 'Dominic@email.com', status: 'offline', transaction: '60$' },
            { id: 4, avatar: '/images/new-users/6.jpg', userName: 'Danny J. Pinto', email: 'Danny@email.com', status: 'online', transaction: '120$' },
            { id: 5, avatar: '/images/new-users/77.jpg', userName: 'Gloria E. Faber', email: 'Gloria@email.com', status: 'offline', transaction: '25$' },
            { id: 6, avatar: '/images/new-users/38.jpg', userName: 'Jeff D. Davis', email: 'Jeff@email.com', status: 'online', transaction: '98$' },
            { id: 7, avatar: '/images/new-users/78.jpg', userName: 'Robert V. Jones', email: 'Robert@email.com', status: 'online', transaction: '652$' },
            { id: 8, avatar: '/images/new-users/67.jpg', userName: 'Diana M. Tiffany', email: 'Diana@email.com', status: 'offline', transaction: '5$' },
            { id: 9, avatar: '/images/transactions/22.jpg', userName: 'Paul A Roberts', email: 'Paul@email.com', status: 'offline', transaction: '$4,200' },
            { id: 10, avatar: '/images/transactions/33.jpg', userName: 'Joy L Steward', email: 'Joy@email.com', status: 'online', transaction: '$2,200' },
            { id: 11, avatar: '/images/transactions/31.jpg', userName: 'Diane D Odell', email: 'Diane@email.com', status: 'offline', transaction: '$100' },
            { id: 12, avatar: '/images/transactions/3.jpg', userName: 'Bernadette A Tucker', email: 'Bernadette@email.com', status: 'online', transaction: '$1000' },
            { id: 13, avatar: '/images/transactions/83.jpg', userName: 'James P Moore', email: 'James@email.com', status: 'offline', transaction: '$8000' },
            { id: 14, avatar: '/images/transactions/26.jpg', userName: "Paula L Wolford", email: 'Paula@email.com', status: 'online', transaction: '$20' },
            { id: 15, avatar: '/images/transactions/79.jpg', userName: 'Harold P Cambra', email: 'Harold@email.com', status: 'offline', transaction: '$622' },
            { id: 16, avatar: '/images/transactions/76.jpg', userName: 'Jana W Hunter', email: 'Jana@email.com', status: 'online', transaction: '$6517' },
            { id: 17, avatar: '/images/transactions/26.jpg', userName: 'Paula L Wolford', email: 'Paula@email.com', status: 'online', transaction: '$20' },
            { id: 18, avatar: '/images/transactions/79.jpg', userName: 'Harold P Cambra', email: 'Harold@email.com', status: 'offline', transaction: '$622' },
        ]
    })
})


app.get('/fetch-products', (req, res) => {
    res.json({
        "products": [
            { id: 1, img: '/images/products/1.jpg', name: 'Asus', price: '$4,200', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 2, img: '/images/products/2.jpg', name: 'Windows', price: '$2,200', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'no' ,inStock:'Yes' },
            { id: 3, img: '/images/products/3.jpg', name: 'HP NoteBook', price: '$100', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'no' },
            { id: 4, img: '/images/products/4.jpg', name: 'HP Zbook', price: '$1000', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 5, img: '/images/products/5.jpg', name: 'HP OMEN', price: '$8000', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 6, img: '/images/products/6.png', name: 'ASUS Gaming', price: '$2000', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 7, img: '/images/products/7.jpg', name: 'Lenovo p5024', price: '$622', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'no' },
            { id: 8, img: '/images/products/8.jpg', name: 'Lenovo f54', price: '$6517', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'no' ,inStock:'Yes' },
            { id: 9, img: '/images/products/9.jpg', name: 'Lenovo e504', price: '$6000', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 10, img: '/images/products/10.jpg', name: 'MacBook', price: '$2400', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' },
            { id: 10, img: '/images/products/11.jpg', name: 'MacBook pro', price: '$2345', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'no' },
            { id: 10, img: '/images/products/12.jpg', name: 'MacBook pro 2', price: '$622', desc: "Lorem Ipsum Lorem Ipsum Lorem", active:'Yes' ,inStock:'Yes' }
        ]
    })
})


app.get('/fetch-product-chart-data', (req, res) => {
    res.json({
        "data": [
            {
                name: 'Jan.',
                sale: '2000'
            },
            {
                name: 'Feb.',
                sale: '4000'
            },
            {
                name: 'Mar.',
                sale: '0'
            },
            {
                name: 'Apr.',
                sale: '4000'
            },
        ]
    })
})


app.listen(5000, () => {
    console.log('server started on port 5000')
})