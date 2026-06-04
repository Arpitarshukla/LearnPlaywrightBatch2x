# JavaScript String Methods Cheat Sheet

| Method | Returns | Example |
|---|---|---|
| `length` | Number (property) | `"Hello".length` → `5` |
| `at(i)` | Char at index (supports -ve) | `"Hi".at(-1)` → `"i"` |
| `charAt(i)` | Char at index | `"Hi".charAt(1)` → `"i"` |
| `charCodeAt(i)` | ASCII code | `"A".charCodeAt(0)` → `65` |
| `includes(s)` | Boolean | `"hello".includes("el")` → `true` |
| `startsWith(s)` | Boolean | `"hello".startsWith("he")` → `true` |
| `endsWith(s)` | Boolean | `"hello".endsWith("lo")` → `true` |
| `indexOf(s)` | First index (or -1) | `"abc".indexOf("b")` → `1` |
| `lastIndexOf(s)` | Last index (or -1) | `"aba".lastIndexOf("a")` → `2` |
| `search(regex)` | First match index | `"hello".search(/el/)` → `1` |
| `slice(s,e)` | Substring (supports -ve) | `"hello".slice(1,4)` → `"ell"` |
| `substring(s,e)` | Substring (-ve→0) | `"hello".substring(1,4)` → `"ell"` |
| `toUpperCase()` | Upper-cased | `"hi".toUpperCase()` → `"HI"` |
| `toLowerCase()` | Lower-cased | `"HI".toLowerCase()` → `"hi"` |
| `trim()` | Removes edge spaces | `" x ".trim()` → `"x"` |
| `trimStart()` | Removes leading spaces | `" x".trimStart()` → `"x"` |
| `trimEnd()` | Removes trailing spaces | `"x ".trimEnd()` → `"x"` |
| `replace(a,b)` | First match replaced | `"a,a".replace("a","b")` → `"b,a"` |
| `replaceAll(a,b)` | All matches replaced | `"a,a".replaceAll("a","b")` → `"b,b"` |
| `split(d)` | Array from delimiter | `"a,b".split(",")` → `["a","b"]` |
| `concat(...)` | Concatenated string | `"a".concat("b","c")` → `"abc"` |
| `repeat(n)` | Repeated n times | `"a".repeat(3)` → `"aaa"` |
| `padStart(n,c)` | Pads start to length | `"5".padStart(3,"0")` → `"005"` |
| `padEnd(n,c)` | Pads end to length | `"5".padEnd(3,".")` → `"5.."` |
| `match(regex)` | Array of matches | `"a1b2".match(/\d/g)` → `["1","2"]` |
| `matchAll(regex)` | Iterator of all matches | `"a1".matchAll(/\d/g)` |
| `toString()` | String representation | `(42).toString()` → `"42"` |
| `String(val)` | Converts to string | `String(true)` → `"true"` |
| `parseInt(s)` | Parsed integer | `parseInt("42px")` → `42` |
| `parseFloat(s)` | Parsed float | `parseFloat("3.14rem")` → `3.14` |
