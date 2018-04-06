import React, { Component } from 'react'
import { ScaleLoader } from 'react-spinners';
import axios from 'axios'
import Data from './data'
import Search from './search'

const URL = "http://pokeapi.co"
const POKEMON_PATH = "/api/v2/pokemon/"
const POKEMON_SPECIES_PATH = "/api/v2/pokemon-species/"

class Pokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: {
                id: -1,
                name: undefined,
                sprites: [],
                types: [],
                descriptions: [],
                color: undefined,
                stats: []
            },
            loading: false,
            searchValue: undefined
        }
    }

    getPokemon = (pokemon, event) => {
        event.preventDefault()
        this.showLoader()
        axios.get(URL + POKEMON_PATH + pokemon)
            .then(response_pokemon_path => {
                axios.get(URL + POKEMON_SPECIES_PATH + pokemon)
                    .then(response_pokemon_species_path => {
                        this.setState({
                            pokemon: {
                                id: response_pokemon_path.data.id,
                                name: response_pokemon_path.data.name,
                                sprites: response_pokemon_path.data.sprites,
                                types: response_pokemon_path.data.types,
                                stats: response_pokemon_path.data.stats,
                                descriptions: response_pokemon_species_path.data.flavor_text_entries,
                                color: response_pokemon_species_path.data.color.name
                            },
                            loading: false
                        })
                    })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    pokemon: {
                        id: -1
                    },
                    loading: false
                })
            })
    }

    searchHandler = event => {
        this.setState({
            searchValue: event.target.value.toLowerCase()
        })
    }

    showLoader = () => {
        this.setState({
            loading: true
        })
    }

    render() {
        return (
            <div className="container">
                <div className='sweet-loading'>
                    <ScaleLoader color={'#123abc'} loading={this.state.loading} />
                </div>
                <Search searchHandler={this.searchHandler}
                    search={this.getPokemon}
                    searchValue={this.state.searchValue} />

                {this.state.pokemon.id === -1 || this.state.loading === true ? undefined :
                    <div className="mt-3">
                        <Data pokemon={this.state.pokemon} />
                    </div>
                }
            </div>
        )
    }
}

export default Pokemon