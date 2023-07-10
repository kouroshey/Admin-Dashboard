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




app.listen(5000, () => {
    console.log('server started on port 5000')
})