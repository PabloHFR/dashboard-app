import {
  createServer,
  Factory,
  Model,
  Response,
  RestSerializer,
} from "miragejs";

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
    serializers: {
      application: RestSerializer,
    },

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`;
        },
        email(i) {
          return `user${i + 1}@gmail.com`;
        },
        createdAt(i) {
          return `2023-02-1${i}T00:00:00.000Z`;
        },
      }),
    },

    seeds(server) {
      server.createList("user", 3);
    },

    routes() {
      server.urlPrefix = `${process.env.PRODUCTION_URL}/api`;
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
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.create("user", {
          createdAt: attrs.user.created_at,
          email: attrs.user.email,
          name: attrs.user.name,
          id: attrs.id,
        });
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
