export const getYears = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(0)
    .map((item, index) => start + index)
}
