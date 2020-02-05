#!/usr/bin/env node
const path = require('path')
const sharp = require('sharp')

const resizeTo = [72, 96, 128, 144, 152, 192, 384, 512]

;(async () => {
  await Promise.all([
    resizeTo.map(size =>
      sharp(path.resolve('public', 'icon.png'))
        .resize(size, size)
        .toFile(path.resolve('public', `icon-${size}x${size}.png`))
    ),
  ])
})()
