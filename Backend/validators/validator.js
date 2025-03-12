const { z } = require("zod");

const signUpSchema = z.object({
  // Validation for name
  name: z
    .string({ required_error: "Please enter your name." })
    .trim()
    .min(5, { message: "Your name must be at least 5 characters long." })
    .max(255, { message: "Your name cannot exceed 255 characters." }),

  // Validation for email
  email: z
    .string({ required_error: "Please provide an email address." })
    .trim()
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Your email address must be at least 5 characters long." })
    .max(255, { message: "Your email address cannot exceed 255 characters." }),

  // Validation for phone
  phone: z
    .string({ required_error: "Please provide your phone number." })
    .min(10, { message: "Your phone number must be at least 10 digits long." })
    .max(15, { message: "Your phone number cannot exceed 15 digits." }),

  // Validation for password
  password: z
    .string({ required_error: "Please enter a password." })
    .trim()
    .min(7, { message: "Your password must be at least 7 characters long." })
    .max(255, { message: "Your password cannot exceed 255 characters." }),

  // Validation for address
  address: z
    .string({ required_error: "Please provide your address." })
    .trim()
    .min(10, { message: "Your address must be at least 10 characters long." })
    .max(255, { message: "Your address cannot exceed 255 characters." }),

  // Validation for userType (buyer or seller)
  userType: z.enum(['buyer', 'seller'], { required_error: "Please select whether you are a buyer or a seller." })
});

module.exports = signUpSchema;
