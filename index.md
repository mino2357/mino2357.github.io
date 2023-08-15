<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax:{inlineMath:[['\$','\$'],['\\(','\\)']],processEscapes:true},CommonHTML: {matchFontHeight:false}});</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>


# 短い自己紹介

中学生の頃から数学をほぼ毎日やっている人間．某大学数学科に入り研鑽を積む．数値計算屋さん．

# 数値計算関連

- [N次元ユークリッド空間上の波動方程式はNが奇数か偶数で挙動が変わる](https://github.com/mino2357/wave_equation_difference_between_3d_and_4d)という事実を可視化したもの．
![](images/wave_1_2_3_4d.gif)
  - 黒が1次元，赤が2次元，緑が3次元，青が4次元．値は1つ目の座標上の値をプロットしたもの．
- [重力多体問題](https://github.com/mino2357/N-body-Scrapbox)
  - Youtube動画[リンク](https://youtu.be/9ut9rDGyVLY)
    - 書いてあるとおりまだ取り掛かったばかりなのでただそれっぽいがそれなりにかっこいい動画になっている．
  - N体問題の数値計算の実験場．かなり奥深い世界が広がっている．沼もたくさんある．適当に参考にしているものを挙げておく．あとで整理しておく．やろうと思ったきっかけは3体問題が面白かったから．
  1. [Makino J. (2001), 重力多体系の数値計算](https://repository.kulib.kyoto-u.ac.jp/dspace/bitstream/2433/97012/1/KJ00004711437.pdf)
  2. [Kepler問題におけるKustaanheimo-Stiefel変換](https://osanshouo.github.io/blog/2021/04/12-kustaanheimo-stiefel/)
  3. [谷川清隆 訳、Prasenjit Saha and Scott Tremaine (1992), Symplectic integrators for solar system dynamics](http://th.nao.ac.jp/MEMBER/tanikawa/list08/saha/st1.pdf)
  4. [正則化法と全保存型差分法を用いた重力N体問題のシミュレーション](https://catalog.lib.kyushu-u.ac.jp/opac_download_md/14286/Article_No_14.pdf)
  5. [Makino J. , 6 計算法 --- 時間領域](https://jun-makino.sakura.ne.jp/papers/bussei-nbody/node7.html)
  6. [重力多体系の天体物理](https://jun-makino.sakura.ne.jp/talks/waseda-kougi-2006.pdf)
  7. [E.ハイラー, S.P.ネルセット, G.ヴァンナー著「常微分方程式の数値解法 I」](https://www.maruzen-publishing.co.jp/item/b294285.html) とんでもなく面白い本．広範な分野に使う．
  1. [天文学特別講義IV](https://jun-makino.sakura.ne.jp/kougi/stellar_dynamics_2009/note1/note1-e.html)
  2.  [Sverre J. Aarseth, "Gravitational N-Body Simulations: Tools and Algorithms (Cambridge Monographs on Mathematical Physics)"](https://www.cambridge.org/core/books/gravitational-nbody-simulations/A5D1D86EA634C9D354B7C82C029D6933)
- [補間に関する数値実験](https://github.com/mino2357/interpolation-in-regression)
  - 偏微分方程式の数値計算用に書いているもの．統計の非線形（重）回帰分析とかでも使えると思う．まだ100倍程度は速く計算できると思っている．関数は多項式でやっているが他の関数でも出来るだろう．
- [近傍探索計算](https://github.com/mino2357/nearest_neighbor_search)
  - kd-treeの実装．例としてレナード・ジョーンズ型のポテンシャルで点群の敷き詰めをやっている．複雑領域での数値計算に使えるのではないかと思っている．近距離相互作用なら高速化が出来るだろう．重力多体問題への応用は難しいだろう．Barnes & Hut (1986) が考案したものが良いだろう．
- [熱方程式（拡散方程式とも言う）の数値計算法．](docs/pdf_files/Heat_equation.pdf)数値計算の入門時代に書かれたもの． (PDF)
- [なんで153なのか．](docs/pdf_files/dmath.pdf)大昔（大学に入る前）に書いたもの．実験数学的ななにか． (PDF)
- [高校生に数学教えているときに思った疑問を書いたもの．](docs/pdf_files/bubunnbunnsuubunnkai.pdf)ガンマ関数とか出てきます． (PDF)

# 数学のメモ帳

- [test](docs/test01.md)

## 私について

2019年から民間で主に数値計算法の研究，開発．レースエンジニアリング支援．数値流体力学（空調，乱流，騒音など）．電磁場解析．弾塑性解析．さまざまな最適化問題の定式化，高速化．大規模計算のサーバ管理．ジョブスケジューラの導入，保守．基本的に数学や物理を毎日のように使うお仕事をしています．

researchmap: [Takaaki MINOMO](https://researchmap.jp/t_minomo/?lang=japanese)

ルター派のゆるふわクリスチャン．パニック障害とうつ病とともに生きる．人混みが苦手．

### 趣味

- ピアノを弾きます．バッハが特に好きです．
- 読書．
- 思いついた効率的だったり高精度な数値計算法を実装して確かめること．
- 数理モデルの構築，実装．
- 最近よく読んでいる本の分野．
  - 微分幾何学，相対論，重力多体問題，熱力学．

### List of my poster presentations.
「Mathematical model of the cell population movement」，第18回ソウル大ジョイントシンポジウム, 2015/11/27, 場所：ソウル大学． Abstract

Traveling pulse solutions in a point mass model of diffusing particles, The 17th RIES-Hokudai International Symposium “Jyuu” (Poster Presentation), CHÂTERAISÉ Gateaux Kingdom Sapporo, (Sapporo, Japan), December 13th-14th, 2016, ○ Takaaki Minomo , Masaharu Nagayama，Elliott Ginder.

### List of my presentations.
応用数理研究会（2016年8月24～27日，千里浜．口頭発表）

国際研究会（2016年9月4～9月12日，Czech-Japanese- Polish Seminar in Applied Mathematics 2016，Poland, AGH University of Science and Technology，口頭発表）

Traveling pulse solutions in a point mass model of diffusing particles ，応用数学合同研究集会（日本数学会応用数学分科会主催），龍谷大学（滋賀県・大津市），2016年12月15日〜17日，○簑毛崇章（北海道大学），長山雅晴，Elliott Ginder

### Papers.
Traveling pulse solutions in a point mass model of diffusing particles
Elliott Ginder, Takaaki Minomo, Masaharu Nagayama, Satoshi Nakata, Hiroya Yamamoto Computer Methods in Materials Science 17(2) 111-121 2017年12月 [査読有り]
