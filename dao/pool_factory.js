import { createPool } from 'mysql';

const pool = createPool({
    connectionLimit: 20,
    host: '',
    user: '',
    password: '',
    database: ''
});

console.log('pool => criado');

process.on('SIGINT', () =>
    pool.end(err => {
        if(err) return console.log(err);
        process.exit(0);
    })
);

export default pool;