#!/usr/bin/env node
const sharp = require('sharp')

const resizeTo = [72, 96, 128, 144, 152, 192, 384, 512]
const filePath = size => `public/icon${size ? `-${size}x${size}` : ''}.png`

;(async () => {
  await Promise.all([
    resizeTo.map(size =>
      sharp(filePath())
        .resize(size, size)
        .toFile(filePath(size))
    ),
  ])
})()
