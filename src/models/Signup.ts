import { model, Schema } from "mongoose";

/*
 * This code can be used to create and manipulate a collection of Search Log with Mongoose.
 * The model can be used to query the database and perform operations such as adding, updating, and deleting tickets.
 *
 * A new Mongoose schema called "SignupSchema" is defined using the Schema constructor.
 */

const SignupSchema = new Schema({
  // "firstName": A required string field.
  // The "trim" option removes whitespace from the beginning and end of the input.
  firstName: {
    type: String,
    required: [true, "FirstName is required"],
    trim: true,
  },
  // "lastName": A required string field.
  // The "trim" option removes whitespace from the beginning and end of the input.
  lastName: {
    type: String,
    required: [true, "LastName is required"],
    trim: true,
  },
  /* email: It represents the email address of the subscriber. It is of type String and is required. Additionally,
   * it is validated using the validator library, which checks if the provided value is a valid email address.
   * If the validation fails, a custom error message is returned.The email field is also trimmed.
   */
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
  },
  // "plate": A required string field representing the license plate Number.
  // The "trim" option removes whitespace from the beginning and end of the input.
  plate: {
    type: String,
    uppercase: true,
    required: [true, "Plate is required"],
    trim: true,
  },
  // "state": A required string field representing the license plate Number.
  // The "trim" option removes whitespace from the beginning and end of the input.
  state: {
    type: String,
    uppercase: true,
    required: [true, "State is required"],
    trim: true,
  },
  // "timestamp": An optional object field representing any additional information.
  timestamp: {
    type: Date,
    required: [true, "Timestamp is required"],
    trim: true,
  },
  // "createdAt": A date field representing the date and time the ticket was added to the collection.
  // The default value is the current date and time.
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * Create compound index
 */
SignupSchema.index({ browsingSession: 1, email: 1 }, { unique: true });

// SignupSchema.plugin(mongoosePaginate);

export const Signup = model("Signup", SignupSchema);
