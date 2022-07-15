const client = require('./connection.js')
const express = require('express')
const app = express()

app.listen(3300, () => {
    console.log("le serveur est à l'écoute du port 3300")
})
client.connect()

app.get('/clients', (req, res)=>{
    client.query(`Select * from clients`, (err, result )=>{
        if(!err){
            res.send(result.rows);
            console.log(result.rows);
                }
    });
    client.end;
})

app.get('/clients/:id', (req,res) => {
    client.query(`Select * from clients where id=${rep.params.id}`, (err, result )=>{
        if(!err){
            res.send(result.rows);
            console.log(result.rows);
                }
    });
    client.end;
})

app.post('/clients', (req,res) => {
    const user = req.body;
    let insertQuery = `Insert into clients(id, lastname, firstname, role) values(${client.id}, '${client.firstname}', '${client.lastname}', '${client.role}')`
    client.query(insertQuery, (err, result )=>{
        if(!err){
            res.send("Insertion was successful");
        }else{ 
            console.log(err.message);
        }
            
    });
    client.end;
})

app.put('/clients/:id', (req,res) => {
    let user = req.body;
    let updateQuery = `update clients set firstname = '${client.id}', lastname = '${client.lastname}', id = '${client.id}', role = '${client.role}'`

    client.query(updateQuery, (err,res)=>{
        if(!err){
            res.send('Update was successful!')
        }else{
            console.log(err.message)
        }
    })
    client.end;
})

app.delete('/clients/:id', (req, res)=> {
    let insertQuery = `delete from clients where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


client.connect();