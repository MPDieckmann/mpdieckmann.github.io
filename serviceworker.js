var SERVICE_WORKER_VERSION = 201704051749;

self.addEventListener("install", function () {
  console.log("service-worker-version:", SERVICE_WORKER_VERSION);
});

self.addEventListener("activate", function () {
  console.log("service-worker-version:", SERVICE_WORKER_VERSION);
});
