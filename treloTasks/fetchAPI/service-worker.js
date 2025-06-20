const CACHE_NAME = "api-cache-v1";

self.addEventListener("install", (event) => {
  console.log("SW встановлено");
  self.skipWaiting();
});

self.addEventListener("active", (event) => {
  console.log("SW активовано");
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const cache = await caches.open(CACHE_NAME);

  if (request.method !== "GET" || !request.url.includes("/api/")) {
    return fetch(request);
  }

  const cached = await cache.match(request);

  if (cached) {
    console.log("[CACHE]", request.url);
    return cached;
  }

  try {
    const response = await fetchWithTimeout(request);
    cache.put(request, response.clone());
    console.log("[FETCH]", request.url);
    return response;
  } catch (error) {
    return new Response("Помилка мережі або кешу немає", {
      status: 504,
      statusText: "Gateway Timeout",
    });
  }
}
function fetchWithTimeout(request, timeout = 5000) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Таймаут")), timeout)
    ),
  ]);
}

self.addEventListener("message", async (event) => {
  if (event.data === "clearCache") {
    const keys = await caches.keys();
    for (let key of keys) {
      await caches.delete(key);
    }
    console.log("Кеш очищено вручну");
  }
});
