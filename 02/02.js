(document.querySelector('div.icon-content'))
?.addEventListener('click', e=>{
    (document.querySelector('.line1')).classList.toggle('top');
    (document.querySelector('.line2')).classList.toggle('center');
    (document.querySelector('.line3')).classList.toggle('button');
})