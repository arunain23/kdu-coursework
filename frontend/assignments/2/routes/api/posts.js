const express = require('express');
const uuid = require('uuid');
const path =require('path')
const router = express.Router();
// const {posts, addPost}=require('../../Posts');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/post/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({
    storage: storage,
});


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

// router.post("/posts",(req,res)=>{
//     const newPost ={
//         id:uuid.v4(),
//         age:req.body.age,
//         name:req.body.name
//     }
//     // const newpost=req.body;
//     if(!newPost.age || !newPost.name){
//         return res.status(400).json({"message":'Please include age and name'});
//     }
//     posts.push(newPost);

//     res.json(newPost);
// })


// File uploader with post
router.post('/post', upload.single('file'), (req, res) => {

    const file = req.file;
    const path = file.path;

    const { name = '', message = '', user_id = '', image_url = ''} = req.body;

    const post = {
        image_url,
        post_url: '/' + path,
        name,
        message,
        user_id
    }

    addPost(post);

    console.log("<====== ALL POST ==========>");
    console.log(posts);

    return res.status(200).json({
        message: "post uploaded...",
        post,
    })
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

let posts=[
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person1.png",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"
              
    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person2.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person3.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person5.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person1.png",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"
              
    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person2.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person3.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person5.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person1.png",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"
              
    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person2.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person3.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person5.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person1.png",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"
              
    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person2.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person3.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person5.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },


    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person1.png",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"
              
    },
    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person2.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person3.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

    {
        "user_id":"imsheryaji",
        "image_url": "/public/pics/person5.jpg",
        "name":"Shreya Verma",
        "message":  "excepturi impedit at maxime itaque dolor quisquam sit? Accusamus laudantium aliquam repellat ab dolorum. Molestiae quis unde assumenda possimus?"

    },

];


const addPost = (post) => {
    posts = [post, ...posts];
}



