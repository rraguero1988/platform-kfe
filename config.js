module.exports = {
   port:process.env.PORT || 3000,
   db:process.env.MONGODB || 'mongodb://localhost:27017/platform',
   options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
   },
   SECRET_TOKEN:'miclavesecreta'
}