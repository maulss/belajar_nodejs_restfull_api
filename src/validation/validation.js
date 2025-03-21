import { ResponseError } from "../error/response-error.js"

const validate = (schema, resquest) => {
    const result = schema.validate(resquest, {
        abortEarly: false,
        allowUnknown: false
    })
    if (result.error) {
        throw new ResponseError(400, result.error.message)
    }
    return result.value
}

export { validate }