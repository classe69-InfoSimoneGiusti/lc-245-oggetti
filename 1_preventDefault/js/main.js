
document.getElementById('mioLink').addEventListener('click', 

function(event) {
    event.preventDefault();
    event.target.style.color = 'red';
}

);


//https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const liDom = document.querySelector('li');
const valorePostId = liDom.getAttribute('data-postid'); //https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute?retiredLocale=it
liDom.setAttribute('data-paperino', 'qui quo qua');
console.log(valorePostId);

const valorePostId2 = liDom.dataset.postid;
liDom.dataset.pippo = 'pluto';
console.log(valorePostId2);

