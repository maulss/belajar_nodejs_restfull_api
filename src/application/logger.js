// import winston from "winston";

// export const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console({})
//     ]
// });

import winston from "winston";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(), // Menampilkan log di console
        new winston.transports.File({ filename: "logs/requests.log" }) // Simpan log request ke file
    ]
})