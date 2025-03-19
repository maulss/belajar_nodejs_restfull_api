# Contact API Spec

## Create Contact API

Endpoint : POST /api/contact

Headers : 
- Authorization : token

Request Body : 

```json
{
    "first_name" : "maulana",
    "last_name" : "givari",
    "email" : "maulana@gmail.com",
    "phone" : "97987979698696"
}
```

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "maulana",
        "last_name" : "givari",
        "email" : "maulana@gmail.com",
        "phone" : "97987979698696"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Email is not valid format"
}
```

## Update Contact API

Endpoint : PUT /api/contact/:id

Headers : 
- Authorization : token

Request Body : 

```json
{
    "first_name" : "maulana",
    "last_name" : "givari",
    "email" : "maulana@gmail.com",
    "phone" : "97987979698696"
}
```

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "maulana",
        "last_name" : "givari",
        "email" : "maulana@gmail.com",
        "phone" : "97987979698696"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Email is not valid format"
}
```

## Get Contact API

Endpoint : GET /api/contact/:id

Headers : 
- Authorization : token 

Response Body Succes : 
```json
{
    "data" : {
        "id" : 1,
        "first_name" : "maulana",
        "last_name" : "givari",
        "email" : "maulana@gmail.com",
        "phone" : "97987979698696"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Contact is not found"
}
```


## Search Contact API

Endpoint : GET /api/contact

Headers : 
- Authorization : token 

Query Params : 
- name : Serach by first_name or last_name (using like), optional
- email : Serach by email (using like), optional
- phone : Serach by phone (using like), optional
- page : number of page, default 1,
- size : size per page, default 10,



Response Body Succes : 
```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "maulana",
            "last_name" : "givari",
            "email" : "maulana@gmail.com",
            "phone" : "97987979698696"
        }, 
        {
            "id" : 2,
            "first_name" : "maulana",
            "last_name" : "givari",
            "email" : "maulana@gmail.com",
            "phone" : "97987979698696"
        }, 
    ], 
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30,
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```

## Remove Contact API

Endpoint : DELETE /api/contact/:id

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

