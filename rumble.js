setcpm(150/4)

stack(
  // kick
  s("bd*4")
    .bank("RolandTR909")
    .gain(1.2)
    .distort(2)
    .compressor("-15:8:5:.001:.05")
    .lpf(300)
    .postgain(1.5),

  // rumble
  s("bd*4")
    .bank("RolandTR909")
    .n(1)
    .gain(0.8)
    .lpf(80)
    .room(0.9)
    .roomsize(8)
    .roomfade(0.8)
    .compressor("-20:12:10:.01:.2")
    .distort(1.5),
        
  // hihats
  s("hh*4")
    .bank("RolandTR909")
    .gain(0.02)
    .n(0)
    .hpf(1000)
    .lpf(4000)
    .room(0.4)
    .pan(0)
    .compressor("-25:8:1:.02:.1"),    
)
.every(16, x=>x.lpf("<4000 2000 1000 500>"))
.every(32, x=>x.crush("<16 8 4 2>"))
.sometimes(x=>x.speed("<1 1.1 0.9>"))
