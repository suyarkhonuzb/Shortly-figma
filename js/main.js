const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.url-shortener__form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');


if(elUrlShortenerForm){
    elUrlShortenerForm.addEventListener('submit', function(evt){
        evt.preventDefault();
        elUrlShortenerResults.classList.add('url-shortener__results--open')
    })
}
if(elUrlShortener){
    elUrlShortener.addEventListener('click', function (evt){
        if(evt.target.matches('.js-button--copy')){
            evt.target.textContent = 'Copied!'
        }

        evt.target.classList.add('url-shortener-button--copied');

        navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

        setTimeout(function (){
            evt.target.textContent = 'Copy';
            evt.target.classList.remove('url-shortener-button--copied')
        }, 1000);
    })


}