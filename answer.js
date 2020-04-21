// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://vk.com/im
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const notMes = ['Привет', 'привет', 'Йо', 'йо', "Хеллоу", "хеллоу", "Здравствуй", 'здравствуй', 'Здравствуйте', "здравствуйте", 'Hello', 'hello', "Hey", 'hey', 'hey buddy', 'Hey buddy', 'Hey bitch', 'hey bitch'];
    console.log('hey buddy');
    let dialogueId = '555414560';
    let messageContainer = document.querySelector(`._im_dialog_${dialogueId}`)
    let observer = new MutationObserver(mutations => {
        if (messageContainer.querySelector('.nim-dialog--preview').innerHTML == 'Привет') {
            document.querySelector(`li[data-list-id="${Number(dialogueId)}"]`).click();
            document.querySelector('._im_text').innerHTML = "Привет. Он сейчас не может ответить<br\>p.s.: Это его автоответчик";
            document.querySelector('.im-chat-input--send').click();
        }
    });
    observer.observe(messageContainer.querySelector('.nim-dialog--unread_container').querySelector('.nim-dialog--unread'), {
        childList: true
    })

    // Your code here...
})();
