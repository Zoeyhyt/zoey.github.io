  
window.jQuery.ajax = function({url,method,headers,body}){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method,url)  
    for(let key in headers){
        let value = headers[key]
        request.setRequestHeader(key,value)
    }
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <400){
                resolve.call(undefined,request.responseText)
            }else if(request.status >= 400){
                reject.call(undefined,request)
            }
        }
    }   
    request.send(body)
  })   
}   


myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax({
    url: '/xxx',
    method: 'GET',
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'frank': '18'
    },
    body:'Hello!'
  }).then((x)=>{console.log(x)},(request)=>{console.log(request)})
})
  