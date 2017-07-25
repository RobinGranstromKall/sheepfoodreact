import React from "react";


export default function Recipe(props) {

    if (props.detailsOnly) {
        const shortDescription = props.recipe.description.substring(0, 100) + "...";
        return (
            <div className="recipe-item" onClick={evt => props.handleClick(props.recipe)}>
                <h4>{props.recipe.title}</h4>
                <img src={props.recipe.imageUrl} alt={props.recipe.title}/>
                <p>{shortDescription}</p>
            </div>

        )
    }

    return (
        <div className="card recipe-item-detail">
            <div className="card-header">
                {props.recipe.title}
            </div>
            <div className="card-block">
                <div className="media">
                    <img className="d-flex mr-3" src={props.recipe.imageUrl} alt={props.recipe.title}/>
                    <div className="media-body">
                        <h5 className="mt-0">Gör så här</h5>
                        <p>{props.recipe.description}</p>
                        <br /><br />
                        <h5 className="mt-0">Ingredienser</h5>
                        <div className="col-sm-6">
                            <table className="table table-sm">
                                <tbody>
                                {    props.recipe.recipeItems.map((item) =>
                                    <tr>
                                        <td>{item.amount} {item.unit.name}</td>
                                        <td>{item.ingredient.name.toLowerCase()}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}