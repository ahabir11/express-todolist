var config = {
    port: process.env.PORT || 2000,
    // db: process.env.MONGOLAB_URI || "mongodb://localhost/todoapi",
    db: process.env.MONGOLAB_URI || "mongodb://akther:123456@ds115045.mlab.com:15045/express-todolist",
    test_port: 2001,
    //test_db: "mongodb://localhost/todoapi_test"	
    test_db: "mongodb://akther:123456@ds115045.mlab.com:15045/express-todolist"
}
module.exports = config;