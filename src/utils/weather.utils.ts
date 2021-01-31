export const formatTemperature = (temp?: number): number | undefined => {
  return temp && Math.round(temp);
}