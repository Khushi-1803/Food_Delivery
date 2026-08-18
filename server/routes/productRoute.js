import express from express;
import {
    registerUser,
    userLogin,
    getProfile,
    updateAddress,
    getUserOrders,
} from "../controller/UserController.js"

const router = express.Router();

router.get("/", getProducts);

router.get("/category/:category", getProductsByCategory);

router.get("/:id", getProduct);

module.exports = router;