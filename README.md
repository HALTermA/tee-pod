# tee-pod

Cloud Functionsチームのリポジトリ  
## <span style="red">勝手にデプロイしないこと！！！</span>
`git clone https://github.com/HALTermA/tee-pod.git`  
`cd tee-pod`  
`npm install`  
で構築  
`firebase serve --only functions`  
↑エラー出たら
nodeのバージョンを8にして、
npm install firebase-admin --save、
npm install firebase-functions --saveで動く。

それで、作った関数をローカルでテストできる
![スクリーンショット 2020-05-18 14 15 17](https://user-images.githubusercontent.com/35944813/85245180-c0ffec80-b481-11ea-80df-849c2de6ac2d.png)  
↑これ実装

## Hello World
`curl https://us-central1-tee-pod.cloudfunctions.net/helloWorld`

