# tee-pod

Cloud Functionsチームのリポジトリ  
## <span style="red">勝手にデプロイしないこと！！！</span>
`git clone https://github.com/HALTermA/tee-pod.git`  
`cd tee-pod`  
`npm install`  
で構築  
`firebase serve --only functions`  
`curl.exe -X POST -H "Content-Type:application/json" -d @data.json http://localhost:5000/tee-pod/us-central1/returnColor`  
で作った関数をローカルでテストできる

![スクリーンショット 2020-05-18 14 15 17](https://user-images.githubusercontent.com/35944813/85245180-c0ffec80-b481-11ea-80df-849c2de6ac2d.png)  
↑これ実装

## Hello World
`curl https://us-central1-tee-pod.cloudfunctions.net/helloWorld`

