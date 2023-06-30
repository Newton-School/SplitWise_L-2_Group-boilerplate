const isAuthenticated = (requiredRole) => (req, res, next) => {
  const userRole = req.user.role;
  //Write your code here for user authentication middleware

  // Check if the user's role matches the required role
  //If user role doesnt mathes the requiredRole then it should have status 403 with a Fornidden message
  // User is authenticated and has the required role, proceed to the next middleware
};

module.exports = isAuthenticated;
