import { userPreference, referenceData } from "./data.js";

import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/reference-data", async (request, reply) => {
  return { data: referenceData };
});

// Declare a route
fastify.get("/preferences", async (request, reply) => {
  return { data: userPreference };
});

fastify.get("/", async (request, reply) => {
  return { data: "hello, world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
