const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService, createArrayCustomerService } = require('../services/customerService');

module.exports = {
    postCreateCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageURL = '';

        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageURL = result.path;
        }

        let customerData = { name, address, phone, email, description, image: imageURL };

        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
    postCreateArrayCustomerAPI: async (req, res) => {
        let customerArr = await createArrayCustomerService(req.body.customers);

        if (customerArr) {
            return res.status(200).json({
                EC: 0,
                data: customerArr,
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: customerArr,
            });
        }
    },
};
