mkdir -p ./example/node_modules/acctez-main
cp -f ./package.json ./example/node_modules/acctez-main/
cp -f ./README.md ./example/node_modules/acctez-main/
#cp -rf ./dist ./example/node_modules/acctez-main/
cp -rf ./lib ./example/node_modules/acctez-main/

#mkdir -p ./example/node_modules/@types/acctez-main
#cp -rf ./lib/esm/* ./example/node_modules/@types/acctez-main/


mkdir -p ../AccTez-Demo/node_modules/acctez-main
cp -f ./package.json ../AccTez-Demo/node_modules/acctez-main/
cp -f ./README.md ../AccTez-Demo/node_modules/acctez-main/
#cp -rf ./dist ../AccTez-Demo/node_modules/acctez-main/
cp -rf ./lib ../AccTez-Demo/node_modules/acctez-main/
