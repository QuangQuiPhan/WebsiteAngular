export class ProductsModules {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public quantity: number,
        public avatar: string = '',
        public alt: string,
        public category: number
    ){}
}

export class Categories{
    constructor(public id: number,
        public categoryName: string){}
}

