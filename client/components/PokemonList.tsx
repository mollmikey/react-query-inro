import { PokemonGeneration } from '../../models/pokemon.ts'
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonGeneration } from '../apis/pokemon.ts'
import LoadingSpinner from './LoadingSpinner.tsx'

export default function PokemonList() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['name'],
    queryFn: () => fetchPokemonGeneration(1),
  })

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <p>Failed to retrieve Pokemon: {error.message}</p>
  }

  return (
    <>
      <h2>Pokémon in {data?.main_region.name}:</h2>
      <ol>
        {data?.pokemon_species.map((p) => (
          <li key={p.url}>{p.name}</li>
        ))}
      </ol>
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
