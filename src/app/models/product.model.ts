export class Product {
    constructor(
        public name:string,
        public product_id:number,
        public description:string,
        public price:number,
        public detailedDescription?:string,
        public img_src?:string
    ){}
}