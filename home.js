var element = document.querySelector(".wrapper");
let anchor = 'a[href^="#feedback"]';
let anchortop = 'a[href^="#top"]';
let listofanchor = document.querySelectorAll(anchor);
listofanchor.forEach(link => {
    link.onclick = function(e){
        e.preventDefault();
        let destination = document.querySelector('.wrapper');
        destination.scrollIntoView({
            behavior:'smooth'
        });
    }
});
anchortop.onclick = function(e){
    e.preventDefault();
    let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior:'smooth'
        });
}

