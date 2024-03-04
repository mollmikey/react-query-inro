import { PokemonGeneration } from '../../models/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon.ts'

export default function PokemonList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['name'],
    queryFn: () => fetchPokemonGeneration(1),
  })

  console.log(data)

  return (
    <>
      <h2>Pokémon in {data?.main_region.name}:</h2>
      <ul>
        {data?.pokemon_species.map((p) => (
          <li key={p.url}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}
//
// const generation = {
// id: 1,
// main_region: { name: 'Kanto', url: 'https://pokeapi.co/api/v2/region/1/' },
// name: 'generation-i',
// pokemon_species: [
// { url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur', name: 'Bulbasaur' },
// ],
// } as PokemonGeneration
