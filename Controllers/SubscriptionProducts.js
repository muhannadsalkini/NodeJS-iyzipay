// Subscription Products

// Create Product
/* 
POST https://api.iyzipay.com/v2/subscription/products

Request Body

-> conversationId - String - İstek esnasında gönderip, sonuçta alabileceğiniz bir değer, request/response eşleşmesi yapmak için kullanılabilir. En yaygın kullanış biçimi üye iş yerinin ürün numarasıdır.

-> locale - String - iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri tr’dir. en olarak kullanılabilir.

-> Description - String - Ürün açıklaması. Bu açıklama müşterilere gösterilebilir veya tarafınızda bir not olabilir.

-> name* - String - Ürün adı. Eşsiz bir isim olmalıdır. Mevcut bir isim başka bir ürüne verilemez.

200 ok
{
    "status": "success",
    "systemTime": 1686785492734,
    "data": {
        "referenceCode": "ac3afdd2-69af-4ca6-a284-46bf8540a954",
        "createdDate": 1686785492730,
        "name": "Product Name",
        "description": "Product Description",
        "status": "ACTIVE",
        "pricingPlans": []
    }
}
*/

// Update product
/*
POST https://api.iyzipay.com/v2/subscription/products/{reference_code}

Request Body

-> productReferenceCode* - String - Ürüne ait eşsiz referans kodu

-> locale - String - iyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri tr’dir. en olarak kullanılabilir.

-> Description - String - Ürün açıklaması. Bu açıklama müşterilere gösterilebilir veya tarafınızda bir not olabilir.

-> name* - String - Ürün adı. Eşsiz bir isim olmalıdır. Mevcut bir isim başka bir ürüne verilemez.


200 ok 
{
    "status": "success",
    "systemTime": 1686786694036,
    "data": {
        "referenceCode": "561d57c4-6db8-437d-86a7-a12af6b47a7d",
        "createdDate": 1686786574621,
        "name": "New Product Name",
        "description": "New Product Description",
        "status": "ACTIVE",
        "pricingPlans": []
    }
}
*/

//  Delete product
/*
DELETE https://api.iyzipay.com/v2/subscription/products/{reference_code}

Request Body
-> productReferenceCode* - String - Ürüne ait eşsiz referans kodu

200 ok
{
    "status": "success",
    "systemTime": 1686862271881
}
*/

// Get Product details
/*
GET https://api.iyzipay.com/v2/subscription/products/{reference_code}

Request Body
-> productReferenceCode* - String - Ürüne ait eşsiz referans kodu

200 ok 
{
    "status": "success",
    "systemTime": 1686863264574,
    "data": {
        "referenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
        "createdDate": 1675684451778,
        "name": "test",
        "status": "ACTIVE",
        "pricingPlans": [
            {
                "referenceCode": "a3dde7ac-dff4-4d96-a6da-5780aeee9c9a",
                "createdDate": 1675684471828,
                "name": "testop",
                "price": 100.00000000,
                "paymentInterval": "MONTHLY",
                "paymentIntervalCount": 1,
                "trialPeriodDays": 0,
                "currencyCode": "TRY",
                "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
                "planPaymentType": "RECURRING",
                "status": "ACTIVE"
            }
        ]
    }
}
*/

// List Products
/*
GET https://api.iyzipay.com/v2/subscription/products

Request Body
-> page* - Integer - Belirtilen sayfa için tüm ürünleri getirir.

-> count* - Integer - Sayfa başına kaç ürün listelenceğini belirtir.

200 ok 
{
    "status": "success",
    "systemTime": 1686862833975,
    "data": {
        "totalCount": 5,
        "currentPage": 1,
        "pageCount": 1,
        "items": [
            {
                "referenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
                "createdDate": 1675684451778,
                "name": "test",
                "status": "ACTIVE",
                "pricingPlans": [
                    {
                        "referenceCode": "a3dde7ac-dff4-4d96-a6da-5780aeee9c9a",
                        "createdDate": 1675684471828,
                        "name": "testop",
                        "price": 100.00000000,
                        "paymentInterval": "MONTHLY",
                        "paymentIntervalCount": 1,
                        "trialPeriodDays": 0,
                        "currencyCode": "TRY",
                        "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
                        "planPaymentType": "RECURRING",
                        "status": "ACTIVE"
                    }
                ]
            }
        ]
    }
}
*/
