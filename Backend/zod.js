const zod = require('zod');

const createInput = zod.object({
    username: zod.string(),
    cardNumber: zod.string(),
    cvv: zod.string(),
    billing: zod.string()
});

module.exports = {
    createInput
};
