'use strict'

window.addEventListener("load", () => {
    
    let current_scroll = 0;
    let last_scroll = window.pageYOffset;
    let menu = document.querySelector('.menu');
    // let services = document.querySelector('.services');
    // let img = services.querySelector('img');
    // let services_2 = document.querySelector('.services-2');
    // let img_2 = services_2.querySelector('img');
    // let services_3 = document.querySelector('.services-3');
    // let img_3 = services_3.querySelector('img');
    let changes = 0;
    let changes_2 = 0;
    let changes_3 = 0;
    let tariffs_block = document.querySelector('.tariffs-block');
    let pay_block = document.querySelectorAll('.pay-block');
    let arrow = document.querySelector('.arrow-up');
    let footer = document.querySelector('.footer');
    let tarrifs = document.querySelector('.tariffs-block');


   
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
            // if (services.getBoundingClientRect().top < screen.height) {
            //         changes += 1;
            //         if (changes < 50) {
                
            //         img.style.top = `-${changes}px`;
            //         img.style.left = `-${changes}px`;
            //         } else if (changes < 100) {
            //             img.style.top = `-${50 - (changes-50)}px`;
            //             img.style.left = `-${50 - (changes-50)}px`; 
            //         } else {
            //             changes = 100;
            //         }
            // }
            if (screen.width > 1000) {
                    if (current_scroll > tarrifs.getBoundingClientRect().bottom) {

                        tarrifs.querySelectorAll('.tar-block-max').forEach( item => {
                            item.classList.add('show-tarrif');
                        })

                    }
                }
                // if (current_scroll > document.querySelector('.tar-block-max').getBoundingClientRect().bottom) {
                //     tariffs_block.classList.add('first-line-show');
                // }
                // if (current_scroll > document.querySelector('.second-line-tariff').getBoundingClientRect().bottom) {
                //     tariffs_block.classList.add('second-line-show');
                // }



            //     if (services_2.getBoundingClientRect().top < screen.height) {
            //         changes_2 += 1;
            //         if (changes_2 < 50) {
                
            //         img_2.style.top = `-${changes_2}px`;
            //         img_2.style.left = `-${changes_2}px`;
            //         } else if (changes_2 < 100) {
            //             img_2.style.top = `-${50 - (changes_2-50)}px`;
            //             img_2.style.left = `-${50 - (changes_2-50)}px`; 
            //         } else {
            //             changes_2 = 100;
            //         }
            // }
            if (current_scroll-screen.height-300 > document.querySelector('.pay-row').getBoundingClientRect().bottom) {
                    pay_block.forEach( item => {
                        item.classList.add('pay-block-show');
                    })
            }
        //     if (services_3.getBoundingClientRect().top < screen.height) {
        //         changes_3 += 1;
        //         if (changes_3 < 50) {
            
        //         img_3.style.top = `-${changes_3}px`;
        //         } else if (changes_3 < 100) {
        //             img_3.style.top = `-${50 - (changes_3-50)}px`; 
        //         } else {
        //             changes_3 = 100;
        //         }
        // }

            } else  {
                if (current_scroll < (body.clientHeight-screen.height-footer.getBoundingClientRect().height)) {
                    arrow.classList.add('arrow-up-show'); 
            }
                if (current_scroll < 60) {
                    menu.classList.remove('menu-fixed'); 
                    arrow.classList.remove('arrow-up-show'); 
                }
                
                // if (services.getBoundingClientRect().top+300 > 0) {
                //     changes -= 1;
                //     if (changes > 50) {
                
                //     img.style.top = `${100-changes}px`;
                //     img.style.left = `-${100-changes}px`;
                //     } else if (changes > 0) {
                //         img.style.top = `${changes}px`;
                //         img.style.left = `-${changes}px`; 
                //     } else {
                //         changes = 0;
                //     }
                // }
                if (screen.width > 1000) {
                    if (current_scroll < tarrifs.getBoundingClientRect().bottom) {

                        tarrifs.querySelectorAll('.tar-block-max').forEach( item => {
                            item.classList.remove('show-tarrif');
                        })
    
                    }
                }
                

                // if (services_2.getBoundingClientRect().top+300 > 0) {
                //     changes_2 -= 1;
                //     if (changes_2 > 50) {
                
                //     img_2.style.top = `${100-changes_2}px`;
                //     img_2.style.left = `-${100-changes_2}px`;
                //     } else if (changes_2 > 0) {
                //         img_2.style.top = `${changes_2}px`;
                //         img_2.style.left = `-${changes_2}px`; 
                //     } else {
                //         changes_2 = 0;
                //     }
                // }
                if (current_scroll-screen.height-300 < document.querySelector('.pay-row').getBoundingClientRect().bottom) {
                    pay_block.forEach( item => {
                        item.classList.remove('pay-block-show');
                    })
                }
                // if (services_3.getBoundingClientRect().top+300 > 0) {
                //     changes_3 -= 1;
                //     if (changes_3 > 50) {
                //     img_3.style.top = `${100-changes_3}px`;
                //     } else if (changes_3 > 0) {
                //         img_3.style.top = `${changes_3}px`;
                //     } else {
                //         changes_3 = 0;
                //     }
                // }
            }

            last_scroll = current_scroll;

        }
    }

    let itemOfSlider = 3;

    if (screen.width< 800){
        itemOfSlider = 2;
    }
    if (screen.width< 500){
        itemOfSlider = 1;
    }



    $('.news-slider').slick({
        infinite: true,
        slidesToShow: itemOfSlider,
        slidesToScroll: 1
      });

    
    let news = {
        item_1 : {
            zagolovok: 'Новость № 1',
            img: "./img/tariff-1.png",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. `
        }, 
        item_2 : {
            zagolovok: 'Новость № 2',
            img: "./img/tariff-2.png",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. `
        }, 
        item_3 : {
            zagolovok: 'Новость № 3',
            img: "./img/tariff-3.png",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. `
        }, 
        item_4 : {
            zagolovok: 'Новость № 4',
            img: "./img/tariff-3.png",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus lacus, dictum eget libero fringilla, ornare volutpat neque volutpat. `
        }, 
    }

    let modal = document.querySelector('.modal-news');
    let modalSend = document.querySelector('.modal-send');
    let body = document.querySelector('body');

    document.querySelectorAll('.button-new').forEach( item => {
        item.addEventListener('click', () => {
            let newone = item.getAttribute("data-item");
            modal.querySelector(".zagolovok-modal").innerHTML = news[newone].zagolovok;
            modal.querySelector(".img-modal img").setAttribute("src",news[newone].img );
            modal.querySelector(".text-modal").innerHTML = news[newone].text;
            modal.classList.remove('modal-news-hide');
            body.style.overflow = 'hidden';
        })
    })

    document.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.add('modal-news-hide');
        body.style.overflow = 'auto';
    })


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

    document.querySelectorAll('.tar-block-max').forEach( item => {
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
                       
                        if (parrent.querySelector('.email-form-modal').value != '' && parrent.querySelector('.email-form-modal').value.indexOf('@') != -1) {
                            sendModal(parrent);
                        } else {
                            description.innerHTML = "Введите корректную почту";
                            description.classList.remove('hide');
                            setTimeout(() =>{
                            description.innerHTML = ""; 
                            description.classList.add('hide');
                                }, 2000);
                        }

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
            document.body.style.overflow = 'auto';
          },2000)
          

        }

        }


  }
