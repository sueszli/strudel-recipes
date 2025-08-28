setcpm(150/4)
stack(
  // compressed
  s("bd*4").bank("RolandTR909")
    .distort("8:.7")
    .compressor("-15:15:8:.001:.005")
    .lpf(200),
    
  // rumbling bass
  note("c1 ~ c1 ~").s("sawtooth")
    .lpf(sine.range(60,150).slow(4))
    .distort("12:.9")
    .gain(0.9),
  )
.compressor("-25:25:12:.001:.01")
.distort("5:.5")
.hpf(30) // drop unnecessary sub frequencies
.postgain(1.5)
