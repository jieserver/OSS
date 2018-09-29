const fs = require('fs')
const Express = require('express')

const _ = require('lodash')
const store = require('./store.json')
const level = require('level')
const leveldb = _.reduce(store.leveldb,(r,v,k)=>{
    r[k] = level(v.location,v.options)
    return r
},{})
leveldb['test'].put('t','testValue')
const app = new Express()

app.use('/',(req,res)=>{
    var mdContent = fs.readFileSync(`./readme.md`).toString()
    var html = mdContent.slice(mdContent.indexOf('~~~')+3,mdContent.lastIndexOf('~~~'))
    var _back_ = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+(690900 * Math.random()|0)+'.jpg',
        _content_ = require('marked')(mdContent)
    res.end(_.reduce({_back_,_content_},(r,v,k)=>r.replace(RegExp(k,'g'),v),html))
})
app.get('/:db/:key',(req,res)=>{
    var {db,key} = req.params
    if(!leveldb[db]) return res.status(404)
    leveldb[db].get(key)
    .then(r=>res.json(r))
    .catch(e=>res.json(e))
})
app.use('/op/create/:db',(req,res)=>{

})

const http = app.listen(8799)



