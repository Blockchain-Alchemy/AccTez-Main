mkdir -p ./example/node_modules/acctez-main
cp -f ./package.json ./example/node_modules/acctez-main/
cp -f ./README.md ./example/node_modules/acctez-main/
cp -rf ./dist ./example/node_modules/acctez-main/
cp -rf ./lib ./example/node_modules/acctez-main/

#mkdir -p ./example/node_modules/@types/acctez-main
#cp -rf ./lib/esm/* ./example/node_modules/@types/acctez-main/