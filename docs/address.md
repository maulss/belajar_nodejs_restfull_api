# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/address

Headers : 
- Authorization : token

Request Body : 

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "propinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "propinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contact/:contactId/address/:addressId

Headers : 
- Authorization : token

Request Body : 

```json
{
    "street" : "jalan apa",
    "city" : "kota apa",
    "province" : "propinsi apa",
    "country" : "negara apa",
    "postal_code" : "kode pos"
}
```

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "propinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```

## Get Address API

Endpoint : GET /api/contact/:contactId/:addressId

Headers : 
- Authorization : token 

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "street" : "jalan apa",
        "city" : "kota apa",
        "province" : "propinsi apa",
        "country" : "negara apa",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```


## List Addresses API

Endpoint : GET /api/contact/:contactId/address

Headers : 
- Authorization : token 


Response Body Succes : 
```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "jalan apa",
            "city" : "kota apa",
            "province" : "propinsi apa",
            "country" : "negara apa",
            "postal_code" : "kode pos"
        }, 
        {
            "id" : 2,
            "street" : "jalan apa",
            "city" : "kota apa",
            "province" : "propinsi apa",
            "country" : "negara apa",
            "postal_code" : "kode pos"
        }, 
    ], 
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contact/:contactId/address/:addressId

Response Body Succes : 
```json
{
    "data" : "OKE"
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```

