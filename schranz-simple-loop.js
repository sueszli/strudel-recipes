// 
// foundational schranz loop
// 

setcpm(150/4)

// stack() for parallel layers
stack(
  // classic 909 kick
  s("bd*4").bank("RolandTR909")
    .distort("6:.6")
    .compressor("-15:15:8:.001:.005")
    .lpf(300),
    
  // pitched-down snare
  // s("[~ sd]*2").bank("RolandTR909") 
  //   .speed("0.84") // ~-3 semitones
  //   .distort("4:.7")
  //   .hpf(200), // high-pass to avoid low-end clash

  // industrial hi-hats with velocity programming
  s("hh*16").bank("RolandTR909")
    .velocity("0.2 1 0.3 0.8 0.2 1 0.4 0.9")
    .n("<0 1 2 3>") // sample rotation
    .gain(0.6),
    
  // whooshing open hat with filter automation  
  s("[~ ~ ~ oh]").bank("RolandTR909")
    .lpf(sine.range(400,1200).slow(2)) // automated filter sweep
    .velocity(0.7)
    .room(0.3) // a little reverb
)
.compressor("-20:20:10:.002:.02") // global compression for glue
.postgain(1.2) // level boost
