setcpm(155/4)

stack(
  s("bd*4").bank("RolandTR909")
    .distort("8:.4")
    .compressor("-12:12:6:.001:.01")
    .lpf(250)
    .gain(1.2),

  s("<[~ {sd cp}]*2, [~ sd]*2>").bank("RolandTR909")
    .speed(0.9)
    .distort(5)
    .hpf(250)
    .gain(0.9),

  s("<hh*16, hh(11,16)>").bank("RolandTR909")
    .velocity(perlin.range(0.3, 1))
    .n("<0 1 2 3 1 2 0>")
    .gain(0.7),
    
  s("rd*8").bank("RolandTR909")
    .hpf(1000)
    .gain(0.5)
    .room(0.2),

  s("oh").slow(4).bank("RolandTR909")
    .lpf(sine.range(600, 2000).slow(4))
    .room(0.8)
    .gain(0.4)

)
.compressor("-18:20:10:.001:.02")
.postgain(1.3)
