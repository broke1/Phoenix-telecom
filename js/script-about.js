'use strict'

window.addEventListener("load", () => {
    
    let current_scroll = 0;
    let last_scroll = window.pageYOffset;
    let menu = document.querySelector('.menu');
    let arrow = document.querySelector('.arrow-up');
    let documents = document.querySelector('.link-documents');
    let footer = document.querySelector('.footer');


   
    if (screen.width > 500 &&  screen.height > 500) {
        window.onscroll = () => {

            


            current_scroll = window.pageYOffset;

            if (current_scroll > last_scroll) {
            if (current_scroll > 60) {
                menu.classList.add('menu-fixed'); 
                arrow.classList.add('arrow-up-show');  
            }
            if (current_scroll > (body.clientHeight-screen.height-footer.getBoundingClientRect().height)) {
                    arrow.classList.remove('arrow-up-show'); 
            }
            if (current_scroll > (documents.getBoundingClientRect().bottom)) {
                  documents.classList.add('link-documents-shows');
            }


            
           

            } else  {
                if (current_scroll < (body.clientHeight-screen.height-footer.getBoundingClientRect().height)) {
                    arrow.classList.add('arrow-up-show'); 
            }
                if (current_scroll < 60) {
                    menu.classList.remove('menu-fixed'); 
                    arrow.classList.remove('arrow-up-show'); 
                }
                if (current_scroll < (documents.getBoundingClientRect().bottom)) {
                    documents.classList.remove('link-documents-shows');
                 }
                
            }

            last_scroll = current_scroll;

        }
    }

   



    let modalSend = document.querySelector('.modal-send');
    let body = document.querySelector('body');




    $(".phone-form-modal").mask("+7 (999) 999-99-99");

    arrow.addEventListener('click', ()=> {
        backToTop();
    });


    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 7);
        }
      }

    document.querySelectorAll('.button-conect').forEach( item => {
        item.addEventListener('click', () => {
            modalSend.classList.remove('modal-send-hide');
            body.style.overflow = 'hidden';
        })
    }) 

    document.querySelector('.close-btn-send').addEventListener('click', () => {
        modalSend.classList.add('modal-send-hide');
        body.style.overflow = 'auto';
    })

    document.querySelector('.button-send-modal').addEventListener('click', event => {


            

        let parrent = event.target.parentElement;
        let accept = parrent.querySelector('input[type="checkbox"]');
        let description = parrent.querySelector('.description-accept');

    

                
              if(parrent.querySelector('.phone-form-modal').value != '') {
                    if (accept.checked) { 
                       sendModal(parrent);
                    } else {
                        description.innerHTML = "Согласитесь на отправку письма"
                        description.classList.remove('hide');
                        setTimeout(() =>{
                        description.innerHTML = ""; 
                        description.classList.add('hide');
                            }, 2000);
                    }
                 } else {
                description.innerHTML = "Введите корректный телефон";
                description.classList.remove('hide');
                setTimeout(() =>{
                  description.innerHTML = ""; 
                  description.classList.add('hide');
                      }, 2000);
              }

            
        
       
    });



    if (screen.width < 500) {
        let mobil = document.querySelector('.burger-menu').parentElement;
        mobil.addEventListener('click', () => {
            console.log('sdfdsff');
            if (mobil.classList.contains('open')) {
                mobil.classList.remove('open');
            }  else {
                mobil.classList.add('open');
            }
        });
    }



})


  function sendModal(form) {

   
       
       let description = form.parentElement.querySelector('.description');

      
        var formData = new FormData(form);
        
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/send/send.php");
        xhr.send(formData);

        xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;

        if (this.status != 200) {
        console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
        return;
        } else {
        

          description.classList.remove('hide');
          form.classList.add('hide');  
          
          setTimeout(() => {
            document.querySelector('.modal-send').classList.add('modal-send-hide');
            body.style.overflow = 'auto';
          },2000)
          

        }

        }


  }