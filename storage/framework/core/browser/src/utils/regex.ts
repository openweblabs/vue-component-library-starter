export type {
  Flag,
  MagicRegExp,
  MagicRegExpMatchArray,
  Input,
  MapToStringCapturedBy,
  StringCapturedBy,
} from 'magic-regexp'
export {
  // createRegExp,
  caseInsensitive,
  anyOf,
  carriageReturn,
  char,
  charIn,
  charNotIn,
  digit,
  dotAll,
  exactly,
  global,
  letter,
  linefeed,
  maybe,
  multiline,
  not,
  oneOrMore,
  sticky,
  tab,
  unicode,
  whitespace,
  withIndices,
  word,
  wordBoundary,
  wordChar,
} from 'magic-regexp'

// export function caseInsensitive(pattern: string): RegExp {
//   return new RegExp(pattern, 'i')
// }

export function createRegExp(pattern: string, options: { flags?: string } = {}): RegExp {
  return new RegExp(pattern, options.flags)
}
