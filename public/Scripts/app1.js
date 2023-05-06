
    var Arr=[1,2,3,4,"hi"]

    function check()
    {
    var ele=document.getElementById('a').value
   document.getElementById('dis').innerText='';
    if((!isNaN(ele)&&(Arr.indexOf(parseInt(ele))>=0) ||Arr.indexOf(ele)>=0))
        document.getElementById('p1').innerHTML=`<b>Found</b>`
    else
        document.getElementById('p1').innerHTML=`<b>Not Found</b>`
   }
   function  app()
   {
   document.getElementById('dis').innerText='';
   var v=document.getElementById('a').value;
   if(isNaN(v)&& v!='')
    {Arr.push(v)
        document.getElementById('p1').innerHTML='Append succesfully';}
    else if(!isNaN(v)&&v!='')
    {
    Arr.push(parseInt(v))   
    document.getElementById('p1').innerHTML='Append succesfully';
    }
    else
    document.getElementById('p1').innerHTML='Append Not possible';
    {

    }
    
   }
   function reveal()
   {document.getElementById('p1').innerHTML='';
      document.getElementById('dis').innerText='';
    var as=document.getElementById('a1')
var sa=document.getElementById('a11')

    if(as.style.display=='none')
    {as.style.display='block'
    sa.style.display='block'
   }
    else
    {as.style.display='none'
    sa.style.display='none'
}
   }
   function indexIp()
   {document.getElementById('p1').innerHTML='';
   document.getElementById('dis').innerText='';
    var a=document.getElementById('a1').value
   var b=document.getElementById('a').value
var c
   if(isNaN(b))
   c=b;
   else
   c=parseInt(b)
   Arr.splice(parseInt(a),0,c);

   }
   function remo()
   {
    var s=document.getElementById('a').value
 console.log(!isNaN('12'),s)
    if (!isNaN(s) && s!='')
    {Arr.splice(parseInt(s),1)
    display()}
    else
    document.getElementById('p1').innerHTML='invalid index';
  
   }
   function display()
   {document.getElementById('p1').innerHTML='';
   document.getElementById('dis').innerText=Arr;

   }
   