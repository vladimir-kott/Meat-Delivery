const productGrid_one = document.querySelector('#one')
const listConteiner = document.querySelector('.card__panel_list')

function template(){
    let item = `
    <div class="product">
        <img class="product_img" src="" alt="">
        <p>Шашлык со свинной шеи</p>
        <p>Состав: маринад (уксус, тимьян, размарин, вода), мясо свинной шеи, гарнир (картошка, маринованный лук и т.д.) </p>
        <p>Подача: Шашлык, гарнир, термоупаковка, напиток на выбор</p>
        <div class="price">
            <p>Цена 95 грн / 100 гр.</p>
            <div>
                <button class="negative_btn">-</button>
                <input class="price_inp" type="text"> 
                <button class="positive_btn">+</button>
            </div>
        </div>
        <button class="by_ntn">Купить</button>
    </div>`
    return item
}

function templateList(){
    let item = `
    <div class="card__panel_list_item">
        <img src="src/test.png" alt="test">
        <span>Шашалык со свинной шеии</span>
        <div>
            <button class="negative_btn">-</button>
            <input class="price_inp" type="text"> 
            <button class="positive_btn">+</button>
        </div>
    </div>`
    return item
}

for (let i = 0; i <= 15; i++){
    productGrid_one.innerHTML += template()
}

for (let i = 0; i <= 7; i++){
    listConteiner.innerHTML += templateList()
}