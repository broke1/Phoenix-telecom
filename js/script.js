'use strict'

window.addEventListener("load", () => {
    
    let current_scroll = 0;
    let last_scroll = window.pageYOffset;
    let menu = document.querySelector('.menu');
    let services = document.querySelector('.services');
    let img = services.querySelector('img');
    let services_2 = document.querySelector('.services-2');
    let img_2 = services_2.querySelector('img');
    let changes = 0;
    let changes_2 = 0;
    let tariffs_block = document.querySelector('.tariffs-block');


    window.onscroll = () => {

        


        current_scroll = window.pageYOffset;

        if (current_scroll > last_scroll) {
           if (current_scroll > 60) {
               menu.classList.add('menu-fixed'); 
           }
           if (services.getBoundingClientRect().top < screen.height) {
                changes += 1;
                if (changes < 50) {
               
                img.style.top = `-${changes}px`;
                img.style.left = `-${changes}px`;
                } else if (changes < 100) {
                    img.style.top = `-${50 - (changes-50)}px`;
                    img.style.left = `-${50 - (changes-50)}px`; 
                } else {
                    changes = 100;
                }
           }
               if (current_scroll > document.querySelector('.first-line-tariff').getBoundingClientRect().bottom) {
                tariffs_block.classList.add('first-line-show');
               }
               if (current_scroll > document.querySelector('.second-line-tariff').getBoundingClientRect().bottom) {
                tariffs_block.classList.add('second-line-show');
               }
            if (services_2.getBoundingClientRect().top < screen.height) {
                changes_2 += 1;
                if (changes_2 < 50) {
               
                img_2.style.top = `-${changes_2}px`;
                img_2.style.left = `-${changes_2}px`;
                } else if (changes_2 < 100) {
                    img_2.style.top = `-${50 - (changes_2-50)}px`;
                    img_2.style.left = `-${50 - (changes_2-50)}px`; 
                } else {
                    changes_2 = 100;
                }
           }

        } else  {
            if (current_scroll < 60) {
                menu.classList.remove('menu-fixed'); 
            }
            if (services.getBoundingClientRect().top+300 > 0) {
                changes -= 1;
                if (changes > 50) {
               
                img.style.top = `${100-changes}px`;
                img.style.left = `-${100-changes}px`;
                } else if (changes > 0) {
                    img.style.top = `${changes}px`;
                    img.style.left = `-${changes}px`; 
                } else {
                    changes = 0;
                }
             }
             if (current_scroll < document.querySelector('.first-line-tariff').getBoundingClientRect().bottom) {
                tariffs_block.classList.remove('first-line-show');
               }
            if (current_scroll < document.querySelector('.second-line-tariff').getBoundingClientRect().bottom) {
                tariffs_block.classList.remove('second-line-show');
               }

            if (services_2.getBoundingClientRect().top+300 > 0) {
                changes_2 -= 1;
                if (changes_2 > 50) {
               
                img_2.style.top = `${100-changes_2}px`;
                img_2.style.left = `-${100-changes_2}px`;
                } else if (changes_2 > 0) {
                    img_2.style.top = `${changes_2}px`;
                    img_2.style.left = `-${changes_2}px`; 
                } else {
                    changes_2 = 0;
                }
             }
            console.log('up');
        }

        last_scroll = current_scroll;

    }








})