const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: 'aa',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_PROP = "UPDATE_PROP"
const UPDATE_FOUND = "UPDATE_FOUND"

// Challenge #11
const UPDATE_AGENT = "UPDATE_AGENT"
const UPDATE_COST = "UPDATE_COST"
const UPDATE_DP = "UPDATE_DP"
const UPDATE_CREDIT = "UPDATE_CREDIT"
const UPDATE_HISTORY = "UPDATE_HISTORY"
const UPDATE_ADD1 = "UPDATE_ADD1"
const UPDATE_ADD2 = "UPDATE_ADD2"
const UPDATE_ADD3 = "UPDATE_ADD3"
const UPDATE_FIRST = "UPDATE_FIRST"
const UPDATE_LAST = "UPDATE_LAST"
const UPDATE_EMAIL = "UPDATE_EMAIL"

function reducer(state = initialState, action) {
    console.log('REDUCER HIT: Action ->', action);
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, { propertyType: action.payload });

        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })

        case UPDATE_PROP:
            return Object.assign({}, state, { propToBeUsedOn: action.payload })

        case UPDATE_FOUND:
            return Object.assign({}, state, { found: action.payload })

        case UPDATE_AGENT:
            return Object.assign({}, state, { realEstateAgent: action.payload })

        case UPDATE_DP:
            return Object.assign({}, state, { downPayment: action.payload })

        case UPDATE_CREDIT:
            return Object.assign({}, state, { credit: action.payload })

        case UPDATE_ADD1:
            return Object.assign({}, state, { addressOne: action.payload })

        case UPDATE_ADD2:
            return Object.assign({}, state, { addressTwo: action.payload })

        case UPDATE_ADD3:
            return Object.assign({}, state, { addressThree: action.payload })

        case UPDATE_FIRST:
            return Object.assign({}, state, { firstName: action.payload })

        case UPDATE_LAST:
            return Object.assign({}, state, { lastName: action.payload })

        case UPDATE_EMAIL:
            return Object.assign({}, state, { email: action.payload})

        case UPDATE_HISTORY:
            return Object.assign( {}, state, {history: action.payload})

        default: return state;
    }
}

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }

}

export function updateAgent(agent) {
    return {
        type: UPDATE_AGENT,
        payload: agent
    }

}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment(downPayment) {
    return {
        type: UPDATE_DP,
        payload: downPayment
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history){
    return{
    type: UPDATE_HISTORY,
    payload: history
    }
}

export function updateAddress1(add1) {
    return {
        type: UPDATE_ADD1,
        payload: add1
    }
}

export function updateAddress2(add2) {
    return {
        type: UPDATE_ADD2,
        payload: add2
    }
}

export function updateAddress3(add3) {
    return {
        type: UPDATE_ADD3,
        payload: add3
    }
}

export function updateFirstName(nameFirst) {
    return {
        type: UPDATE_FIRST,
        payload: nameFirst
    }
}

export function updateLastName(nameLast) {
    return {
        type: UPDATE_LAST,
        payload: nameLast
    }
}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer; 