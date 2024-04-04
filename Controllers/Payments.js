// Payments

// Create payment
/*
POST https://api.iyzipay.com/v2/subscription/products/{product_reference}/pricing-plans

Request Body

-> conversationId - String - İstek esnasında gönderip, sonuçta alabileceğiniz bir değer, request/response eşleşmesi yapmak için kullanılabilir. En yaygın kullanış biçimi üye iş yerinin plan numarasıdır.
-> locale - String - İyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri TR.
-> name* - String - Plan adı. Ödeme planı ile ilgili kısa bir bilgilendirme olacak şekilde değer girilmelidir.
-> productReferenceCode* - String - Planın ilişkilendirileceği ürünün referans kodu.
-> recurrenceCount - Integer - Ödeme periyodunun kaç kez tekrarlanacağını belirler. Örneğin ayda bir ödeme alan planınıza bu değeri 12 olarak girerseniz, 12 ay boyunca ödeme alınacaktır.
-> planPaymentType* - String - Abonelik tipini belirtir. RECURRING değeri girilmelidir.
-> trialPeriodDays - Integer - Deneme süresi veya ücretsiz kullanım süresi olarak kullanılır. Bu değer girilirse, ilk ödeme girilen gün sayısı sonunda alınır.
-> paymentIntervalCount* - Integer - Ödeme periodunun hangi sıklıkta olacağını belirler. Örneğin paymentInterval değeri WEEKLY, paymentIntervalCount değeri 2 olursa, ödemeler 2 hafta bir alınır.
-> paymentInterval* - String - Tekrarlı ödemenin alınacağı periyodu belirler. DAILY, WEEKLY, MONTHLY, YEARLY değerlerini alabilir.
-> currencyCode* - String - Ödemenin alınacağı para birimi. TL, USD, EUR olabilir. TL dışındaki para birimlerinin hesabınıza tanımlandığından emin olunuz.
-> price* - Decimal - Ödeme periyotlarında karttan çekilecek tutar. Plan için geçerli abonelik fiyatı.

200 ok
{
    "status": "success",
    "systemTime": 1686865372192,
    "data": {
        "referenceCode": "fb4f08bb-b95b-44e8-a7f4-4111c0fa99d9",
        "createdDate": 1686865372183,
        "name": "Ödeme Planı",
        "price": 440.40,
        "paymentInterval": "MONTHLY",
        "paymentIntervalCount": 1,
        "trialPeriodDays": 0,
        "currencyCode": "TRY",
        "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
        "planPaymentType": "RECURRING",
        "status": "ACTIVE",
        "recurrenceCount": 12
    }
}
*/

// Update Payment
/* 
POST https://api.iyzipay.com/v2/subscription/pricing-plans/{pricingPlanReferenceCode}

Request Body


-> conversationId - String - İstek esnasında gönderip, sonuçta alabileceğiniz bir değer, request/response eşleşmesi yapmak için kullanılabilir.
-> locale - String - İyzico istek sonucunda dönen metinlerin dilini ayarlamak için kullanılır. Varsayılan değeri TR.
-> name* - String - Plan adı. Ödeme planı ile ilgili kısa bir bilgilendirme olacak şekilde değer girilmelidir.
-> pricingPlanReferenceCode* - String - Plana ait eşsiz referans kodu. Plan güncellemek veya silmek, plan detayını görmek, abonelik başlatmak için kullanılır.
-> trialPeriodDays - Integer - Deneme süresi veya ücretsiz kullanım süresi olarak kullanılır. Bu değer girilirse, ilk ödeme girilen gün sayısı sonunda alınır.

200 ok 
{
    "status": "success",
    "systemTime": 1686865996746,
    "data": {
        "referenceCode": "fb4f08bb-b95b-44e8-a7f4-4111c0fa99d9",
        "createdDate": 1686865372183,
        "name": "Update Plan",
        "price": 440.40000000,
        "paymentInterval": "MONTHLY",
        "paymentIntervalCount": 1,
        "trialPeriodDays": 10,
        "currencyCode": "TRY",
        "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
        "planPaymentType": "RECURRING",
        "status": "ACTIVE",
        "recurrenceCount": 12
    }
}
*/

// Delete Payment
/*
DELETE https://api.iyzipay.com/v2/subscription/pricing-plans/{pricingPlanReferenceCode}

Request body

-> pricingPlanReferenceCodee* - String - Plana ait eşsiz referans kodu

200 ok
{
    "status": "success",
    "systemTime": 1686866455902
}
*/

// Get Payment Details
/*
GET https://api.iyzipay.com/v2/subscription/pricing-plans/{pricingPlanReferenceCode}

Request body

-> pricingPlanReferenceCodee* - String - Plana ait eşsiz referans kodu

200 ok 
{
    "status": "success",
    "systemTime": 1686866781049,
    "data": {
        "referenceCode": "d507f394-5823-4260-b942-23782045eaac",
        "createdDate": 1686866768055,
        "name": "Ödeme Planı",
        "price": 440.40000000,
        "paymentInterval": "MONTHLY",
        "paymentIntervalCount": 1,
        "trialPeriodDays": 0,
        "currencyCode": "TRY",
        "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
        "planPaymentType": "RECURRING",
        "status": "ACTIVE",
        "recurrenceCount": 12
    }
}
*/

// List PAyments
/*
GET https://api.iyzipay.com/v2/subscription/products/{product_reference}/pricing-plans

-> page* - Integer - Belirtilen sayfa için tüm ürünleri getirir.

-> count* - Integer - Sayfa başına kaç ürün listelenceğini belirtir.

200 ok 
{
    "status": "success",
    "systemTime": 1686867184729,
    "data": {
        "totalCount": 2,
        "currentPage": 1,
        "pageCount": 1,
        "items": [
            {
                "referenceCode": "d507f394-5823-4260-b942-23782045eaac",
                "createdDate": 1686866768055,
                "name": "Ödeme Planı",
                "price": 440.40000000,
                "paymentInterval": "MONTHLY",
                "paymentIntervalCount": 1,
                "trialPeriodDays": 0,
                "currencyCode": "TRY",
                "productReferenceCode": "235dbc68-d281-4626-9c85-98002e558ce7",
                "planPaymentType": "RECURRING",
                "status": "ACTIVE",
                "recurrenceCount": 12
            },
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
