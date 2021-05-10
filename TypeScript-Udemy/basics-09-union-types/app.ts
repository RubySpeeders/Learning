let userInput: unknown;

// // 
// // make a function that will allow me to specify a font, and then returns styles
// // as an object, containing that font, and some other styling of your choice
// function makeFontThings<
//   T extends "'Rubik'" | "Helvetica" | "Arial" | "sans-serif" = "sans-serif"
// >(family: T) {
//   return <S extends { fontSize: string }>(otherStyles: S) => ({
//     ...otherStyles,
//     fontFamily: family,
//   })
// }

// // make this an error
// const makeArial = makeFontThings<"Arial">("sans-serif")
// const makeRubik = makeFontThings<"'Rubik'">("'Rubik'")

// const makeArialStyles = makeArial({
//   color: "red",
// })
// makeRubik({ color: "red", fontSize: "1em" })
// export interface Font<
//   Family extends string = "'Rubik', Helvetica, Arial, sans-serif"
// > {
//   fontFamily: Family
// }
