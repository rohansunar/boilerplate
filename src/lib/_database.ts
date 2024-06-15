import mongoose from "mongoose";
import bluebird from "bluebird";
const debug = require("debug")("app");

export default function (
  mongodbDatabaseUrl: string,
  NODE_ENV: string
): Promise<typeof mongoose> {
  /// Set promise
  mongoose.Promise = bluebird;

  /// Append _test when testing
  if (NODE_ENV === "test" || NODE_ENV === "develop") {
    mongodbDatabaseUrl += "_test";
  }

  mongoose.connection
    .once("open", () => {
      debug("---Database connected---");
    })
    .once("close", () => {
      debug("---Database closed---");
    });

  /// Connect and Return promise
  return mongoose.connect(mongodbDatabaseUrl);
}
