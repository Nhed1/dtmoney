import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    // http://localhost:3000/api/transactions
    this.namespace = "api";
    this.get("/transactions", () => {
      // vai retornar esses dados quando fizer o request de '/api/transactions'
      return [
        {
          id: 1,
          title: "transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: new Date(),
        },
      ];
    });

    this.post("/tansactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return data;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
