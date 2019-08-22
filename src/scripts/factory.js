const poiHTML = (id, name, description, cost, review, place) => {
    return `
    <article id="poiField" class="poiField--${id}">
    <h2 id="card_name">${name}</h2>
    <p id="card_description">Description: ${description}</p>
    <p id="card_cost">Costs: $${cost}</p>
    <p id="card_review">Review: ${review}</p>
    <p id="card_location">Location: ${place}</p>

    <button class="edit-button" id="edit_card--${id}">Edit</button>
    <button class="delete-button" id="delete_card--${id}">Delete</button>
    </span>
    <br>
   
    </article>`
}

//object for
const makePOIObject = (name, description, cost, review, place) => {
    return {
        name: name,
        description: description,
        cost: cost,
        review: review,
        placeId: place,
        visa_required: visa
    }
}

export default {
    poiHTML,
    makePOIObject
}