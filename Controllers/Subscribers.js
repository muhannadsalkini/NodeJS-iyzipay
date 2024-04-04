// Subscribers

// Update subscriber
/*
POST https://api.iyzipay.com/v2/subscription/customers/{customerReferenceCode}

Request Body

-> conversationId - String - İstek esnasında gönderip, sonuçta alabileceğiniz bir değer, request/response eşleşmesi yapmak için kullanılabilir.
-> locale - String - İyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri TR.
-> name* - String - Abone adı.
-> customerReferenceCode* - String - Abone referans kodu.
-> billingAddress.zipCode - String - Fatura posta kodu.
-> billingAddress.address* - String - Fatura adresi.
-> billingAddress.country* - String - Fatura ülkesi.
-> billingAddress.city* - String - Fatura şehri.
-> billingAddress.contactName* - String - Fatura iletişim ismi.
-> identitynumber* - String - Abone kimlik numarası.
-> surname* - String - Abone soyadı.
-> shippingAddress.zipCode - String - Kargo posta kodu.
-> shippingAddress.address* - String - Kargo adresi.
-> shippingAddress.country* - String - Kargo ülkesi.
-> shippingAddress.city* - String - Kargo şehri.
-> shippingAddress.contactName* - String - Kargo iletişim ismi.

200 ok
{
    "status":"success",
    "systemTime":1687815662201,
    "data":{
        "referenceCode":"e2378434-3192-426d-a821-59c49583b6d4",
        "createdDate":1687815595481,
        "status":"ACTIVE",
        "name":"John",
        "surname":"Doe",
        "identityNumber":"11111111111",
        "email":"johndoe@iyzico.com",
        "gsmNumber":"+905555555555",
        "contactEmail":"johndoe@iyzico.com",
        "contactGsmNumber":"+905555555111",
        "billingAddress":{
            "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
            "zipCode":"34660",
            "contactName":"John Doe",
            "district":"altunizade",
            "city":"Istanbul",
            "country":"Turkey"
        },
        "shippingAddress":{
            "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
            "zipCode":"34660",
            "contactName":"John Doe",
            "district":"altunizade",
            "city":"Istanbul",
            "country":"Turkey"
        }
    }
}
*/

// Get Subscriber Details
/*
GET https://api.iyzipay.com/v2/subscription/customers/{customerReferenceCode}

Request body
-> customerReferenceCode* - String - Abone referans kodu.

200 ok
{
    "status":"success",
    "systemTime":1687816688973,
    "data":{
        "referenceCode":"e2378434-3192-426d-a821-59c49583b6d4",
        "createdDate":1687815595481,
        "status":"ACTIVE",
        "name":"John",
        "surname":"Doe",
        "identityNumber":"11111111111",
        "email":"johndoe@iyzico.com",
        "gsmNumber":"+905555555555",
        "contactEmail":"johndoe@iyzico.com",
        "contactGsmNumber":"+905555555111",
        "billingAddress":{
            "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
            "zipCode":"34660",
            "contactName":"John Doe",
            "district":"altunizade",
            "city":"Istanbul",
            "country":"Turkey"
        },
        "shippingAddress":{
            "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
            "zipCode":"34660",
            "contactName":"John Doe",
            "district":"altunizade",
            "city":"Istanbul",
            "country":"Turkey"
        }
    }
}
*/

// List Subscribers
/*
GET https://api.iyzipay.com/v2/subscription/customers

Request Body
-> page* - Integer - Belirtilen sayfa için tüm ürünleri getirir.

-> count* - Integer - Sayfa başına kaç ürün listelenceğini belirtir.

200 ok 
{
    "status":"success",
    "systemTime":1687817022470,
    "data":{
        "totalCount":2,
        "currentPage":1,
        "pageCount":1,
        "items":[
            {
                "referenceCode":"e2378434-3192-426d-a821-59c49583b6d4",
                "createdDate":1687815595481,
                "status":"ACTIVE",
                "name":"John",
                "surname":"Doe",
                "identityNumber":"11111111111",
                "email":"johndoe@iyzico.com",
                "gsmNumber":"+905555555555",
                "contactEmail":"johndoe@iyzico.com",
                "contactGsmNumber":"+905555555111",
                "billingAddress":{
                    "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
                    "zipCode":"34660",
                    "contactName":"John Doe",
                    "district":"altunizade",
                    "city":"Istanbul",
                    "country":"Turkey"
                },
                "shippingAddress":{
                    "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
                    "zipCode":"34660",
                    "contactName":"John Doe",
                    "district":"altunizade",
                    "city":"Istanbul",
                    "country":"Turkey"
                }
            },
            {
                "referenceCode":"deeb305d-053e-412e-bead-bc507f771223",
                "createdDate":1687379184912,
                "status":"ACTIVE",
                "name":"John",
                "surname":"Doe",
                "identityNumber":"11111111111",
                "email":"johndoe2@iyzico.com",
                "gsmNumber":"+905555555555",
                "contactEmail":"johndoe2@iyzico.com",
                "contactGsmNumber":"+905555555111",
                "billingAddress":{
                    "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
                    "zipCode":"34660",
                    "contactName":"John Doe",
                    "district":"altunizade",
                    "city":"Istanbul",
                    "country":"Turkey"
                },
                "shippingAddress":{
                    "address":"Uskudar Burhaniye Mahallesi iyzico A.S",
                    "zipCode":"34660",
                    "contactName":"John Doe",
                    "district":"altunizade",
                    "city":"Istanbul",
                    "country":"Turkey"
                }
            }
        ]
    }
}
*/
