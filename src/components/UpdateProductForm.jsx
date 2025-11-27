// LIBRARIES
import { X } from 'lucide-react';

// HOOKS 
import { useEffect, useRef } from 'react';

export default function UpdateProductForm ({ product, dialogRef, onClose, setProducts, products }) {
    
    const internalRef = dialogRef || useRef();

    useEffect(() => {
        if (product) internalRef.current?.showModal?.();
    }, [product]);

    function handleSubmit (event) {

        event.preventDefault();

        const fd = new FormData(event.target);
        const updated = {
            ...product,
            productName: fd.get('product-name'),
            category: fd.get('category'),
            price: '₱' + fd.get('price'),
            link: fd.get('link'),
            description: fd.get('description')
        };

        setProducts(prev => prev.map(p => p.id === product.id ? updated : p));
        internalRef.current?.close();
        onClose?.();
    }

    if (!product) {
        return null;
    }

    return (
        <>
            <dialog ref={internalRef} >
                <form 
                    id="add-product-form"
                    onSubmit={handleSubmit}
                >
                    <form 
                        className='add-product-form-close-btn'
                        method="dialog"
                    >
                        <button><X color='#c7464e'/></button>
                    </form>

                    <span>
                        <div>
                            <label htmlFor='product-name'>PRODUCT NAME</label>
                            <input id="product-name" type="text" name='product-name' defaultValue={product.productName} required/>
                        </div>
                        <div>
                            <label htmlFor='category'>CATEGORY</label>
                            <input id="category" type="text" name='category' defaultValue={product.category} required/>
                        </div>
                    </span>
                    <span>
                        <div>
                            <label htmlFor='price'>PRICE</label>
                            <input id='price' type="number" name='price' defaultValue={product.price?.replace(/^₱/, '')} required />
                        </div> 
                        <div>
                            <label htmlFor='link'>LINK</label>
                            <input id='link' type="url" name='link' defaultValue={product.link} required/>
                        </div>

                    </span>
                    <div>
                        <label htmlFor='description'>DESCRIPTION</label>
                        <textarea id='description' type='text' name='description' defaultValue={product.description} required></textarea>
                    </div>
                    
            
                    <button 
                        className="add-product-form-btn add-product-form-add-btn"
                    >UPDATE PRODUCT</button>

                    <form method="dialog" style={{width: "80%"}}>
                        <button 
                            onClick={() => { internalRef.current?.close(); onClose?.(); }}
                            className="add-product-form-btn add-product-form-cancel-btn">
                                CANCEL
                        </button>
                    </form>
                </form>
            </dialog>
        </>
    )
}