const data= [
    {
        name:'Chiku',
        age: '4'
    },
    {
        name:'Miku',
        age: '10'
    },
    {
        name:'Piku',
        age: '20'
    },
    {
        name:'Advik',
        age: '4'
    },
    {
        name:'Aarohi',
        age: '28'
    },
    {
        name:'Sunil',
        age: '30'
    }
]

const info = document.querySelector('.info');

const userDetails = data.map((item)=>{
    return '<div class="item">'+ item.name + ' is '+ item.age + ' '+'Year old'+'</div>'
})

info.innerHTML = userDetails.join('\n');

const item = document.querySelector('.item');

item.addEventListener('click', ()=>{
        if(item.classList.contains('item')){
            item.classList.toggle('active')
        }
    
    
})