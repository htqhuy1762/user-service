const { uploadSingleFile } = require('../services/fileService');
const {
    createCustomerService,
    createArrayCustomerService,
    getCustomersService,
    updateCustomerService,
    deleteCustomerService,
} = require('../services/customerService');

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
    getCustomersAPI: async (req, res) => {
        let customers = await getCustomersService();
        return res.status(200).json({
            EC: 0,
            data: customers,
        });
    },
    putUpdateCustomerAPI: async (req, res) => {
        // do something
        let customerID = req.body.customerID;
        let name = req.body.name;
        let email = req.body.email;
        let address = req.body.address;

        let customer = await updateCustomerService(customerID, name, email, address);

        return res.status(200).json({
            EC: 0,
            data: customer,
        });
    },
    deleteACustomerAPI: async (req, res) => {
        let id = req.body.customerID;
        let result = await deleteCustomerService(id);
        return res.status(200).json({
            EC: 0,
            data: result,
        });
    },
};
