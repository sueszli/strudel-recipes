setcpm(150/4)

stack(
  s("bd*4").bank("RolandTR909")
    .distort("6:.6")
    .compressor("-15:15:8:.001:.005")
    .lpf(300),
    
  // s("[~ sd]*2").bank("RolandTR909") 
  //   .speed("0.84")
  //   .distort("4:.7")
  //   .hpf(200),

  s("hh*16").bank("RolandTR909")
    .velocity("0.2 1 0.3 0.8 0.2 1 0.4 0.9")
    .n("<0 1 2 3>") // sample rotation
    .gain(0.6),
    
  s("[~ ~ ~ oh]").bank("RolandTR909")
    .lpf(sine.range(400,1200).slow(2)) // automated filter sweep
    .velocity(0.7)
    .room(0.3) // a little reverb
)
.compressor("-20:20:10:.002:.02")
.postgain(1.2)
