export const formInputValidations = {
    fullName: {
        required: "Full name is required."
    },
    contactNumber: {
        required: "Contact number is required.",
        pattern: {
            value: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
            message: "Contact number required canadian phone number"
        },
    },
    birthDate: {
        day: {
            required: "Date is required."
        },
        month: {
            required: "Month is required."
        },
        year: {
            required: "Year is required."
        },
    },
    emailAddress: {
        required: "Email is required.",
        pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Sorry, this email address is not valid.Please try again."
        }
    },
    password: {
        required: "Password is required.",
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message: "Sorry, this password is not valid.Please try again."
        }
    },
    confirmPassword: {
        required: "Confirm password is required",
    }
}