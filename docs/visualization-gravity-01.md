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
$ ffmpeg -r 60 -i %05d.png -c:v hevc -r 60 n_2_15.mp4
```

## 参考文献

  1. [Makino J. (2001), 重力多体系の数値計算](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/97012/1/KJ00004711437.pdf)
  2. [Kepler問題におけるKustaanheimo-Stiefel変換](https://osanshouo.github.io/blog/2021/04/12-kustaanheimo-stiefel/)
  3. [谷川清隆 訳、Prasenjit Saha and Scott Tremaine (1992), Symplectic integrators for solar system dynamics](http://th.nao.ac.jp/MEMBER/tanikawa/list08/saha/st1.pdf)
  4. [正則化法と全保存型差分法を用いた重力N体問題のシミュレーション](https://catalog.lib.kyushu-u.ac.jp/opac_download_md/14286/Article_No_14.pdf)
  5. [Makino J. , 6 計算法 --- 時間領域](https://jun-makino.sakura.ne.jp/papers/bussei-nbody/node7.html)
  6. [重力多体系の天体物理](https://jun-makino.sakura.ne.jp/talks/waseda-kougi-2006.pdf)
  7. [E.ハイラー, S.P.ネルセット, G.ヴァンナー著「常微分方程式の数値解法 I」](https://www.maruzen-publishing.co.jp/item/b294285.html) 
     1. とんでもなく面白い本．広範な分野に使う．
  8. [天文学特別講義IV](https://jun-makino.sakura.ne.jp/kougi/stellar_dynamics_2009/note1/note1-e.html)
  9.  [Sverre J. Aarseth, "Gravitational N-Body Simulations: Tools and Algorithms (Cambridge Monographs on Mathematical Physics)"](https://www.cambridge.org/core/books/gravitational-nbody-simulations/A5D1D86EA634C9D354B7C82C029D6933)

[トップページへ](../index.md)