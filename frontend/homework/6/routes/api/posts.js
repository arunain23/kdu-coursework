const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const posts=require('../../Posts');


router.get("/posts",(req,res)=>{
    res.json(posts);
})

router.get("/post/:id", (req,res)=>{
    const search_id=req.params.id;
    const post=posts.filter((x)=> x.id=== parseInt(search_id));
    if(post.length===0){
        res.status(404).json({
            "message":`No post with id of ${search_id} exists`
        });
    }
    res.json(post[0]); // as filter returns the array
    
})

router.post("/posts",(req,res)=>{
    const newPost ={
        id:uuid.v4(),
        age:req.body.age,
        name:req.body.name
    }
    // const newpost=req.body;
    if(!newPost.age || !newPost.name){
        return res.status(400).json({"message":'Please include age and name'});
    }
    posts.push(newPost);

    res.json(newPost);
})


router.put("/post/:id", (req,res)=>{
    const search_id=req.params.id;
    const found=posts.some(post => post.id ===parseInt(search_id));
    if(found){
        const updatedPost=req.body;
        posts.forEach(post => {
            if(post.id==parseInt(search_id)){
                post.age=updatedPost.age ? updatedPost.age :post.age;
                post.name=updatedPost.name ? updatedPost.name :post.name;
                res.json({msg:'Post updated',post});
            }
        });
    } else{
        return res.status(400).json({"message":'Please include age and name'});

    }  
    
})


router.delete("/post/:id", (req,res)=>{
    const search_id=req.params.id;
    const found=posts.some(post => post.id ===parseInt(search_id));
    if(found){
        res.json({msg:'Post deleted',posts:posts.filter(post =>post.id!=parseInt(search_id))});
    } else{

        res.status(404).json({
            "message":`No post with id of ${search_id} exists`
         });  

    }  
    
})

module.exports =router;