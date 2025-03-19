# User API Spec

## Register User API

Endpoint : POST /api/user

Request Body : 

```json
{
    "username" : "maulana",
    "password" : "rahasia",
    "name" : "Maulana Givari"
}
```

Response Body Succes : 
```json
{
    "data" : {
        "username" : "maulana",
        "name" : "Maulana Givari"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Username already registered"
}
```

## Login User API

Endpoint : POST /api/user/login

Request Body : 

```json
{
    "username" : "maulana",
    "password" : "rahasia",
}
```

Response Body Succes : 
```json
{
    "data" : {
        "token" : "unique token"
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Username or password wrong"
}
```

## Update User API

Endpoint : PATCH /api/user/current

Headers : 
- Authorization : token 

Request Body : 

```json
{
    "name" : "Maulana Givari Lagi //optional",
    "password" : "New password //optional",
}
```

Response Body Succes : 
```json
{
    "data" : {
        "username" : "maulana",
        "name" : "Maulana Givari",
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Name length max 100"
}
```


## Get User API

Endpoint : GET /api/user/current

Headers : 
- Authorization : token 


Response Body Succes : 
```json
{
    "data" : {
        "username" : "maulana",
        "name" : "Maulana Givari",
    }
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```

## Logout User API

Endpoint : DELETE /api/user/logout

Response Body Succes : 
```json
{
    "data" : "OKE"
}
```

Response Body Error : 
```json
{
    "errors" : "Unauthorized"
}
```

