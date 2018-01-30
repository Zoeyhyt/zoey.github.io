window.jQuery.ajax = function(options){
    let url = options.url
    let method = options.method
    let body = options.body
    let success = options.success
    let fail = options.fail
    let headers = options.headers

    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader = (key,value)
    }
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <400){
                success.call(undefined,request.responseText)
            }else if(request.status >= 400){
                fail.call(undefined,request)
            }
        }
    }
    
    request.send(body)
}   

myButton.addEventListener('click', (e) =>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'POST',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'frank':'18'
        },
        body:'wish you a good day !',
        success = (e) =>{console.log(e)},  //传入的函数如果不知一个，则可依次列出并传参
        fail = (e) =>{console.log(e)}
    })   
})

