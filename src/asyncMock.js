const products = [

    {
        id: '1',
        name:'Perfume ekos moca',
        price: 2600,
        category:'Perfumes',
        image:'https://i.ibb.co/87D8qqs/perfume-Ekos-Moca.jpg',
        alt:'Perfume Ekos Moca',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '2',
        name:'Perfume ekos castaña',
        price: 2600,
        category:'Perfumes',
        image:'https://i.ibb.co/B24tsJd/perfume-Ekos-Castania.jpg',
        alt:'Perfume Ekos Castaña',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '3',
        name:'Perfume luna rubí',
        price: 3000,
        category:'Perfumes',
        image:'https://i.ibb.co/FHJZ0VJ/perfume-Luna-Rubi.jpg',
        alt:'Perfume Luna Rubí',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '4',
        name:'Crema de cuerpo cereza y avellana',
        price: 1680,
        category:'Cremas',
        image:'https://i.ibb.co/GHhwSpT/cremade-Cuerpo-Cereza-YAvellana.jpg',
        alt:'Crema de Cuerpo Cereza y Avellana',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '5',
        name:'Crema hidratante facial faces',
        price: 1280,
        category:'Cremas',
        image:'https://i.ibb.co/k5wWSpC/crema-Hidratante-Facial-Faces.jpg',
        alt:'Crema Hidratante Facial Faces',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '6',
        name:'Crema corporal mora roja y jabuticaba',
        price: 860,
        category:'Cremas',
        image:'https://i.ibb.co/ys9BXHz/crema-Corporal-Mora-YJabutia.jpg',
        alt:'Crema corporal mora roja y jabuticaba',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '7',
        name:'Combo body cereza y avellana',
        price: 2260,
        category:'Combos',
        image:'https://i.ibb.co/HCKLfZB/combo-Body-Cereza-YAvellana.jpg',
        alt:'Combo Body Cereza y Avellana',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '8',
        name:'Combo flor de lis',
        price: 2260,
        category:'Combos',
        image:'https://i.ibb.co/3FGY5nb/combo-Body-Flor-De-Lis.jpg',
        alt:'Combo flor de lis',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

    },

    {
        id: '9',
        name:'Combo body datiles y canela',
        price: 2260,
        category:'Combos',
        image:'https://i.ibb.co/rpjShMx/Combo-Body-Datiles-YCanela.jpg',
        alt:'Combo body datiles y canela',
        stock: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos veniam saepe aut iste quas explicabo dolores unde aliquam assumenda consectetur, nisi inventore recusandae perspiciatis maiores voluptatum nulla similique minus.Lorem ipsum dolor si '

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