#step1: first start the mysql
echo "Starting MySQL..."
docker compose -f ./mysql/docker-compose.yaml --env-file ./mysql/.env up --build -d
#step2: start the backend app
echo "Starting BackendNodeJS..."
docker compose -f ./backendnestjs/docker-compose.yml --env-file ./backendnestjs/.env up --build -d
#step3: start the nginx to wrap up into https
echo "Starting Nginx..."
docker compose -f ./nginx/docker-compose.yml up --build -d