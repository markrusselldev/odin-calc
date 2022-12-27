## [ODIN CALC](https://markrusselldev.github.io/odin-calc)

A non-PEMDAS calculator for [The Odin Project](https://www.theodinproject.com).

> Any mortal to decipher it's enabling actuator, shall be blessed by the mighty
> ODIN and granted the power to calculate sets of numbers in the order in which
> they are entered. Do remember to turn it off when you are done, mortal. We
> shant waste the power of the gods. -ODIN

- **Allowed**: Integers, Decimals (output is rounded to one decimal place, e.g. 000.0)
- **Disallowed**: Negative Numbers, More than one decimal per number (or choose to restrict to only one decimal per calculation)

### Features

- Uses actual runes to spell out a hidden message (unless you read runes!).
- The hidden message is revealed when the calculator is "turned on" and the letters magically change to English.
- It lights up with the firey magic of ODIN and Asgard.
- Awesome Audio: **Please Note**, enabling your audio is recommended. But, you may regret it if it's too loud.

### Project Information

[Foundations Calculator](https://www.theodinproject.com/lessons/foundations-calculator)

Steps:

1. [x] Create and test functions for add, subtract, multiply and divide.
2. [x] Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
3. [x] Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
4. [x] Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
5. [x] Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
6. [x] Gotchas
   - [x] Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 \* 3 = should yield 42.
   - [x] Your calculator should not evaluate more than a single pair of numbers at a time.
   - [x] You should round answers with long decimals so that they don’t overflow the screen.
   - [x] Pressing = before entering all of the numbers or an operator could cause problems!
   - [x] Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
   - [x] Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

### Extra Credit

- [x] **Added by me:** Allow entering one decimal place for each number but disallow multiple decimal places.
- [x] **Also added, Enabled by checkbox:** Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
- [x] Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
- [x] Add a “backspace” button, so the user can undo if they click the wrong number.
- [x] Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.

### Unicode Rune Chart

Reference: [Got Unicode? by Elizabth Pyatt](http://www.personal.psu.edu/ejp10/blogs/gotunicode/charts/runes.html)

| **Character Name**                       | **Glyph Name** | **Entity**  | **Hex Entity** |
| ---------------------------------------- | -------------- | ----------- | -------------- |
| RUNIC LETTER AC A                        | ᚪ              | &amp;#5802; | &amp;#x16AA    |
| RUNIC LETTER AESC                        | ᚫ              | &amp;#5803; | &amp;#x16AB    |
| RUNIC LETTER ALGIZ EOLHX                 | ᛉ              | &amp;#5833; | &amp;#x16C9    |
| RUNIC LETTER ANSUZ A                     | ᚨ              | &amp;#5800; | &amp;#x16A8    |
| RUNIC LETTER BERKANAN BEORC BJARKAN B    | ᛒ              | &amp;#5842; | &amp;#x16D2    |
| RUNIC LETTER C                           | ᛍ              | &amp;#5837; | &amp;#x16CD    |
| RUNIC LETTER CALC                        | ᛣ              | &amp;#5859; | &amp;#x16E3    |
| RUNIC LETTER CEALC                       | ᛤ              | &amp;#5860; | &amp;#x16E4    |
| RUNIC LETTER CEN                         | ᚳ              | &amp;#5811; | &amp;#x16B3    |
| RUNIC LETTER CWEORTH                     | ᛢ              | &amp;#5858; | &amp;#x16E2    |
| RUNIC LETTER D                           | ᛑ              | &amp;#5841; | &amp;#x16D1    |
| RUNIC LETTER DAGAZ DAEG D                | ᛞ              | &amp;#5854; | &amp;#x16DE    |
| RUNIC LETTER DOTTED-L                    | ᛛ              | &amp;#5851; | &amp;#x16DB    |
| RUNIC LETTER DOTTED-N                    | ᛀ              | &amp;#5824; | &amp;#x16C0    |
| RUNIC LETTER DOTTED-P                    | ᛔ              | &amp;#5844; | &amp;#x16D4    |
| RUNIC LETTER E                           | ᛂ              | &amp;#5826; | &amp;#x16C2    |
| RUNIC LETTER EAR                         | ᛠ              | &amp;#5856; | &amp;#x16E0    |
| RUNIC LETTER EHWAZ EH E                  | ᛖ              | &amp;#5846; | &amp;#x16D6    |
| RUNIC LETTER ENG                         | ᚶ              | &amp;#5814; | &amp;#x16B6    |
| RUNIC LETTER ETH                         | ᚧ              | &amp;#5799; | &amp;#x16A7    |
| RUNIC LETTER FEHU FEOH FE F              | ᚠ              | &amp;#5792; | &amp;#x16A0    |
| RUNIC LETTER G                           | ᚵ              | &amp;#5813; | &amp;#x16B5    |
| RUNIC LETTER GAR                         | ᚸ              | &amp;#5816; | &amp;#x16B8    |
| RUNIC LETTER GEBO GYFU G                 | ᚷ              | &amp;#5815; | &amp;#x16B7    |
| RUNIC LETTER GER                         | ᛄ              | &amp;#5828; | &amp;#x16C4    |
| RUNIC LETTER HAEGL H                     | ᚻ              | &amp;#5819; | &amp;#x16BB    |
| RUNIC LETTER HAGLAZ H                    | ᚺ              | &amp;#5818; | &amp;#x16BA    |
| RUNIC LETTER ICELANDIC-YR                | ᛨ              | &amp;#5864; | &amp;#x16E8    |
| RUNIC LETTER ING                         | ᛝ              | &amp;#5853; | &amp;#x16DD    |
| RUNIC LETTER INGWAZ                      | ᛜ              | &amp;#5852; | &amp;#x16DC    |
| RUNIC LETTER IOR                         | ᛡ              | &amp;#5857; | &amp;#x16E1    |
| RUNIC LETTER ISAZ IS ISS I               | ᛁ              | &amp;#5825; | &amp;#x16C1    |
| RUNIC LETTER IWAZ EOH                    | ᛇ              | &amp;#5831; | &amp;#x16C7    |
| RUNIC LETTER JERAN J                     | ᛃ              | &amp;#5827; | &amp;#x16C3    |
| RUNIC LETTER KAUN K                      | ᚴ              | &amp;#5812; | &amp;#x16B4    |
| RUNIC LETTER KAUNA                       | ᚲ              | &amp;#5810; | &amp;#x16B2    |
| RUNIC LETTER LAUKAZ LAGU LOGR L          | ᛚ              | &amp;#5850; | &amp;#x16DA    |
| RUNIC LETTER LONG-BRANCH-AR AE           | ᛅ              | &amp;#5829; | &amp;#x16C5    |
| RUNIC LETTER LONG-BRANCH-HAGALL H        | ᚼ              | &amp;#5820; | &amp;#x16BC    |
| RUNIC LETTER LONG-BRANCH-MADR M          | ᛘ              | &amp;#5848; | &amp;#x16D8    |
| RUNIC LETTER LONG-BRANCH-OSS O           | ᚬ              | &amp;#5804; | &amp;#x16AC    |
| RUNIC LETTER LONG-BRANCH-YR              | ᛦ              | &amp;#5862; | &amp;#x16E6    |
| RUNIC LETTER MANNAZ MAN M                | ᛗ              | &amp;#5847; | &amp;#x16D7    |
| RUNIC LETTER NAUDIZ NYD NAUD N           | ᚾ              | &amp;#5822; | &amp;#x16BE    |
| RUNIC LETTER O                           | ᚮ              | &amp;#5806; | &amp;#x16AE    |
| RUNIC LETTER OE                          | ᚯ              | &amp;#5807; | &amp;#x16AF    |
| RUNIC LETTER ON                          | ᚰ              | &amp;#5808; | &amp;#x16B0    |
| RUNIC LETTER OPEN-P                      | ᛕ              | &amp;#5845; | &amp;#x16D5    |
| RUNIC LETTER OS O                        | ᚩ              | &amp;#5801; | &amp;#x16A9    |
| RUNIC LETTER OTHALAN ETHEL O             | ᛟ              | &amp;#5855; | &amp;#x16DF    |
| RUNIC LETTER PERTHO PEORTH P             | ᛈ              | &amp;#5832; | &amp;#x16C8    |
| RUNIC LETTER Q                           | ᛩ              | &amp;#5865; | &amp;#x16E9    |
| RUNIC LETTER RAIDO RAD REID R            | ᚱ              | &amp;#5809; | &amp;#x16B1    |
| RUNIC LETTER SHORT-TWIG-AR A             | ᛆ              | &amp;#5830; | &amp;#x16C6    |
| RUNIC LETTER SHORT-TWIG-BJARKAN B        | ᛓ              | &amp;#5843; | &amp;#x16D3    |
| RUNIC LETTER SHORT-TWIG-HAGALL H         | ᚽ              | &amp;#5821; | &amp;#x16BD    |
| RUNIC LETTER SHORT-TWIG-MADR M           | ᛙ              | &amp;#5849; | &amp;#x16D9    |
| RUNIC LETTER SHORT-TWIG-NAUD N           | ᚿ              | &amp;#5823; | &amp;#x16BF    |
| RUNIC LETTER SHORT-TWIG-OSS O            | ᚭ              | &amp;#5805; | &amp;#x16AD    |
| RUNIC LETTER SHORT-TWIG-SOL S            | ᛌ              | &amp;#5836; | &amp;#x16CC    |
| RUNIC LETTER SHORT-TWIG-TYR T            | ᛐ              | &amp;#5840; | &amp;#x16D0    |
| RUNIC LETTER SHORT-TWIG-YR               | ᛧ              | &amp;#5863; | &amp;#x16E7    |
| RUNIC LETTER SIGEL LONG-BRANCH-SOL S     | ᛋ              | &amp;#5835; | &amp;#x16CB    |
| RUNIC LETTER SOWILO S                    | ᛊ              | &amp;#5834; | &amp;#x16CA    |
| RUNIC LETTER STAN                        | ᛥ              | &amp;#5861; | &amp;#x16E5    |
| RUNIC LETTER THURISAZ THURS THORN        | ᚦ              | &amp;#5798; | &amp;#x16A6    |
| RUNIC LETTER TIWAZ TIR TYR T             | ᛏ              | &amp;#5839; | &amp;#x16CF    |
| RUNIC LETTER URUZ UR U                   | ᚢ              | &amp;#5794; | &amp;#x16A2    |
| RUNIC LETTER V                           | ᚡ              | &amp;#5793; | &amp;#x16A1    |
| RUNIC LETTER W                           | ᚥ              | &amp;#5797; | &amp;#x16A5    |
| RUNIC LETTER WUNJO WYNN W                | ᚹ              | &amp;#5817; | &amp;#x16B9    |
| RUNIC LETTER X                           | ᛪ              | &amp;#5866; | &amp;#x16EA    |
| RUNIC LETTER Y                           | ᚤ              | &amp;#5796; | &amp;#x16A4    |
| RUNIC LETTER YR                          | ᚣ              | &amp;#5795; | &amp;#x16A3    |
| RUNIC LETTER Z                           | ᛎ              | &amp;#5838; | &amp;#x16CE    |
| RUNIC MULTIPLE PUNCTUATION               | ᛬              | &amp;#5868; | &amp;#x16EC    |
| RUNIC SINGLE PUNCTUATION                 | ᛫              | &amp;#5867; | &amp;#x16EB    |
| RUNIC ARLAUG SYMBOL (golden number 17)   | ᛮ              | &amp;#5870; | &amp;#x16EE    |
| RUNIC TVIMADUR SYMBOL (golden number 18) | ᛯ              | &amp;#5871; | &amp;#x16EF    |
| RUNIC BELGTHOR SYMBOL (golden number 19) | ᛰ              | &amp;#5872; | &amp;#x16F0    |
| RUNIC CROSS PUNCTUATION                  | ᛭              | &amp;#5869; | &amp;#x16ED    |
