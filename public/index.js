var send_btn = document.getElementById('contact_btn');

send_btn.addEventListener('click',() => {
    var userName = document.getElementById('name');
    var userEmail = document.getElementById('email');
    var comment = document.getElementById('comment');

    var contactErrMsg = document.getElementById('contact_err_msg');
    var contactSuccessfulMsg = document.getElementById('contact_ok');

    if (userName.value == '' || userEmail.value == '' || comment.value == ''){
        if (userName.value == ''){
            userName.style.border = '2px solid #dc2f02';
        }
        else {
            userName.style.border = 'none';
        }
        if (userEmail.value == ''){
            userEmail.style.border = '2px solid #dc2f02';
        }
        else {
            userEmail.style.border = 'none';
        }
        if (comment.value == ''){
            comment.style.border = '2px solid #dc2f02';
        }
        else {
            comment.style.border = 'none';
        }


        contactSuccessfulMsg.style.display = 'none';
        contactErrMsg.style.display = 'block';
        contactErrMsg.style.animationName = 'slideover';
        return;
    }
    else {
        contactErrMsg.style.display = 'none';
    }




    userName.style.border = 'none';
    userEmail.style.border = 'none';
    comment.style.border = 'none';

    if (userEmail.value.includes('@gmail.com') == false){
        contactErrMsg.style.display = 'block';
        contactErrMsg.innerText = 'Please enter a valid email address';
        return;
    }
    emailjs.send("service_dao0xr9","template_xqqwb9l",{
        from_name : userName.value,
        email_id : userEmail.value,
        message : comment.value
    });

    contactSuccessfulMsg.style.display = 'block';
    contactSuccessfulMsg.style.animationName = 'slideover';
})


var addCommentBtn = document.getElementById('post_comments_btn');
var commentForm = document.getElementById('comment_form');
var commentSection = document.getElementById('comment_section');
var closeBtn = document.getElementById('close_btn');
var commentHeading = document.getElementById('comment_heading');

addCommentBtn.addEventListener('click',() => {
    

    if (commentForm.style.display == 'none'){
        commentForm.style.display = 'flex';
        commentForm.style.animationName = 'commentslider';
        addCommentBtn.style.opacity = '0.6';
        addCommentBtn.disabled = true;
        addCommentBtn.style.pointerEvents = 'none';
    }
    else {
        commentForm.style.display = 'none';
    }
})

var postComment = document.getElementById('post_comment_btn');
const userName = document.getElementById('user_name');
const userComment = document.getElementById('user_comment');
const commentErrMsg = document.getElementById('comment_err_msg');

const allComments = document.getElementById('comments');
const getComments = async () => {

    try {
        const comments = await axios.get('/comments');



        if (comments.data.msg.length == 0){
            var text = document.createElement('h1');
            text.innerText = "No Comments";
            text.classList.add('no_comments');
            allComments.append(text);
        }
        else {
            allComments.innerHTML = '';

            for (let i = 0; i < comments.data.msg.length; i++){
                
                const div = document.createElement('div');
                const nameElement = document.createElement('h2');
                nameElement.innerText = comments.data.msg[i].name;
                const commentElement = document.createElement('p');
                commentElement.innerText = comments.data.msg[i].comment;

                const combinedDiv = document.createElement('div');
                combinedDiv.append(nameElement);
                combinedDiv.append(commentElement);
                combinedDiv.classList.add('comment_div');

                allComments.append(combinedDiv);

            }

        }
    } catch (err){
        console.log(err);
    }
}


closeBtn.addEventListener('click',() => {
    commentForm.style.display = 'none';
    addCommentBtn.style.opacity = '1';
    addCommentBtn.disabled = false;
    addCommentBtn.style.pointerEvents = 'auto';
    userName.value = '';
    userComment.value = '';
    commentErrMsg.style.display = 'none';

    postComment.value = "Post Comment";
    postComment.disabled = false;
    postComment.classList.remove('after_post_comment');
})

postComment.addEventListener('click',async (e) => {
    e.preventDefault();
    

    if (userName.value == '' || userComment.value == ''){
        commentErrMsg.style.display = 'block';
    }
    else {
        commentErrMsg.style.display = 'none';

        try {
            const comment = await axios.post('/comments',{
                name : userName.value,
                comment : userComment.value
            })
        } catch (err){
          console.log(err);  
        }

        postComment.value = "Comment Added";
        postComment.disabled = true;
        postComment.classList.add('after_post_comment');

        getComments();
    }
})






getComments();