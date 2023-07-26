const Pool = require("pg").Pool;

const pool = new Pool({
	user: "mbsalmane",
	password: "Salmane132456",
	host: "localhost",
	port: "5432",
	database: "designmall"
})

module.exports = pool;