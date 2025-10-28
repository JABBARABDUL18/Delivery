
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.nav-link');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
    if(path === '' && href === 'index.html') a.classList.add('active');
  });

  const form = document.getElementById('quoteForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      alert('Request sent!\nName: '+data.get('name')+'\nPhone: '+data.get('phone')+'\nType: '+data.get('type'));
      form.reset();
    });
  }
});
