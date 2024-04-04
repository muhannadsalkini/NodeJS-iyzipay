// Subscription

// NON-3DS Subscription
/*
POST https://api.iyzipay.com/v2/subscription/initialize

Request Body

-> locale - String - İyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri TR.
-> conversationId - String - İstek esnasında gönderip, sonuçta alabileceğiniz bir değer, request/response eşleşmesi yapmak için kullanılabilir. En yaygın kullanış biçimi üye iş yerinin abonelik numarasıdır.
-> shippingAddress.contactName* - String - Kargo iletişim ismi.
-> shippingAddress.country* - String - Kargo ülkesi.
-> shippingAddress.city* - String - Kargo şehri.
-> shippingAddress.zipCode - String - Kargo zip kodu.
-> shippingAddress.address* - String - Kargo adresi.
-> billingAddress.contactName* - String - Fatura iletişim ismi.
-> billingAddress.country* - String - Fatura adresi.
-> billingAddress.city* - String - Fatura şehri.
-> billingAddress.zipCode - String - Fatura zip kodu.
-> billingAddress.address* - String - Fatura adresi.
-> identityNumber* - String - Müşteri telefon numarası.
-> gsmNumber* - String - Müşteri email adresi.
-> email* - String - Müşteri kimlik numarası.
-> surname* - String - Müşteri soyadı.
-> name* - String - Müşteri adı.
-> subscriptionInitialStatus - String - Abonelik başlangıç durumu (PENDING veya ACTIVE)
-> pricingPlanReferenceCode* - String - Abonelikte uygulanacak plan referans kodu.
-> paymentCard.consumerToken - String - Saklı kartın kullanılabilmesi için kullanıcı için oluşturulmuş token. Geçerlilik süresi 30 dakikadır.
-> paymentCard.cardToken - String - Seçilen karta ait token.
-> paymentCard.ucsToken - String - Kartın iyzico ortamında çözümlenmesi için kullanıcı için oluşturulmul değer. Geçerlilik süresi 30 dakikadır.
-> paymentCard.registerConsumerCard* - Boolean - Kartın saklanması için gerekli değer. True gönderilmelidir. Kartın iyzico ortamında saklanacağının onayı alınmalı. Detaylı bilgi için iyzico korumalı kart saklama dökümanını inceleyiniz.
-> paymentCard.cvc - String - Kart CVC kodu
-> paymentCard.expireMonth - String - Kart son kullanma ayı
-> paymentCard.expireYear - String - Kart son kullanma yılı.
-> paymentCard.cardNumber - String - Kredi kartı numarası.
-> paymentCard.cardHolderName - String - Kart sahibi adı ve soyadı.

200 ok
{
    "status": "success",
    "systemTime": 1687096973255,
    "data": {
        "referenceCode": "91e96872-1d07-4b53-936f-9afaeeb2594b",
        "parentReferenceCode": "0a523735-db2d-41c2-a861-924fbbb3be7c",
        "pricingPlanReferenceCode": "10d3f566-6554-41e5-81fa-79d3df8edec0",
        "customerReferenceCode": "c38d6334-3096-40b6-95ea-37fb6c92e740",
        "subscriptionStatus": "ACTIVE",
        "trialDays": 30,
        "trialStartDate": 1687096973244,
        "trialEndDate": 1689688973244,
        "createdDate": 1687096973244,
        "startDate": 1687096973244,
        "endDate": 1692712973244
    }
}
*/

// Activate Subscription
/*
POST https://api.iyzipay.com/v2/subscription/subscriptions/{subscriptionReferenceCode}/activate

Requets body

subscriptionReferenceCode* - String - Eşsiz abonelik referans numarsi

200 ok
{
    "status": "success",
    "systemTime": 1687096973255
}
*/

// Try payment for unsecsesful payments
/*
POST https://api.iyzipay.com/operation/retry

Requst body

referenceCode* - String - Başarısız ödemenin referans kodu

200 ok
{
    "status": "success",
    "systemTime": 1687096973255
}
*/

// Upgrade subscription
/*
POST  https://api.iyzipay.com/v2/subscription/subscriptions/{subscriptionReferenceCode}/upgrade
*/

// Cancel subscription
/*
POST https://api.iyzipay.com/v2/subscription/subscriptions/{subscriptionReferenceCode}/cancel

Requet body

-> locale - String - Yapılan isteğin sonucunu belirtir. İşlem başarılı ise success değeri döner.
-> subscriptionReferenceCode* - String - Abonelik referans numarası.
-> conversationId - String - Dönen sonucun o anki unix timestamp değeri

200 ok
{
    "status": "success",
    "systemTime": 1687096973255
}
*/

// Get Subscription details
/*
GET https://api.iyzipay.com/v2/subscription/subscriptions/{subscriptionReferenceCode}

Requet body
-> subscriptionReferenceCode - String - Abonelik refereans numarası

200 ok
{
    "status": "success",
    "systemTime": 1687100005457,
    "data": {
        "totalCount": 0,
        "currentPage": 1,
        "pageCount": 0,
        "items": []
    }
}
*/

// Serach Subscription
/*
GET https://api.iyzipay.com/v2/subscription/subscriptions


*/

// Update subscription card information
/*
POST https://api.iyzipay.com/v2/subscription/card-update/checkoutform/initialize
*/
