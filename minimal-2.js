// Minimal Brutalism - Less is more German Schranz
setcpm(140/4)

stack(
  // Massive single kick focus
  s("bd*4").bank("RolandTR909")
    .distort("12:.2")
    .compressor("-20:20:15:.001:.005")
    .compressor("-10:8:6:.003:.01")
    .lpf(200)
    .gain(1.6),

  // Single snare, maximum impact
  s("[~ sd]*2").bank("RolandTR909")
    .speed("0.82")
    .distort("10:.3")
    .hpf(200)
    .compressor("-8:12:8:.001:.008")
    .gain(1.1),

  // Minimal hi-hat pattern
  s("hh(9,16)").bank("RolandTR909")
    // .velocity(triangle.range(0.4,1).slow(8))
    .n("<0 2>")
    .gain(0.8)
    .hpf(6000),

  // Single atmospheric element
  s("oh").slow(8).bank("RolandTR909")
    .lpf(sine.range(800,1200).slow(16))
    .room(0.7)
    .gain(0.4)
)
.compressor("-30:30:20:.001:.01")
.postgain(1.7)
.hpf(45)