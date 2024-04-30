import Link from 'next/link';
import Image from 'next/image';



export default function MenuItem(){
 return (
<>
<br/>
<div className="grid grid-cols-4 gap-4">
<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/scallops.png" alt="scallops"></img>
<h4 className="font-semibod my-2">Pan Seared Scallops</h4>
<p className="text-gray-500 text-sm">Served with a lemon wedge and garnished with parsley</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="1" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>



<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/pilpil2.png" alt="prawnpilpil"></img>
<h4 className="font-semibod my-2">Prawn Pil Pil</h4>
<p className="text-gray-500 text-sm">Sizzling prawns in garlic, chilli, olive oil, butter and parsley. Served with sourdough bread</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="2" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $10</button>
</form>
</div>



<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/oysters2.png" alt="oysters"></img>
<h4 className="font-semibod my-2">Carlingford Oysters</h4>
<p className="text-gray-500 text-sm">Served raw in a Cucumber Mignonette Sauce or rockefeller style.</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="3" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>





<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/mussels.webp" alt="mussels"></img>
<h4 className="font-semibod my-2">Steamed Mussels</h4>
<p className="text-gray-500 text-sm">Mussels in a white white sauce served with homemade brown bread</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="4" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label><br/>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /> <br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>




<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/seafoodlinguine.jpg" alt="linguine"></img>
<h4 className="font-semibod my-2">Seafood Linguine</h4>
<p className="text-gray-500 text-sm">Garlic seafood linguine with prawns, calamari, capers and chilli in a tomato wine wine sauce. </p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="5" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>


<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/ribeye.png" alt="ribeye"></img>
<h4 className="font-semibod my-2">Sesame-Marinated Cast Iron Ribeye</h4>
<p className="text-gray-500 text-sm">Ribeye marniated in sesame oil, tamari soy sauce, balsamic, sriracha, and brown sugar. Garnished with sesame seeds and scallions</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="6" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>



<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/chicken.png" alt="chicken"></img>
<h4 className="font-semibod my-2">Pan Seared Chicken With Burst Tomatoes</h4>
<p className="text-gray-500 text-sm">Pan Seared Chicken Breasts with burst tomatoes, spinach, and mascarpone. Served with </p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="7" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
</form>
</div>


<div className="bg-gray-200 p-4 rounded-lg text-center group hover: bg-gray hover:shadow-2xl hover:shadow-black transition-all">
<img src="/penne.png" alt="Penne"></img>
<h4 className="font-semibod my-2">Penne alla Vodka</h4>
<p className="text-gray-500 text-sm">Served with grated parmesan and fresh basil leaves. Vegatarian option.</p><br/>
<form method="post" action="/order.php">
    <input type="hidden" name="item_id" value="8" /> {/* Replace "1" with the actual ID of the item */}
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br/><br/><br/><br/>
<button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button> 
</form>
</div>

</div>








</>
 ); 
}