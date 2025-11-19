class Product{
    constructor ({id = null, name, price, description, img, tags = [], stats = {}, created_at = null, modified_at = null }){
        if(!name) throw new Error(`Invalid name: ${name}`);
        if ( isNaN(Number(price)) || Number(price) <= 0) throw new Error(`Invalid price: `);
        
        const now = () => new Date().toISOString();
        this.name = name;
        this.created_at = created_at || now();
        this.modified_at = modified_at || now();

        this.hasTags = tags.length > 0;

        console.log(` @Products Constructor image : ${this.img}`);
    }

    /**
     * @returns {Object} - Returns All except the id.
     */
    toFirestore(){
        return {
            name: this.name, 
            created_at: this.created_at,
            modified_at: this.modified_at
        }
    }
}

export default Product;