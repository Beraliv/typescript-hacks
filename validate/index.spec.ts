import { validate } from './'

// ✅ It can check connected mapped types
type VideoStateCode = {
  play: 0
  pause: 1
  buffering: 2
  end: 3
  // ⚠️ uncomment the line below to trigger first `validate` function
  // replay: 4
}
type VideoStateName = {
  play: 'PLAY'
  pause: 'PAUSE'
  buffering: 'BUFFERING'
  end: 'END'
  // ⚠️ uncomment the line below to trigger second `validate` function
  // replay: 'REPLAY'
}
/**
 * Extra values which are declared in `VideoStateCode`
 * but not included in `VideoStateName`
 * 
 * `never` means that validation is correct
 */
type ExtraValuesInVideoStateCode = Exclude<keyof VideoStateCode, keyof VideoStateName>
validate(undefined as ExtraValuesInVideoStateCode)
/**
 * Extra values which are declared in `VideoStateName`
 * but not included in `VideoStateCode`
 * 
 * `never` means that validation is correct
 */
type ExtraValuesInVideoStateName = Exclude<keyof VideoStateName, keyof VideoStateCode>
validate(undefined as ExtraValuesInVideoStateName)
