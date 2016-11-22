function prepareEmail(to, subject, bodyText) {
    var form = document.createElement('form');
    var emaillink = 'mailto:' + escape(to.value) + '?Subject=' + escape(subject.value) + '&Body=' + escape(bodyText.value ? bodyText.value : ' ');

    //Set the form attributes
    form.setAttribute('method', 'post');
    form.setAttribute('enctype', 'text/plain');
    form.setAttribute('action', emaillink);
    //form.setAttribute('style', 'display:none');

    //Append the form to the body
    document.body.appendChild(form);

    //Submit the form
    form.submit();

    //Clean up
    document.body.removeChild(form);
}
function myFunction(to, subject, bodyText) {
    var emaillink = 'mailto:' + escape(to.value) + '?Subject=' + escape(subject.value) + '&Body=' + escape(bodyText.value ? bodyText.value : ' ');

    // var sendLink = document.getElementById("sendMail");
    // var att = document.createAttribute("href");
    // att.value = emaillink;
    // sendLink.setAttributeNode(att);


    location.assign(emaillink);
    return true;
}


