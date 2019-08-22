//get all POIs
const getPOIData = () => {
    return fetch("http://localhost:8088/interests?_expand=place")
        .then(data => data.json())
}



//post new point of interest
const postNewPOI = (interest) => {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interest)
    })
}

const deleteJournalEntry = (deleteBtnId) => {
    return fetch(`http://localhost:8088/interests/${deleteBtnId}`, {
            method: "DELETE",

        })
        .then(response => response.json())
}

const updateFormFields = (entryId) => {
    const hiddenEntryId = document.querySelector("#poiID")
    //variables to hold DOM locations for form fields
    const interestName = document.querySelector("#interest_name")
    const description = document.querySelector("#description")
    const costs = document.querySelector("#costs")
    const review = document.querySelector("#review")
    const country = document.querySelector("#countryOrigin")
    return fetch(`http://localhost:8088/interests/${entryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            interestName.value = entry.name
            description.value = entry.description
            costs.value = entry.cost
            review.value = entry.review
            country.value = entry.place
        })
}

const editInterests = (updatedObject, entryId) => {
    return fetch(`http://localhost:8088/interests/${entryId}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(updatedObject)

        })
        .then(response => response.json())
    // .then(() => {
    //   const hiddenEntryId = document.querySelector("#entryId")
    //   hiddenEntryId.value = ""
    // })
}



export default {
    getPOIData,
    postNewPOI,
    deleteJournalEntry,
    updateFormFields,
    editInterests
}