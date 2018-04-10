#!/bin/bash

set -euo pipefail

cd "$( dirname "${BASH_SOURCE[0]}" )/.."

scripts/run-genswag.sh

rm -rf ./sdk/go/hades/swagger
rm -rf ./sdk/js/swagger
rm -rf ./sdk/php/swagger

# curl -O scripts/swagger-codegen-cli-2.2.3.jar http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.2.3/swagger-codegen-cli-2.2.3.jar

java -jar scripts/swagger-codegen-cli-2.2.3.jar generate -i ./docs/api.swagger.json -l go -o ./sdk/go/hades/swagger
java -jar scripts/swagger-codegen-cli-2.2.3.jar generate -i ./docs/api.swagger.json -l javascript -o ./sdk/js/swagger
java -jar scripts/swagger-codegen-cli-2.2.3.jar generate -i ./docs/api.swagger.json -l php -o sdk/php/ \
    --invoker-package hades\\SDK --git-repo-id swagger --git-user-id ory --additional-properties "packagePath=swagger,description=Client for hades"

scripts/run-format.sh

#git checkout HEAD -- sdk/go/hades/swagger/configuration.go
#git checkout HEAD -- sdk/go/hades/swagger/api_client.go
rm -f ./sdk/js/swagger/package.json
rm -rf ./sdk/js/swagger/test
rm -f ./sdk/php/swagger/composer.json ./sdk/php/swagger/phpunit.xml.dist
rm -rf ./sdk/php/swagger/test

npm run prettier
