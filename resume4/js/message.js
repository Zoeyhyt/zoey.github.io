!function(){
    var view = document.querySelector('section.messages')

    var model = {
        fetch : function(){
            var query = new AV.Query('Messages');
            return query.find()
        },
        save : function(name,content){
            var Messages = AV.Object.extend('Messages');
            var messages = new Messages();
            return messages.save({name : name, content : content})
        }
    }
    
    var controller = {
        view : null,
        model : null,
        messageList : null,
        myForm : null,
        init : function(view,model){
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessagesForm')
            this.initAv()
            this.loadMessages()
            this.bindEvents()
        },
        initAv : function(){
            var APP_ID = 'kYGNiaM7sE1nPYanflpiSrup-gzGzoHsz';
            var APP_KEY = 'KbMSnx2NCGJ6GNuuFH2vbEhq';
            AV.init({appId: APP_ID,appKey: APP_KEY});
        },
        loadMessages : function(){
            this.model.fetch().then((messages) => {
                let array = messages.map((item) =>{ return item.attributes})
                array.forEach((element) => {
                    let li = document.createElement('li')
                    li.innerText = `${element.name}:${element.content}`
                    this.messageList.appendChild(li)
                });
            })
        },
        bindEvents : function(){
            console.log(this.myForm)
            this.myForm.addEventListener('submit',(e) => {
                e.preventDefault()
                this.saveMessages()
            })    
        },
        saveMessages : function(){  
            let myform = this.myForm
            let content = myform.querySelector('input[name=content]').value;   
            let name = myform.querySelector('input[name=name]').value;
            this.model.save(name,content).then((object) =>{
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myform.querySelector('input[name=content]').value = ''
            })
        }
    } 
    controller.init(view,model)
}.call()

