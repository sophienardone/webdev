import Link from 'next/link';
import Image from 'next/image';
import { fetchMenu } from '@/app/lib/data';

export default async function MenuItem() {
    const menu = await fetchMenu();

    return (
        <>
            <br />
            <div className="grid grid-cols-4 gap-4">
                {/* Loop through each menu item */}
                {menu.map((menuItem, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-gray hover:shadow-2xl hover:shadow-black transition-all">
                        
                        <Image                           
                            src={`/menu_img/${menuItem.imageurl}`}
                            alt={menuItem.name}
                            width={200}
                            height={200}
                        />

                        

                        <h4 className="font-semibold my-2">{menuItem.name}</h4> {/* Use menuItem.name */}
                        <p className="text-gray-500 text-sm">{menuItem.description}</p> {/* Use menuItem.description */}
                        <br />
                        <form method="post" action="/order.php">
                            <input type="hidden" name="item_id" value={menuItem.itemid} /> {/* Use menuItem.itemid */}
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" /><br /><br /><br /><br /><br />
                            <button className="bg-primary text-white rounded-full px-6 py-2">{menuItem.price}</button> {/* Use menuItem.price */}
                        </form>
                    </div>
                ))}
            </div>
        </>
    );
}
