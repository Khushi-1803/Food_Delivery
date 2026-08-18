import jwt from jsonwebtoken;

const authMiddleware = async (req, res) => {
    try {
        const authHeader = req.headers.authorizon;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRRT
        )
         req.user = {
      id: decoded.id,
    };
    next();
    } catch (error) {
        return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
}
