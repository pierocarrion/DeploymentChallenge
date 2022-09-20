# Deployment with Docker Compose

Creation of two containers with Docker Compose. The first container has a backend in NodeJS and the second a database (MongoDB). Each one have their own Dockerfile for building the image

#### Requirements
    `Docker Engine`
    `Docker Compose`
    

#### Deployment
    | docker compose build |
    | docker compose up |

   
#### Verification
```bash
docker ps
```

#### Access to MongoDB Container
```bash
docker exec -it database mongosh
```

#### Docker Hub of Images
> `<soldierstark/database:1.0>` : [https://hub.docker.com/r/soldierstark/database]
> `<soldierstark/backend:1.0>` : [https://hub.docker.com/r/soldierstark/backend]