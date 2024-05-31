
export const customers = [
    {
        "id": 11908,
        "name": "Ram",
        "color": [182, 73, 99],
        "email": "jesus_christ@church.com",
        "pincode": "Mumbai",
        "location_name": "Mumbai, Maharashtra, India",
        "type": "C",
        "profile_pic": null,
        "gst": ""
    },
    {
        "id": 11909,
        "name": "John",
        "color": [100, 149, 237],
        "email": "john_doe@tech.com",
        "pincode": "New York",
        "location_name": "New York, NY, USA",
        "type": "B",
        "profile_pic": null,
        "gst": ""
    },
    {
        "id": 11910,
        "name": "Jane",
        "color": [34, 139, 34],
        "email": "jane_doe@eco.com",
        "pincode": "Los Angeles",
        "location_name": "Los Angeles, CA, USA",
        "type": "C",
        "profile_pic": null,
        "gst": ""
    },
    {
        "id": 11911,
        "name": "Smith",
        "color": [255, 0, 0],
        "email": "smith@wearables.com",
        "pincode": "Chicago",
        "location_name": "Chicago, IL, USA",
        "type": "B",
        "profile_pic": null,
        "gst": ""
    },
    {
        "id": 11912,
        "name": "Alice",
        "color": [255, 105, 180],
        "email": "alice@personalcare.com",
        "pincode": "San Francisco",
        "location_name": "San Francisco, CA, USA",
        "type": "C",
        "profile_pic": null,
        "gst": ""
    },
    {
        "id": 11913,
        "name": "Bob",
        "color": [0, 128, 0],
        "email": "bob@health.com",
        "pincode": "Austin",
        "location_name": "Austin, TX, USA",
        "type": "B",
        "profile_pic": null,
        "gst": ""
    }
];


