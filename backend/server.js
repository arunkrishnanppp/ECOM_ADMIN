import express from 'express'

const app=express()

app.listen(5000,console.log('Server is up and running'))


app.get('/',(req,res)=>{
    console.log('test API')
    res.send('API IS RUNNING..')
})