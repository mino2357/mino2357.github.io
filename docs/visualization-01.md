<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax:{inlineMath:[['\$','\$'],['\\(','\\)']],processEscapes:true},CommonHTML: {matchFontHeight:false}});</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>

# 重力多体問題の可視化

雑な計算で見た目がそれっぽいしか言えないと思う．ちゃんと計算できているかは系の第1積分（保存量）等を調べる必要があるがそこまでするほどの精度持ってないので確認していない．

シングルコアで計算するなら2^15体程度が限界か．

あえて8K解像度にしている．見るときは（8Kが再生できる環境はほぼ無いから）画質が落ちるが1点の星が潰れて集団でもやっとした白色になることを期待しているため．

<iframe width="560" height="315" src="https://www.youtube.com/embed/9ut9rDGyVLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Youtubeの動画の扱いを調べたが8Kまではいけるらしい．公式で調べたわけではないがH.265じゃないと8Kまで対応してくれないっぽい（詳しくは調べてください）．

なのでエンコードは連番pngファイルをffmpegで以下の通り実行した．当たり前だがH.264よりずっと重い処理になる．

```
ffmpeg -r 60 -i %05d.png -c:v hevc -r 60 n_2_15.mp4
```

[トップページへ](../index.md)