const formAdd = document.querySelector('.add');
const input = document.querySelector('.review');
const btnSubmit = document.querySelector('.btn-submit');
const message = document.querySelector('.message');

let reviews = [
    {
    id: 1,
    value: 5,
    review: 'Great water courses. Thank you!'
    }, 

    {
        id: 2,
        value: 3,
        review: 'Very usefull'
    }, 

    {
        id: 3,
        value: 5,
        review: 'I really like wind surfing because of you'
    },
]

let ratingValue= 0;

const rating = document.querySelector('.rating');
rating.onchange = e =>{
    ratingValue = Number(e.target.value);
}

formAdd.onsubmit = e => {
    e.preventDefault();

    if(input.value.trim().length <=10 || input.value === ''){
        message.textContent = 'Review at least 10 characters.'
    }else if(ratingValue === 0){
        message.textContent= 'Plase rate our service'
    }else if (ratingValue >0 && input.value.trim().length >= 10){
        message.textContent='';
        let newId = reviews.length +1;
        let newReview = {
            id:newId,
            value:ratingValue,
            review:input.value
        };

        reviews.push(newReview);

        input.value= '';
        ratingValue = 0;
        rating.reset();
        showReviews();


    }
};

function showReviews(){
    const ul = document.querySelector('.feedback-ul');
    ul.innerHTML='';

    reviews.sort((a,b) => {
        return b.id - a.id;
    })

    .forEach(reviews => {
        const divValue = document.createElement('div');
        divValue.classList.add('value');
        const divText =  document.createElement('div');
        divValue.classList.add('text');
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete');

        deleteBtn.onclick = () => {
            deletereview(reviews.id)
        };

            divValue.textContent = reviews.value;
            divText.textContent = reviews.review;
            deleteBtn.textContent = 'X';

            const li = document.createElement('li');

            li.appendChild(divValue);
            li.appendChild(divText);
            li.appendChild(deleteBtn);
            ul.appendChild(li);
        
           

    });

    const averageDiv = document.querySelector('.average');
    averageDiv.textContent = average(reviews);
}

showReviews();



function deletereview (id){
    reviews=reviews.filter(reviews => reviews.id !== id);
    showReviews();
}

function average (array){
    let total=0;
    let count = 0;
    let average = 0;
    if (array.length === 0) return 0;
    array.forEach(v=>{
        total+= Number(v.value);
        count++;
    })

    average = (total / count).toFixed(2);
    return average;
}
