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


var addCommentBtn = document.getElementById('add_comment_btn');
var commentForm = document.getElementById('comment_form');
var commentSection = document.getElementById('comment_section');
var closeBtn = document.getElementById('close_btn');
var commentHeading = document.getElementById('comment_heading');

addCommentBtn.addEventListener('click',() => {
    

    if (commentForm.style.display == 'none'){
        commentForm.style.display = 'flex';
        addCommentBtn.style.opacity = '0.6';
        commentHeading.style.opacity = '0.6';
        addCommentBtn.disabled = true;
        addCommentBtn.style.pointerEvents = 'none';
    }
    else {
        commentForm.style.display = 'none';
    }
})



closeBtn.addEventListener('click',() => {
    commentForm.style.display = 'none';
    commentHeading.style.opacity = '1';
    addCommentBtn.style.opacity = '1';
    addCommentBtn.disabled = false;
    addCommentBtn.style.pointerEvents = 'auto';

})