export type Address = {
    address1: String;
    address2: String;
    city: String;
    company: String;
    country_code: String;
    first_name: String;
    last_name: String;
    overridden: Boolean;
    phone: String;
    province: String;
    province_code: String;
    zip: String;
}

export type Order = {

}

export type Dispatch = {
    address: Address;
    id: Number;
    order: Order;
    order_date: String;
    products: Array<Product>;
    status: String;
    subscription_id: Number;
}

export type PaymentMethod = {

}

export type Price = {
    amount: String;
    currency: String;
    formatted: String;
}

export type Image = {
    height: Number;
    width: Number;
    url: string;
}

export type ProductInfoOption = {

}

export type ProductInfo = {
    description: String;
    id: Number;
    image: Image;
    options: Array<ProductInfoOption>;
    title: String;
}

export type ProductVariant = {
    id: Number;
    title: String;
    sku: String;
}

export type Product = {
    id: Number;
    price: Price;
    product: ProductInfo;
    quantity: Number;
    total: Price;
    variant: ProductVariant;
}

export type Subscription = {
    billing_address: String;
    country_code: String;
    created_at: String;
    currency: String;
    discount: String;
    failure_reason: String;
    gift: Boolean;
    id: Number;
    interval: Number;
    last_dispatch: Dispatch;
    next_dispatch: Dispatch;
    paused_until: String;
    payment_method: PaymentMethod;
    period: String;
    products: Array<Product>;
    shipping_address: Address;
    start_date: String;
    status: String
}