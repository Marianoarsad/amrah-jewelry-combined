//LIBRARIES
import { Plus } from 'lucide-react'; // ICONS

export default function Products ({}) {
    
    return (
        <>
            <div id="products">
                <div className="products-container">
                    <h3>All products: <strong>{3}</strong></h3>
                    <hr/>
                    <span>
                        <button className='products-btn-add'><Plus style={{width: "1rem"}} />Add new product</button>  
                        <button className='products-btn-delete-all'>Delete all</button>  
                    </span>
                    <table>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>PRODUCT</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>VIEWS</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <td><input type='checkbox'/></td>
                            <td>1</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>₱10,000</td>
                            <td>16</td>
                            <td>
                                <p>
                                    <button>UPDATE</button>
                                    <button>DELETE</button>
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}