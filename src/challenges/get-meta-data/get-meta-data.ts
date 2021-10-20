interface user {
  firstName: string
  lastName: string
  gamesOwned: number
  moviesOwned: number
  albumsOwned: number
  dateJoined: string
}

interface metaData {
  totalUsers: number
  usersOwningMoreThanTen: {
    games: number
    movies: number
    albums: number
  }
  usersWhoJoined: {
    oneYearAgo: number
    twoYearsAgo: number
    threeYearsAgo: number
  }
  totalGamers: number
  totalMovieBuffs: number
  totalMusicHeads: number
}

export function getMetaData(users: user[]): metaData {}
