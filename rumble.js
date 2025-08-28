setcpm(150/4)

stack(
  
  // s("bd*4")
  //   .bank("RolandTR909")
  //   .gain(1.2)
  //   .distort(2)
  //   .compressor("-15:8:5:.001:.05")
  //   .lpf(300)
  //   .postgain(1.5),
    
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
    
  // // 3. TOP KICK LAYER (click/punch)
  // s("bd*4")
  //   .bank("RolandTR909") 
  //   .n(2)
  //   .gain(0.6)
  //   .hpf(2000)
  //   .crush("<16 8 4>")
  //   .distort(3)
  //   .compressor("-10:15:2:.0005:.01"),
    
  // // 4. HARSH HI-HATS (snappy top loops)
  // s("hh*16")
  //   .bank("RolandTR909")
  //   .gain("<0.6 0.8 0.4 1>")
  //   .n("<0 1 2 3>")
  //   .hpf(8000)
  //   .distort("<0 3 6 8>")
  //   .crush(sine.range(2,16).slow(4))
  //   .pan(sine.slow(3))
  //   .compressor("-12:20:3:.0001:.005"),
    
  // // 5. SCHRANZ BASSLINE (mono sub-bass processing)
  // note("<c1 ~ eb1 f1>")
  //   .s("sawtooth")
  //   .gain(0.9)
  //   .lpf(sine.slow(2).range(60,200))
  //   .distort(cosine.slow(4).range(1,4))
  //   .compressor("-25:20:15:.01:.1")
  //   .pan(0.5)
  //   .add(perlin.range(0,0.1))
  //   .superimpose(x=>x.add(0.02)),
    
  // // 6. FORMANT SHIFTED ELEMENTS (tribal elements)
  // s("perc*<2 4 8>")
  //   .bank("RolandTR909")
  //   .vowel("<a e i o u>")
  //   .gain("<0.4 0.6 0.3 0.8>")
  //   .speed("<1 1.5 0.75 2>")
  //   .delay(0.125)
  //   .delayfeedback(0.4)
  //   .room(sine.slow(8).range(0.2,0.8)),
    
  // // 7. INDUSTRIAL PERCUSSION LAYER  
  // s("~ cp ~ <cp rim>")
  //   .bank("RolandTR909")
  //   .distort("<2 4 6 8>")
  //   .crush("<8 4 2>")
  //   .bpf(cosine.slow(1).range(500,2000))
  //   .bpq(15)
  //   .gain(0.7),
    
  // // 8. ATMOSPHERIC PAD (background texture)
  // note("<a2 e2 f2 g2>")
  //   .s("sawtooth")
  //   .gain(0.3)
  //   .attack(2)
  //   .release(4)
  //   .lpf(sine.slow(16).range(300,1200))
  //   .room(0.6)
  //   .delay(0.375)
  //   .delayfeedback(0.3)
  //   .pan(sine.slow(5).range(0.2,0.8)),
    
  // // 9. LEAD STABS (occasional melodic elements)
  // note("~ ~ <c4 eb4 f4> ~")
  //   .s("square")
  //   .gain(0.8)
  //   .attack(0.01)
  //   .decay(0.1)
  //   .sustain(0)
  //   .distort(4)
  //   .vowel("<a i>")
  //   .delay(0.25)
  //   .room(0.4)
  //   .sometimes(x=>x.speed(2))
    
)
.every(16, x=>x.lpf("<4000 2000 1000 500>"))
.every(32, x=>x.crush("<16 8 4 2>"))
.sometimes(x=>x.speed("<1 1.1 0.9>"))
