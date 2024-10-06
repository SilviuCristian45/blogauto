#step1: first start the mysql
echo "Starting MySQL..."
docker compose -f ./mysql/docker-compose.yaml --env-file ./mysql/.env up -d
#step2: start nats
docker compose -f ./nats/docker-compose.yml --env-file ./nats/.env up -d --build
#step3: start the backend app
echo "Starting BackendNodeJS..."
docker compose -f ./backendnestjs/docker-compose.yml --env-file ./backendnestjs/.env up -d --build
#step4: start the nginx to wrap up into https
echo "Starting Nginx..."
docker compose -f ./nginx/docker-compose.yml up -d