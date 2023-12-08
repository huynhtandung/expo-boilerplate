export const padZero = (val: number) => `0${val}`.slice(-2)

export const formatDate = (str: string) => {
  const date = new Date(str)
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${day}/${month}/${year}`
}

export const getTotalDays = (from: string, to: string) =>
  Math.ceil((new Date(to).getTime() - new Date(from).getTime()) / (24 * 3600 * 1000))

export const getDateDifference = (from: string, to: string) => {
  const differenceInMilliseconds = new Date(to).getTime() - new Date(from).getTime()

  const years = Math.floor(differenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000))

  let remainingMilliseconds = differenceInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)
  const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000))

  remainingMilliseconds %= 30.44 * 24 * 60 * 60 * 1000
  const days = Math.ceil(remainingMilliseconds / (24 * 60 * 60 * 1000))

  return `${years} years - ${months} months - ${days}days`
}
