import { createServer, Factory, Model, Response } from "miragejs";

declare module "miragejs/server" {
  interface Server {
    serialize: (object: any) => any;
  }
}

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`;
        },
        email(i) {
          return `user${i + 1}@gmail.com`;
        },
        createdAt() {
          return `2023-02-12T00:00:00.000Z`;
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750; // 750ms

      this.get(
        "/users",
        function (this: ReturnType<typeof createServer>, schema, request) {
          // Mirage Pagination Logic

          const { page = 1, per_page = 10 } = request.queryParams;

          const total = schema.all("user").length;

          const pageStart = (Number(page) - 1) * Number(per_page);
          const pageEnd = pageStart + Number(per_page);

          const users = this.serialize(schema.all("user")).users.slice(
            pageStart,
            pageEnd
          );

          return new Response(
            200,
            { "x-total-count": String(total) },
            { users }
          );
        }
      );
      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
