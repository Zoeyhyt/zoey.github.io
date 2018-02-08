var APP_ID = 'kYGNiaM7sE1nPYanflpiSrup-gzGzoHsz';
var APP_KEY = 'KbMSnx2NCGJ6GNuuFH2vbEhq';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessagesForm')
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let content = document.querySelector('input[name=content]').value;
    
    //创建/存入数据库
    var Messages = AV.Object.extend('Messages');
    //存入数据
    var messages = new Messages();
    messages.save({
        content: content
        }).then(function(object) {
        alert(success)
    })
})