export const products = [
    {
        "id": 209,
        "display_id": 8,
        "owner": 1079,
        "name": "New Product",
        "category": "The god of War",
        "characteristics": "New Product Characteristics",
        "features": "",
        "brand": "New Product Brand",
        "sku": [
            {
                "id": 248,
                "selling_price": 54,
                "max_retail_price": 44,
                "customer": 11908,
                "customer_profile": {
                    "id": 11908,
                    "name": "Ram",
                    "color": [182, 73, 99],
                    "email": "jesus_christ@church.com",
                    "pincode": "Mumbai",
                    "location_name": "Mumbai, Maharashtra, India",
                    "type": "C",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 247,
                "selling_price": 32,
                "max_retail_price": 32,
                "amount": 33,
                "unit": "kg",
                "quantity_in_inventory": 0,
                "product": 209
            },
            {
                "id": 246,
                "selling_price": 23,
                "max_retail_price": 21,
                "amount": 22,
                "unit": "kg",
                "quantity_in_inventory": 1,
                "product": 209
            }
        ],
        "updated_on": "2024-05-24T12:46:41.995873Z",
        "adding_date": "2024-05-24T12:46:41.995828Z"
    },
    {
        "id": 210,
        "display_id": 9,
        "owner": 1080,
        "name": "Advanced Widget",
        "category": "Technology",
        "characteristics": "High performance, durable",
        "features": "Water-resistant, Bluetooth enabled",
        "brand": "Techie",
        "sku": [
            {
                "id": 249,
                "selling_price": 99,
                "max_retail_price": 89,
                "customer": 11909,
                "customer_profile": {
                    "id": 11909,
                    "name": "John",
                    "color": [100, 149, 237],
                    "email": "john_doe@tech.com",
                    "pincode": "New York",
                    "location_name": "New York, NY, USA",
                    "type": "B",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 20,
                "unit": "pcs",
                "quantity_in_inventory": 10,
                "product": 210
            },
            {
                "id": 250,
                "selling_price": 95,
                "max_retail_price": 85,
                "amount": 15,
                "unit": "pcs",
                "quantity_in_inventory": 5,
                "product": 210
            }
        ],
        "updated_on": "2024-05-25T13:00:00.000000Z",
        "adding_date": "2024-05-25T12:00:00.000000Z"
    },
    {
        "id": 211,
        "display_id": 10,
        "owner": 1081,
        "name": "Eco-friendly Bottle",
        "category": "Household",
        "characteristics": "Recyclable, BPA-free",
        "features": "Dishwasher safe, leak-proof",
        "brand": "EcoWare",
        "sku": [
            {
                "id": 251,
                "selling_price": 15,
                "max_retail_price": 13,
                "customer": 11910,
                "customer_profile": {
                    "id": 11910,
                    "name": "Jane",
                    "color": [34, 139, 34],
                    "email": "jane_doe@eco.com",
                    "pincode": "Los Angeles",
                    "location_name": "Los Angeles, CA, USA",
                    "type": "C",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 50,
                "unit": "pcs",
                "quantity_in_inventory": 25,
                "product": 211
            },
            {
                "id": 252,
                "selling_price": 14,
                "max_retail_price": 12,
                "amount": 45,
                "unit": "pcs",
                "quantity_in_inventory": 20,
                "product": 211
            }
        ],
        "updated_on": "2024-05-26T14:00:00.000000Z",
        "adding_date": "2024-05-26T12:00:00.000000Z"
    },
    {
        "id": 212,
        "display_id": 11,
        "owner": 1082,
        "name": "Smart Watch",
        "category": "Wearables",
        "characteristics": "Heart rate monitor, GPS",
        "features": "Touchscreen, Water-resistant",
        "brand": "GadgetPlus",
        "sku": [
            {
                "id": 253,
                "selling_price": 199,
                "max_retail_price": 180,
                "customer": 11911,
                "customer_profile": {
                    "id": 11911,
                    "name": "Smith",
                    "color": [255, 0, 0],
                    "email": "smith@wearables.com",
                    "pincode": "Chicago",
                    "location_name": "Chicago, IL, USA",
                    "type": "B",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 10,
                "unit": "pcs",
                "quantity_in_inventory": 7,
                "product": 212
            },
            {
                "id": 254,
                "selling_price": 189,
                "max_retail_price": 170,
                "amount": 8,
                "unit": "pcs",
                "quantity_in_inventory": 6,
                "product": 212
            }
        ],
        "updated_on": "2024-05-27T15:00:00.000000Z",
        "adding_date": "2024-05-27T12:00:00.000000Z"
    },
    {
        "id": 213,
        "display_id": 12,
        "owner": 1083,
        "name": "Organic Soap",
        "category": "Personal Care",
        "characteristics": "Natural ingredients, paraben-free",
        "features": "Moisturizing, Gentle on skin",
        "brand": "PureCare",
        "sku": [
            {
                "id": 255,
                "selling_price": 5,
                "max_retail_price": 4,
                "customer": 11912,
                "customer_profile": {
                    "id": 11912,
                    "name": "Alice",
                    "color": [255, 105, 180],
                    "email": "alice@personalcare.com",
                    "pincode": "San Francisco",
                    "location_name": "San Francisco, CA, USA",
                    "type": "C",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 100,
                "unit": "bars",
                "quantity_in_inventory": 50,
                "product": 213
            },
            {
                "id": 256,
                "selling_price": 4.5,
                "max_retail_price": 4,
                "amount": 90,
                "unit": "bars",
                "quantity_in_inventory": 45,
                "product": 213
            }
        ],
        "updated_on": "2024-05-28T16:00:00.000000Z",
        "adding_date": "2024-05-28T12:00:00.000000Z"
    },
    {
        "id": 214,
        "display_id": 13,
        "owner": 1084,
        "name": "Fitness Tracker",
        "category": "Health",
        "characteristics": "Step counter, sleep monitor",
        "features": "Long battery life, Bluetooth sync",
        "brand": "FitTrack",
        "sku": [
            {
                "id": 257,
                "selling_price": 79,
                "max_retail_price": 70,
                "customer": 11913,
                "customer_profile": {
                    "id": 11913,
                    "name": "Bob",
                    "color": [0, 128, 0],
                    "email": "bob@health.com",
                    "pincode": "Austin",
                    "location_name": "Austin, TX, USA",
                    "type": "B",
                    "profile_pic": null,
                    "gst": ""
                },
                "amount": 15,
                "unit": "pcs",
                "quantity_in_inventory": 8,
                "product": 214
            },
            {
                "id": 258,
                "selling_price": 75,
                "max_retail_price": 65,
                "amount": 12,
                "unit": "pcs",
                "quantity_in_inventory": 6,
                "product": 214
            }
        ],
        "updated_on": "2024-05-29T17:00:00.000000Z",
        "adding_date": "2024-05-29T12:00:00.000000Z"
    }
];

export const activeSaleOrders = [
    {
        "id": 1,
        "customer_id": 11908,
        "items": [
            {
                "sku_id": 248,
                "price": 54,
                "quantity": 2
            }
        ],
        "paid": false,
        "totprice":108,
        "customer_name":"Ram",
        "invoice_no": "Invoice - 1212121",
        "invoice_date": "2024-07-05"
    }
];

export const completedSaleOrders = [
    {
        "id": 1,
        "customer_id": 11909,
        "items": [
            {
                "sku_id": 247,
                "price": 32,
                "quantity": 3
            }
        ],
        "paid": true,
        "totprice":96,
        "customer_name":"John",
        "invoice_no": "Invoice - 1212122",
        "invoice_date": "2024-05-01"
    }
];
