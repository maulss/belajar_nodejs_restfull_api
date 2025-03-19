import { ResponseError } from "../error/response-error.js";

const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        res.status(err.status).json({
            errors: err.message
        }).end();
    } else {

        res.status(500).json({
            errors: err.message
        }).end();

    }
};

export { errorMiddleware }

// import { ResponseError } from "../error/response-error.js";
// import Joi from "joi";
// import { logger } from "../application/logger.js"; // Import logger

// const { ValidationError } = Joi;

// const errorMiddleware = async (err, req, res, next) => {
//     if (!err) {
//         next();
//         return;
//     }

//     logger.error({
//         message: err.message,
//         stack: err.stack,
//         method: req.method,
//         url: req.originalUrl,
//         body: req.body
//     });

//     if (err instanceof ResponseError) {
//         res.status(err.status).json({
//             errors: err.message
//         }).end();
//     } else {
//         res.status(500).json({
//             errors: err.message
//         }).end();
//     }
// };

// export { errorMiddleware };
