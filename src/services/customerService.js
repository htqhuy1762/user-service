const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description,
        });
        return result;
    } catch (error) {
        console.log('Error when create customer:', error);
        return null;
    }
};

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log('Error when create array customer:', error);
        return null;
    }
};

const getCustomersService = async (limit, page) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            result = await Customer.find({}).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find({});
        }
        return result;
    } catch (error) {
        console.log('Error when get customers:', error);
        return null;
    }
};

const updateCustomerService = async (customerID, name, email, address) => {
    try {
        let result = await Customer.updateOne(
            {
                _id: customerID,
            },
            {
                name,
                email,
                address,
            },
        );
        return result;
    } catch (error) {
        console.log('Error when update customer:', error);
        return null;
    }
};

const deleteCustomerService = async (customerID) => {
    try {
        let result = await Customer.findByHoiDanIT({
            _id: customerID,
        });
        return result;
    } catch (error) {
        console.log('Error when update customer:', error);
        return null;
    }
};

const deleteCustomersService = async (idArr) => {
    try {
        let result = await Customer.delete({
            _id: {
                $in: idArr,
            },
        });
        return result;
    } catch (error) {
        console.log('Error when delete customers:', error);
        return null;
    }
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getCustomersService,
    updateCustomerService,
    deleteCustomerService,
    deleteCustomersService,
};
