const tsPreset = require('ts-jest/jest-preset')
const androidPreset = require("jest-expo/android/jest-preset")
const iosPreset = require("jest-expo/ios/jest-preset")

module.exports = {
  ...tsPreset,
  projects: [
    androidPreset,
    iosPreset,
  ],
  coverageReporters: [ "text" ]
}
