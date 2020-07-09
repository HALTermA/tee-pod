# tee-pod

Cloud Functionsチームのリポジトリ  
`git clone https://github.com/HALTermA/tee-pod.git`  
`cd tee-pod`  
`npm install`  
で構築  
`firebase serve --only functions`でテストできる  


`curl -X POST -H "Content-Type:application/json" -d @data.json https://{公開APIの場所}/changeColor`  
`curl -X POST -H "Content-Type:application/json" -d @light.json https://{公開APIの場所}/isLight`  
`curl -X POST https://{公開APIの場所}/status`



@color.json  
{"color":{"colors":{"normal":"normal"}}}  
{"color":{"colors":{"warning":"warning"}}}  
{"color":{"colors":{"partyPeople":"partyPeople"}}}  

@light.json  
{"launch":true}  
{"launch":false}   

![スクリーンショット 2020-05-18 14 15 17](https://user-images.githubusercontent.com/35944813/85245180-c0ffec80-b481-11ea-80df-849c2de6ac2d.png)  
↑これ実装
