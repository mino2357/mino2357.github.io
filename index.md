<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax:{inlineMath:[['\$','\$'],['\\(','\\)']],processEscapes:true},CommonHTML: {matchFontHeight:false}});</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>


# 短い自己紹介

数理科学関連好き．中学生の頃から数学をほぼ毎日やっている人間．某大学数学科に入り研鑽を積む．数値計算屋さん．

# 数値計算関連

![黒が1次元，赤が2次元，緑が3次元，青が4次元．値は1つ目の座標上の値をプロットしたもの．](images/wave_1_2_3_4d.gif)
- [N次元ユークリッド空間上の波動方程式はNが奇数か偶数で挙動が変わる](https://github.com/mino2357/wave_equation_difference_between_3d_and_4d)という事実を可視化したもの．

![N=2^24個の多体問題](images/n_2_24.png)
- [重力多体問題](https://github.com/mino2357/N-body-Scrapbox)
  - [基礎方程式，計算の際の無次元化](docs/n-body-eq.md)
  - [天体の位置の調べ方, Horizons On-line Ephemeris Systemの使い方メモ](docs/use_HorizonsOn-lineEphemerisSystem.md)
  - [太陽系の長時間の軌道計算](docs/sol-system.md)
- [補間に関する数値実験](https://github.com/mino2357/interpolation-in-regression)
  - 偏微分方程式の数値計算用に書いているもの．統計の非線形（重）回帰分析とかでも使えると思う．まだ100倍程度は速く計算できると思っている．関数は多項式でやっているが他の関数でも出来るだろう．
- [近傍探索計算](https://github.com/mino2357/nearest_neighbor_search)
  - kd-treeの実装．例としてレナード・ジョーンズ型のポテンシャルで点群の敷き詰めをやっている．複雑領域での数値計算に使えるのではないかと思っている．近距離相互作用なら高速化が出来るだろう．重力多体問題への応用は難しいだろう．Barnes & Hut (1986) が考案したものが良いだろう．
- [熱方程式（拡散方程式とも言う）の数値計算法．](docs/pdf_files/Heat_equation.pdf) (PDF)
  - 数値計算の入門時代に書かれたもの．
- [なんで153なのか．](docs/pdf_files/dmath.pdf) (PDF)
  - 大昔（大学に入る前）に書いたもの．実験数学的ななにかとポエム．
- [研究としての数値計算の在り方](docs/numerical-calculation.md)

# 数値計算の可視化

- [重力多体問題](/docs/visualization-gravity-01.md)

# 数学雑記とメモ帳

- [補間と回帰](docs/interp-01.md)
- [相対論的重力多体問題](docs/pn_eom-01.md)
  - メモ．ペンディング．
- [高校生に数学教えているときに思った疑問を書いたもの．](docs/pdf_files/bubunnbunnsuubunnkai.pdf) (PDF)
  - ただの計算メモ．
- [今までに読んできた数学書](docs/books-01.md)
  - 準備中．

## 私について

2019年から民間で主に数値計算法の研究，開発．レースエンジニアリング支援．数値流体力学（空調，乱流，騒音など）．電磁場解析．弾塑性解析．数理モデルの構築．さまざまな最適化問題の定式化，高速化．大規模計算のサーバ管理．ジョブスケジューラの導入，保守．基本的に数学や物理を毎日のように使うお仕事をしています．

researchmap: [Takaaki MINOMO](https://researchmap.jp/t_minomo/?lang=japanese)

ルター派のゆるふわクリスチャン．パニック障害とうつ病とともに生きる．人混みが苦手．

## 趣味

- ピアノを弾きます．バッハが特に好きです．
- 読書．
- 星景，天体写真．
- モータースポーツ．
- 思いついた効率的だったり高精度な数値計算法を実装して確かめること．
- 数理モデルの構築，実装．
- 流体計算．
- 最近よく読んでいる本の分野．
  - 微分幾何学．相対論．重力多体問題．熱力学．天体物理学．

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
