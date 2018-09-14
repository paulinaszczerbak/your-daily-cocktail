import React, { Component } from 'react';


const Recipe = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <table className="table">
                <tbody>
                    {props.ingredients.map((ingr, index) => 
                        <tr>
                            <td>
                                {ingr}
                            </td>
                            <td>
                                {props.measures[index]}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <p>{props.instruction}</p>
        </div>
    );
}

export default Recipe;