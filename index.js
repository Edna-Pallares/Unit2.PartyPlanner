const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events"

const state = {
    events: [],
}

const partiesList = document.querySelector("#display-parties");
const form = document.querySelector("form");
console.log(form);

//GET EVENTS
const getParties = async () => {
    try{
        const response = await fetch(EVENTS_URI);
        const json = response.json();
        const parties = json.data;
        return parties;
    }catch(error){
        console.error(error)
    }
};
const init = async ()=> {
    const parties = await getParties();
    console.log(parties);
}

//POST EVENT
//name, date, location, description
const createParty = async (name, description, unformattedDate, location) => {
    try {
        const date = new Date(unformattedDate);
        const response = await fetch(EVENTS_URI, {
            method: "POST",
            headers: { "Content-Type: "application/json" },
            body: JSON.stringify({name, description, unformattedDate, location}),
        });
        const json = await response.json();
        if (json.error) {
            throw new Error(json.error);
        }
        init();
     }  catch (error) {
        console.error(error);
    }
};

document.querySelector("form").addEventListener("submit", (evt) => {
    const formEl = evt.target;
    evt.preventDefault();
    createParty(
        formEl.title.value,
        formEl.description.value,
        formEl.date.value,
        formEl.location.value
    );

    formEl.title.value = "";
    formEl.description.value = "";
    formEl.date.value = date.value = "";
    formEl.location.value = "";

    formEl.title.focus();
});


//DELETE EVENT

const deleteParty = async () =>{
    try {
        const response = await fetch 
    }
}

