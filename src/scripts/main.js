import factory from "./factory.js"
import data from "./data.js"

const cardsContainer = document.querySelector("#cards__container")

//html render entry function
const renderEntry = (htmlstring) => {
    cardsContainer.innerHTML += htmlstring
}


const placeName = document.querySelector("#interest_name")
const description = document.querySelector("#description")
const costs = document.querySelector("#costs")
const review = document.querySelector("#review")
const place = document.querySelector("#countryOrigin")

const deleteAllFields = () => {
    placeName.value = ""
    description.value = ""
    costs.value = ""
    review.value = ""
    place.value = ""
}

//post/get all interests
const getAllInterests = () => {
    cardsContainer.innerHTML = ""
    data.getPOIData().then(journals => {
        for (const journal of journals) {

            const entryHTML = factory.poiHTML(journal.id, journal.name, journal.description, journal.cost, journal.review, journal.place.name, journal.place.visa_required)
            renderEntry(entryHTML)

        }
        deleteAllFields()
    })
}

//invoke function:
getAllInterests()

const tasksFormField = document.querySelector("#tasksFormField")
const submitButton = document.querySelector("#submit_button")




//need to work edit in to function below!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


submitButton.addEventListener("click", event => {
    const hiddenEntryID = document.querySelector("#poiID")
    const interestName = document.querySelector("#interest_name")
    const description = document.querySelector("#description")
    const costs = document.querySelector("#costs")
    const review = document.querySelector("#review")
    const country = document.querySelector("#countryOrigin")
    const newJournalEntry = factory.makePOIObject(interestName.value, description.value, costs.value, review.value, country.value)

    if (hiddenEntryID.value !== "") {
        data.editInterests(newJournalEntry, hiddenEntryID.value)
            .then(getAllInterests)
        // .then(deleteAllFields)
    } else {

        data.postNewPOI(newJournalEntry)
            .then(getAllInterests)

    }
})

//Here is the code for deleting/editing entries:

cardsContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("delete_card")) {
        const result = confirm("Want to delete?");
        if (result) {
            //Logic to delete the item
            const deleteBtnID = event.target.id.split("--")[1]
            data.deleteJournalEntry(deleteBtnID)
                .then(getAllInterests)
        }

    }
    if (event.target.id.startsWith("edit_card")) {
        const entryId = event.target.id.split("--")[1]
        data.updateFormFields(entryId)
        // .then(getAllInterests)

    }
})