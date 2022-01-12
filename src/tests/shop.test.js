import { commerce } from '../lib/commerce';


//Accesses Commerce.js

//Products can load
test('Products loaded', async () => {
    const data = await commerce.products.list();
    expect(data).toBeDefined();
})

//Can filter by category

test('Products filtered by category', async () => {

})

//Can filter by price

//Can filter by multiple values

//Can reset filters



// NEXT TEST SUITE //

//Products added to cart

//Products removed from cart

//Cart emptied

//Can confirm checkout

//Card error displayed

//Processing error displayed