//// Computational Mama
//// New Delhi, India
//// https://www.instagram.com/computational_mama/

a.show()
a.setSmooth(0.7)
a.setBins(6)

// for track 10. Franz Rosati - FERALPINES - 0000 - 0042
//fft is especially adjusted to one lower bin
shape(4,() => a.fft[1]/1.5,-0.3)
  .modulatePixelate(osc(4,0.09,10),30,30)
  .out()

//for track 13. T.mo - Al.hg - works best of the middle of the song

shape(14, 0.4, () => a.fft[4])
.color(1,0.3,10)
.mask(gradient(1))
  .modulate(osc(-10).modulatePixelate(noise(() => a.fft[4]),70,2))
.repeat(2,1,0.5)
  .out()
