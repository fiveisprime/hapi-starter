# hapi-starter
Starter Hapi application.

## What is this?

This is my personal starting point for building a Hapi app. :)

## Debugging

This assumes you are using VS Code. Start the process using Docker Compose then
hit F5 to attach to the running process.

_Note: if you're on Windows, you may need to build the image prior to running
docker compose._

```sh
$ docker-compose -f docker-compose.debug.yml up -d --build
```

Once the image is running, hit F5.

Shut it all down by running

```sh
$ docker-compose -f docker-compose.debug.yml down
```
