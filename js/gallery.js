var photoListElement = document.querySelector("#photos");


var photoList = [
    {src: "img/apple.png", title: "apple"},
    {src: "img/facebook.png", title: "facebook"},
    {src: "img/google.png", title: "google"},
    {src: "img/instagram.png", title: "もう1回8月"},
    {src: "img/tumblr.png", title: "前"},
    {src:	"img/twitter.png", title: "横"}
];
//画像を用意する。

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
        //photoListElementが存在し、photoListに要素が入っていてる場合、isReady()はture.
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
    //画像の画像ファイルとタイトルのエレメントを作成している。
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
        //index値がphotoList.lengthより小さい場合、新しく画像を追加する。
        
        // whileは中身がtureになっている間、処理が繰り返される。
        // while文は終わるように書かなければ、処理が無限に行われてブラウザが固まる。そこは注意しなきゃいけない。
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
    //ボタンをクリックしたらshowPhotos関数を呼び出す
};

initApp();
//initAppを呼び出してる
