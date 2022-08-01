const products = [

    {
        id: '1',
        name:'Perfume ekos moca',
        price: 2600,
        category:'perfume',
        image:'./images/perfumes/perfumeEkosMoca.jpeg',
        alt:'Perfume Ekos Moca',
        stock: 10,
        description: 'Perfume Ekos Moca'

    },

    {
        id: '2',
        name:'Perfume ekos castaña',
        price: 2600,
        category:'perfume',
        image:'./images/perfumes/perfumeEkosCastania.jpeg',
        alt:'Perfume Ekos Castaña',
        stock: 10,
        description: 'Perfume Ekos Castaña'

    },

    {
        id: '3',
        name:'Perfume luna rubí',
        price: 3000,
        category:'perfume',
        image:'./images/perfumes/perfumeLunaRubi.jpeg',
        alt:'Perfume Luna Rubí',
        stock: 10,
        description: 'Perfume Luna Rubí'

    },

    {
        id: '4',
        name:'Crema de cuerpo cereza y avellana',
        price: 1680,
        category:'crema',
        image:'./images/cremas/cremadeCuerpoCerezaYAvellana.jpeg',
        alt:'Crema de Cuerpo Cereza y Avellana',
        stock: 10,
        description: 'Crema de Cuerpo Cereza y Avellana'

    },

    {
        id: '5',
        name:'Crema hidratante facial faces',
        price: 1280,
        category:'crema',
        image:'./images/cremas/cremaHidratanteFacialFaces.jpeg',
        alt:'Crema Hidratante Facial Faces',
        stock: 10,
        description: 'Descripción shampoo 1'

    },

    {
        id: '6',
        name:'Crema corporal mora roja y jabuticaba',
        price: 860,
        category:'crema',
        image:'./images/cremas/cremaCorporalMoraYJabutia.jpeg',
        alt:'Crema corporal mora roja y jabuticaba',
        stock: 10,
        description: 'Crema corporal mora roja y jabuticaba'

    },

    {
        id: '7',
        name:'Combo body cereza y avellana',
        price: 2260,
        category:'combo',
        image:'./images/combos/comboBodyCerezaYAvellana.jpeg',
        alt:'Combo Body Cereza y Avellana',
        stock: 10,
        description: 'Combo Body Cereza y Avellana'

    },

    {
        id: '8',
        name:'Combo flor de lis',
        price: 2260,
        category:'combo',
        image:'./images/combos/comboBodyFlorDeLis.jpeg',
        alt:'Combo flor de lis',
        stock: 10,
        description: 'Combo flor de lis'

    },

    {
        id: '9',
        name:'Combo body datiles y canela',
        price: 2260,
        category:'combo',
        image:'./images/combos/ComboBodyDatilesYCanela.jpeg',
        alt:'Combo body datiles y canela',
        stock: 10,
        description: 'Combo body datiles y canela'

    }

]

export const getProducts = () => {

    return new Promise ((resolve) => {

        setTimeout(()=> {

            resolve(products)
        }, 500)
    })
}


export const getProductsByCategory = (category) => {

    return new Promise ((resolve) => {
        
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}


export const getProductById = (id) => {

    return new Promise ((resolve) => {

        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}