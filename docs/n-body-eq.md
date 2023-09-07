<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax:{inlineMath:[['\$','\$'],['\\(','\\)']],processEscapes:true},CommonHTML: {matchFontHeight:false}});</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>

# 重力多体問題の基礎方程式

ニュートン力学における $N$ 体の質点 $\boldsymbol{x}_{i}$ が重力相互作用で運動する方程式は以下で記述される．ただし $G$ は万有引力定数． $m_{j}$ は質量． $\boldsymbol{r}_{ij} = \boldsymbol{x}_{j} - \boldsymbol{x}_{i}$ とする．

$$
\frac{d^2 \boldsymbol{x}_{i}}{dt^2} = G \sum_{j(\neq i)}^{N} \frac{m_{j}}{||\boldsymbol{r}_{ij}||^3}\boldsymbol{r}_{ij}
$$

SI単位系では数値が大きすぎたり小さすぎたりする．

## 無次元化した方程式

無次元化したパラメータを以下のように導入する．

$y=\dfrac{x}{x'}$, $s=\dfrac{t}{t'}$, $n=\dfrac{m}{m'}$.

かんたんな計算により

$$
\frac{d^2 \boldsymbol{y}_{i}}{ds^2} = \frac{t'^{2} m'}{x'^{3}} G \sum_{j(\neq i)}^{N} \frac{n_{j}}{||\boldsymbol{y}_{j} - \boldsymbol{y}_{i}||^3} (\boldsymbol{y}_{j} - \boldsymbol{y}_{i})
$$

ここで無次元量 $\dfrac{t'^{2} m'}{x'^{3}} G = 1$ となるように無次元化パラメータを取り，方程式を改めて書き直すと

$$
\frac{d^2 \boldsymbol{x}_{i}}{dt^2} = \sum_{j(\neq i)}^{N} \frac{m_{j}}{||\boldsymbol{r}_{ij}||^3}\boldsymbol{r}_{ij}
$$

となる．

太陽系の数値計算の場合は

$$
t' = 2 \pi \ [\rm{year}]
$$

$$
m'G = M_{☉} \ \ (1太陽質量)
$$

$$
x' = 1\ [au] \ \ (天文単位)
$$

この無次元化により惑星質量は太陽質量を1としたときの比であり，距離は天文単位．時間は $2 \pi$ で1年とした単位系としている．

[トップページへ](../index.md)