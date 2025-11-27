import { X } from 'lucide-react';

export default function AddProductForm ({ ref, handleHideAddProductForm, products, setProducts }) {
    


    function addProductAction (formData) {

        const productName = formData.get('product-name');
        const category = formData.get('category');
        const price = '₱' + formData.get('price');
        const link = formData.get('link');
        const description = formData.get('description');

        const product = {
            id: products.length + 1,
            productName: formData.get('product-name'),
            category: formData.get('category'),
            price: '₱' + formData.get('price'),
            link: formData.get('link'),
            description: formData.get('description')
        }

        setProducts([...products, product]);

        console.log(product);
        console.log(products);


        ref.current.close();

        // MANUEL TESTING NG SHIT
        /*
        console.log('Product Name: ' + product.productName + "\n");
        console.log('category: ' + product.category + "\n");
        console.log('price: ' + product.price + "\n");
        console.log('link: ' + product.link + "\n");
        console.log('description: ' + product.description);
        */
    }

    return (
        <>  
            <dialog ref={ref} >
                <form 
                    id="add-product-form"
                    action={addProductAction}
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
                            <input id="product-name" type="text" name='product-name' required/>
                        </div>
                        <div>
                            <label htmlFor='category'>CATEGORY</label>
                            <input id="category" type="text" name='category' required/>
                        </div>
                    </span>
                    <span>
                        <div>
                            <label htmlFor='price'>PRICE</label>
                            <input id='price' type="number" name='price' required />
                        </div> 
                        <div>
                            <label htmlFor='link'>LINK</label>
                            <input id='link' type="url" name='link' required/>
                        </div>

                    </span>
                    <div>
                        <label htmlFor='description'>DESCRIPTION</label>
                        <textarea id='description' type='text' name='description' required></textarea>
                    </div>
                    
            
                    <button className="add-product-form-btn add-product-form-add-btn">ADD PRODUCT</button>

                    <form method="dialog" style={{width: "80%"}}>
                        <button 
                            onClick={handleHideAddProductForm}
                            className="add-product-form-btn add-product-form-cancel-btn">
                                CANCEL
                        </button>
                    </form>
                </form>
            </dialog>
        </>
    )
}