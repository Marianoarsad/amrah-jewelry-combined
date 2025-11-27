//LIBRARIES
import { Plus, RefreshCcw, Trash } from 'lucide-react'; // ICONS

// EXAMPLE IMAGES (TEST ONLY)
import ProductImage from "../assets/amrah-product-1.jpg";
import UpdateProductForm from './UpdateProductForm.jsx';

// COMPONENTS
import AddProductForm from './AddProductForm.jsx';

//HOOKS
import { useState, useRef } from 'react';

export default function Products ({}) {
    
    const dialog = useRef();
    const updateDialog = useRef();

    const [ products, setProducts ] = useState([]);
    const [ wantsToUpdate, setWantsToUpdate ] = useState({
        id: null,
        update: false
    });
    const [ selectedProduct, setSelectedProduct ] = useState(null);

    function handleShowAddProductForm () {
        dialog.current.showModal();
    }

    function handleHideAddProductForm () {
        dialog.current.close();
    }

    function handleDeleteProduct (id) {
        setProducts(products.filter((product) => product.id !== id))
    }

    function handleUpdateProduct (id) {

        const prod = products.find( p => p.id === id) ;

        if (!prod) return;
        

        setSelectedProduct(prod);
        setWantsToUpdate({id, update: true})
    }

    return (
        <>
            {wantsToUpdate.update &&
                <UpdateProductForm
                    product={selectedProduct}
                    dialogRef={updateDialog}
                    onClose={() => {
                        setWantsToUpdate({ id: null, update: false });
                        setSelectedProduct(null)
                    }}
                    setProducts={setProducts}
                    products={products}
                />
            }
            <AddProductForm 
                ref={dialog} 
                hideAddProductForm={handleHideAddProductForm}
                products={products}
                setProducts={setProducts} 
            />

            <div id="products">
                <div className="products-container">
                    <h3>All products: <strong>{products.length}</strong></h3>
                    <hr/>
                    <span>
                        <button 
                            className='products-btn-add'
                            onClick={handleShowAddProductForm}
                        >
                            <Plus style={{width: "1rem"}}/>Add new product
                        </button>  
                        <button className='products-btn-delete-all'>Delete all</button>  
                    </span>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>PRODUCT</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>LINK</th>
                            <th>DESCRIPTION</th>
                            <th>ACTION</th>
                        </tr>
                        </thead>
                        
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td><input type='checkbox' className='products-table-checkbox'/></td>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.link.slice(0, 40)}...</td>
                                <td>{product.description.slice(0, 40)}...</td>
                                <td>
                                    <p style={{display: 'flex'}}>
                                        <button 
                                            className='products-table-btn products-table-btn-update'
                                            onClick={() => handleUpdateProduct(product.id)}
                                        >
                                            UPDATE<RefreshCcw style={{height: ".9rem"}} />
                                        </button>
                                        <button 
                                            className='products-table-btn products-table-btn-delete'
                                            onClick={() => handleDeleteProduct(product.id)}
                                        >
                                            DELETE<Trash style={{height: ".9rem"}}/>
                                        </button>
                                    </p>
                                </td>
                            </tr>
                        ))}
                        
                    </table>
                </div>
            </div>
        </>
    )
}