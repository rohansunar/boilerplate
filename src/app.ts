import { Server } from "decor-express";
import { Application } from "express";
// load all controllers that handles http request
import "./controllers";

export default function app(): Application {
  // Initializing Express App with decor-express
  //   expressor
  //   decor-express
  return Server.create({
    views: "views",
    public: "public",

    // Run code just before Route mount
    beforeRouteInjection: function (app: Application) {
      app.set("trust proxy", true);
    },
  });
}
