class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const isDuplicate = this.products.some((product) => product.code === code);
        if (isDuplicate) {
            console.error("Este producto ya existe");
            return;
        }
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.error("Por favor completar todos los datos");
            return;
        }


        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0) {
            product.id = 1;
        }
        else {
            product.id = this.products[this.products.length - 1].id + 1;
        }
        this.products.push(product);
    }


    getProductById = (id) => {
        let productFinderById = this.products.find((obj) => obj.id === id);
        if (productFinderById) {
            return productFinderById
        }
        else if (productFinderById == undefined) {
            console.error("Producto no encontrado por ID")
        }
    }
}


