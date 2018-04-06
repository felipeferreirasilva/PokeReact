import React from 'react'
import { BarChart, XAxis, YAxis, Bar } from 'recharts'

const Data = props => {
    let description = undefined

    for (var i = 0; i < props.pokemon.descriptions.length; i++) {
        if (props.pokemon.descriptions[i].language.name === "en") {
            description = props.pokemon.descriptions[i].flavor_text
            break
        }
    }

    let statsData = [];

    props.pokemon.stats.map(stat => (
        statsData.push({ name: stat.stat.name, value: stat.base_stat })
    ))

    let borderStyle = {
        border: `2px solid ${props.pokemon.color}`
    }

    return (
        <div className="jumbotron pkData">
            <div className="container">
                <h3 className="text-center">ID# {props.pokemon.id} - {props.pokemon.name.toUpperCase()}</h3>
                <h5 className="text-left mt-3">SPRITES</h5>
                <div className="row text-center pkSprites">
                    {props.pokemon.sprites.front_default ? <div className="col img-thumbnail" style={borderStyle}><img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} /></div> : null}
                    {props.pokemon.sprites.back_default ? <div className="col img-thumbnail" style={borderStyle}><img src={props.pokemon.sprites.back_default} alt={props.pokemon.name} /></div> : null}
                    {props.pokemon.sprites.front_shiny ? <div className="col img-thumbnail" style={borderStyle}><img src={props.pokemon.sprites.front_shiny} alt={props.pokemon.name} /></div> : null}
                    {props.pokemon.sprites.back_shiny ? <div className="col img-thumbnail" style={borderStyle}><img src={props.pokemon.sprites.back_shiny} alt={props.pokemon.name} /></div> : null}
                </div>
                <h5 className="text-left mt-4">DESCRIPTION</h5>
                <div>
                    <p className="text-left">{description}</p>
                </div>
                <h5 className="text-left mt-4">TYPE</h5>
                <div className="row text-center">
                    {props.pokemon.types.map((type, index) => (
                        <p key={index} className="col pkTypes">{type.type.name.toUpperCase()}</p>
                    ))}
                </div>
                <h5 className="text-left mt-4 mb-3">STATS</h5>
                <div className="pkStats">
                    <BarChart width={800} height={200} data={statsData} className="container">
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey='value' fill={props.pokemon.color} />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}

export default Data