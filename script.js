body=document.querySelector('body')


title=document.createElement('h1')
title.innerText='calculator function'
 title.setAttribute('id','title')

 body.append(title)
 para=document.createElement('p')
 para.innerText='CALCULATOR TASK'
 para.setAttribute('id','description')
 body.append(para)

box=document.createElement('div')
box.setAttribute('id','calc')
body.append(box)
para1=document.createElement('p')
para1.classList.add('ans')
box.append(para1)
res=document.createElement('input')
res.setAttribute('id','result')
 res.setAttribute('type','text')
box.append(res)
document.createElement("br")



div1=document.createElement('div')
a=document.createElement('button')
a.setAttribute('onclick','clear(this)')
a.classList.add('one')
a.setAttribute('id','clear')
a.innerText='Clear'
div1.append(a)
box.append(div1)
document.createElement("br")

//buttons

div2=document.createElement('div')
btn2=document.createElement('button')
btn2.setAttribute('onclick','clicking(this)')
btn2.classList.add('one')
btn2.setAttribute('id','1')
btn2.innerText='1'
div2.append(btn2)

btn3=document.createElement('button')
btn3.setAttribute('onclick','clicking(this)')
btn3.classList.add('one')
btn3.setAttribute('id','2')
btn3.innerText='2'
div2.append(btn3)

btn4=document.createElement('button')
btn4.setAttribute('onclick','clicking(this)')
btn4.classList.add('one')
btn4.setAttribute('id','3')
btn4.innerText='3'
div2.append(btn4)

btn5=document.createElement('button')
btn5.setAttribute('onclick','clicking(this)')
btn5.classList.add('one')
btn5.setAttribute('id','add')
btn5.innerText='+'
div2.append(btn5)
box.append(div2)


div3=document.createElement('div')
btn6=document.createElement('button')
btn6.setAttribute('onclick','clicking(this)')
btn6.classList.add('one')
btn6.setAttribute('id','4')
btn6.innerText='4'
div3.append(btn6)

b=document.createElement('button')
b.setAttribute('onclick','clicking(this)')
b.classList.add('one')
b.setAttribute('id','5')
b.innerText='5'
div3.append(b)

c=document.createElement('button')
c.setAttribute('onclick','clicking(this)')
c.classList.add('one')
c.setAttribute('id','6')
c.innerText='6'
div3.append(c)

d=document.createElement('button')
d.setAttribute('onclick','clicking(this)')
d.classList.add('one')
d.setAttribute('id','subtract')
d.innerText='-'
div3.append(d)
box.append(div3)


div4=document.createElement('div')
c=document.createElement('button')
c.setAttribute('onclick','clicking(this)')
c.classList.add('one')
c.setAttribute('id','7')
c.innerText='7'
div4.append(c)

d=document.createElement('button')
d.setAttribute('onclick','clicking(this)')
d.classList.add('one')
d.setAttribute('id','8')
d.innerText='8'
div4.append(d)

e=document.createElement('button')
e.setAttribute('onclick','clicking(this)')
e.classList.add('one')
e.setAttribute('id','9')
e.innerText='9'
div4.append(e)

f=document.createElement('button')
f.setAttribute('onclick','clicking(this)')
f.classList.add('one')
f.setAttribute('id','multiplication')
f.innerText='*'
div4.append(f)
box.append(div4)


div5=document.createElement('div')
g=document.createElement('button')
g.setAttribute('onclick','clicking(this)')
g.classList.add('one')
g.setAttribute('id','0')
g.innerText='0'
div5.append(g)

h=document.createElement('button')
h.setAttribute('onclick','clicking(this)')
h.classList.add('one')
h.setAttribute('id','00')
h.innerText='00'
div5.append(h)

i=document.createElement('button')
i.setAttribute('onclick','clicking(this)')
i.classList.add('one')
i.setAttribute('id','division')
i.innerText='/'
div5.append(i)

e=document.createElement('button')
e.setAttribute('onclick','evaluation(this)')
e.classList.add('one')
e.setAttribute('id','equal')
e.innerText='='
div5.append(e)
box.append(div5)




//logic

function clicking(event){
event.innerText
parent=document.querySelector('#result')
operator=['+','-','*','/']
 if (!(operator.includes(parent.innerText.slice(-1))&&(operator.includes(event.innerText)))){
    parent.value=parent.value+event.innerText
 console.log(parent.innerText)

}}
function evaluation(eve){
    opea=['=']
    if(opea.includes(eve.innerText)){
        parent1=document.querySelector('#result')
        var out= eval(parent1.value)
        res=document.querySelector('.ans')
        res.innerText=out
    }
console.log(out)
}

btn=document.querySelector('#clear')
btn.addEventListener('click',()=>{
    parent=document.querySelector('#result')
    display=document.querySelector('.ans')
parent.value=''
display.innerText=''
})



window.document.addEventListener('keypress',(event)=>{
    operator=['+','-','*','/']
    key=event.key
    code=event.code
    if(code.includes('Digit')||operator.includes(key)){
        parent=document.querySelector('#result')
parent.value=parent.value+key
console.log(parent.value)
console.log('key is pressed')
    }

  if(key =='='){
     parent=document.querySelector('#result')
     var out=eval(parent.value)
     res=document.querySelector('.ans')
     res.innerText=out

  }



})