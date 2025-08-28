setcpm(150/4)
stack(
  // compressed kicks
  s("bd*4").bank("RolandTR909")
    .distort("8:.7")
    .compressor("-15:15:8:.001:.005")
    .lpf(200),
    
  // industrial rumble
  note("c1 ~ c1 ~").s("sine")
    .lpf(sine.range(40,80).slow(4))
    .distort("8:.8")
    .lpf(120)
    .gain(0.7),
)
.compressor("-25:25:12:.001:.01")
.distort("5:.5")
.hpf(30)
.compressor("-30:30:20:.0001:.001")
.distort("3:.6")
.compressor("-20:20:15:.001:.005")
.lpf(2000)
.postgain(1.8)
