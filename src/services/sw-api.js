const baseUrl = 'https://swapi.dev/api'

export function getStarshipList() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}