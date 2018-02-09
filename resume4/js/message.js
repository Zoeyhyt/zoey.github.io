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
            window.location.reload()
    })
})

var query = new AV.Query('Messages');
query.find().then(function (messages) {
    let array = messages.map((item) =>{ return item.attributes})
    array.forEach(element => {
        let li = document.createElement('li')
        li.innerText = element.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    });
    
}).then(function(messagess) {
    alert('提交成功')
}, function (error) {
    alert('提交失败')
});
