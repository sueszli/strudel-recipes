// Tempo set to a driving 155 BPM
setcpm(155/4)

stack(
  // The core: a punishing, heavily distorted 909 kick.
  s("bd*4").bank("RolandTR909")
    .distort("8:.4") // Very high distortion with some dry signal mix
    .compressor("-12:12:6:.001:.01") // Pumping compression
    .lpf(250) // Focus on the sub and low-mid punch
    .gain(1.2),

  // Layered snare and clap for a sharp, industrial transient.
  // The pattern alternates to add variation across the phrase.
  s("<[~ {sd cp}]*2, [~ sd]*2>").bank("RolandTR909")
    .speed(0.9) // Pitched down for weight
    .distort(5)
    .hpf(250) // Cut lows to make space for the kick
    .gain(0.9),

  // Hi-hats alternating between a straight 16th-note pattern
  // and a more complex Euclidean rhythm for a mechanical feel.
  s("<hh*16, hh(11,16)>").bank("RolandTR909")
    .velocity(perlin.range(0.3, 1)) // Smooth, automated velocity changes
    .n("<0 1 2 3 1 2 0>") // Cycle through different hat samples
    .gain(0.7),
    
  // A driving 8th-note ride cymbal to propel the track forward.
  s("rd*8").bank("RolandTR909")
    .hpf(1000) // Keep it in the high frequencies
    .gain(0.5)
    .room(0.2), // Add a touch of space

  // Atmospheric drone created by slowing an open hat and filtering it heavily.
  // This adds a dark, industrial texture to the background.
  s("oh").slow(4).bank("RolandTR909")
    .lpf(sine.range(600, 2000).slow(4)) // Very slow filter sweep
    .room(0.8) // Wash it out with reverb
    .gain(0.4)

)
.compressor("-18:20:10:.001:.02") // Heavy glue compression on the master
.postgain(1.3) // Final boost
