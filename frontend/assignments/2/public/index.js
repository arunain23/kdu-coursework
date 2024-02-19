
const postBtn = document.getElementById('post-tweet');
const fileSelector = document.getElementById('file-selected');
const tweetMessage = document.getElementById('tweet-message');
postBtn.addEventListener('click', () => {

  const message = tweetMessage.value;
  let file = null;
  if(fileSelector.files && fileSelector.files.length){
    file = fileSelector.files[0];
  }

  const user = JSON.parse(localStorage.getItem('user'));

  const formData = new FormData();
  formData.append('file', file);
  formData.append('message', message);
  formData.append('user_id', user.user_id);
  formData.append('name', user.user_name);
  formData.append('image_url', user.profile_url);

  fetch('http://localhost:5000/api/post', {
      method:'POST',
      body: formData,
  })
  .then(res => {
    console.log('res: ', res);
  })
  .catch(err => {
    console.log("Error while posting tweet: ", err);
  })

  tweetMessage.value = '';
  fileSelector.files = [];
});




document.addEventListener("DOMContentLoaded", function() {
  let page = 1;
  let loading = false;

  function fetchPosts() {
    if (!loading) {
      loading = true;
      fetch(`http://localhost:5000/api/posts`)
        .then(response => response.json())
        .then(
             (posts) =>{
                const pageno = parseInt(page) || 1;
                const perPage = 5;
                const startIndex = (page - 1) * perPage;
                const endIndex = startIndex + perPage;

                const paginatedPosts = posts.slice(startIndex, endIndex);

                return ({
                    pageno,
                    totalPosts: posts.length,
                    totalPages: Math.ceil(posts.length / perPage),
                    posts: paginatedPosts,
                });
             } 
        )
        .then(data => {
            console.log("hello here");
          console.log(data);

          loading = false;
        
          const tweetsContainer = document.querySelector(".tweets-container");
          const loadMoreMarker = document.getElementById("load-more-marker");
          
         
          data.posts.forEach(post => {
            const tweetElement = createTweetElement(post);
           
            tweetsContainer.appendChild(tweetElement);


          });
        

          page++;
        })
        .catch(error => {
          loading = false;
          console.error('Error fetching posts:', error);
        });
    }
  }

  function isImage(url){
    const u = url.toLowerCase();
    let isImage = false;
    ['.jpg', '.jpeg', '.png', '.webp'].forEach(ext => {
      if(u.includes(ext)){
        isImage = true;
      }
    })
    return isImage;
  }

  function createTweetElement(post) {
  
    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweets');
  
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-pics');
  
    const profileImage = document.createElement('img');
    profileImage.src = post.image_url;
    profileImage.alt = 'profile-pics';
    userDiv.appendChild(profileImage);
    
  
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('user-content-box');
  
    const namesDiv = document.createElement('div');
    namesDiv.classList.add('user-names');
  
    const fullName = document.createElement('p');
    fullName.classList.add('full-name');
    fullName.textContent = post.name;
  
    const userName = document.createElement('p');
    userName.classList.add('user-name');
    userName.textContent = `@${post.user_id}`;
  
   
  
    namesDiv.appendChild(fullName);
    namesDiv.appendChild(userName);

  
    contentDiv.appendChild(namesDiv);
  
    const contentText = document.createElement('div');
    contentText.classList.add('user-content');
    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = post.message;

    
    contentText.appendChild(contentParagraph);

    const url = post.post_url;
    if(url && isImage(url)){
      const img = document.createElement('img');
      img.setAttribute('src', url);
      contentText.appendChild(img);
      console.log("image loading...")
    }else if(url){
      console.log("url: ", url);
      const vid = document.createElement('video');
      vid.setAttribute('src', url);
      contentText.appendChild(vid);
    }
    contentDiv.appendChild(contentText);

    
    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('content-icons');
   
  
   
    tweetDiv.appendChild(userDiv);
    tweetDiv.appendChild(contentDiv);
    tweetDiv.appendChild(iconsDiv);
  
    return tweetDiv;
    
  }
  
  
  fetchPosts();
  
  
  window.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    setTimeout(fetchPosts, 2000);
    }
  });
});
