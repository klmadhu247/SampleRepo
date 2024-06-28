import React, {useState} from "react";
import item1 from  './assets/item1.jpeg'
import item2 from  './assets/item2.jpeg'
import item3 from  './assets/item3.jpeg'
import item4 from  './assets/item4.jpeg'
import item5 from  './assets/item5.jpeg'
import item6 from  './assets/item6.jpeg'
import item7 from  './assets/item7.jpeg'
import item8 from  './assets/item8.jpeg'
import item9 from  './assets/item9.jpeg'

function Menu () {

    const [items,setItems] = useState ([
        {
          id: 1,
          title: 'buttermilk pancakes',
          category: 'breakfast',
          price: 15.99,
          img: item1,
          desc: 'im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
        },
        {
          id: 2,
          title: 'diner double',
          category: 'lunch',
          price: 13.99,
          img: item2,
          desc: 'vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats' ,
        },
        {
          id: 3,
          title: 'godzilla milkshake',
          category: 'shakes',
          price: 6.99,
          img: item3,
          desc: 'ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.',
        },
        {
          id: 4,
          title: 'country delight',
          category: 'breakfast',
          price: 20.99,
          img: item4,
          desc: 'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut', 
        },
        {
          id: 5,
          title: 'egg attack',
          category: 'lunch',
          price: 22.99,
          img: item5,
          desc: 'franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90',
        },
        {
          id: 6,
          title: 'oreo dream',
          category: 'shakes',
          price: 18.99,
          img: item6,
          desc: 'Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday',
        },
        {
          id: 7,
          title: 'bacon overflow',
          category: 'breakfast',
          price: 8.99,
          img: item7,
          desc: 'carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird' ,
        },
        {
          id: 8,
          title: 'american classic',
          category: 'lunch',
          price: 12.99,
          img: item8,
          desc: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'  ,
        },
        {
          id: 9,
          title: 'quarantine buddy',
          category: 'shakes',
          price: 16.99,
          img: item9,
          desc: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.',
        }
      ]
      )

      const categoryList = items.map(item=>item.category)
    return(
        <div>

            {categoryList.map(item => <div>{item}</div>)}

        </div>
    )
}
export default Menu