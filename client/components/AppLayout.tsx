import { Outlet } from 'react-router-dom'

import { fetchPokemonGeneration } from '../apis/pokemon.ts'
import PokemonList from './PokemonList'

export default function AppLayout() {
  return (
    <>
      <h1>Query &apos;em All 🐭⚡</h1>
      <PokemonList />
      <Outlet />
    </>
  )
}
