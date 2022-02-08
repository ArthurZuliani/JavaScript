/**
 * Practice practical 1 - CIS 2286
 *
 * @author jdkitson
 * @modified by Arthur Zuliani - Implemented functionalities as required by task
 */

//Declare local variables/attributes
const PHONE_TYPE_1 = "iPhone X";
const PHONE_TYPE_2 = "Samsung Galaxy S10";
const PHONE_TYPE_3 = "Nokia 2720";
const TAX_RATE = 0.15;

const PHONE_ONE_PRICE = 400;
const PHONE_TWO_PRICE = 450;
const PHONE_THREE_PRICE = 150;

let budget = 0;
let phonesPurchased = "";
let numPhones = 0;
let subTotal = 0;
let taxTotal = 0;
let total = 0;
let purchaserName;

/**
 * This closure add 1 to counter
 *
 * @auhtor Joey Kitson
 * @type {function(): number}
 */
let add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();

/**
 * This method controls the main menu of the application
 *
 * @author Arthur Zuliani
 * @since 20220208
 */
function phoneSalesApp() {

    const EXIT = "X";

    const MENU = "-------------------------\n"
        + "CIS Cellphone Sales App Menu\n"
        + "- P-Purchase a Phone\n"
        + "- V-View Order details\n"
        + "- X-eXit\n"
        + "-------------------------\n"
        + "Option-->";

    let option = "";

    //Capture purchaser name and budget
    purchaserName = prompt('Enter purchaser name:');
    budget = Number(prompt('Enter purchaser budget:')); //Ensures that budget in a numeric value

    do {
        option = prompt(MENU).toUpperCase();
        processMenuOption(option);
    } while (option.toUpperCase() !== EXIT);

}

/**
 * This method process option selected by user
 *
 * @param option The menu option
 * @since 20220208
 * @author Arthur Zuliani
 *
 */
function processMenuOption(option) {

    switch (option) {
        case 'P':
            purchase();
            break;
        case 'V':
            alert(displayOrder());
            break;
        case 'X':
            alert('Thank you!! Bye for now');
            break;
        default:
            prompt('Invalid option!');
            break;
    }
}

/**
 * This method will process a phone purchase
 *
 * @author Arthur Zuliani
 * @since 20220208
 */
function purchase() {

    const PHONE_MENU = "------------------------\n"
        + "Phone Menu\n"
        + "- I-iPhone X - $400\n"
        + "- S-Samsung Galaxy S10 - $450\n"
        + "- F- Nokia 2720 - Flip Phone - $150\n"
        + "-------------------------\n"
        + "Option-->";
    let phoneOption;

    phoneOption = prompt(PHONE_MENU).toUpperCase();

    //Process purchase
    switch (phoneOption) {
        case 'I':
            addPhone(PHONE_TYPE_1, PHONE_ONE_PRICE);
            break;
        case 'S':
            addPhone(PHONE_TYPE_2, PHONE_TWO_PRICE);
            break;
        case 'F':
            addPhone(PHONE_TYPE_3, PHONE_THREE_PRICE);
            break;
    }

}

/**
 * This IIFE will check if the user has enough budget to afford a new phone
 *
 * @author Arthur Zuliani
 * @since 20220208
 * @param phoneType
 * @param phoneCost
 */
let addPhone = function (phoneType, phoneCost) {

    let previewedTotal = (total + (phoneCost * (1 + TAX_RATE)));

    //Just consider the phone purchase into the order if the user has budget for it
    if ((budget - previewedTotal) > 0) {

        numPhones = add();

        if (!phonesPurchased.includes(phoneType)) {
            (phonesPurchased.length > 0) ? phonesPurchased += ', ' + phoneType : phonesPurchased += phoneType;
        }

        //Make the necessary math
        subTotal += phoneCost;
        taxTotal = (subTotal * TAX_RATE);
        total = subTotal + taxTotal;

    } else {
        alert('You cannot afford this order!\n'
            + 'Budget: ' + budget.toLocaleString('en-CA', {currency: 'CAD', style: 'currency'}) + '\n'
            + 'Total: ' + previewedTotal.toLocaleString('en-CA', {currency: 'CAD', style: 'currency'}) + '\n');
    }
}

/**
 * This method will print out the order summary for user
 *
 * @author Arthur Zuliani
 * @since 20220208
 * @returns {string}
 */
function displayOrder() {
    outputString = '';

    outputString += 'Purchaser Name: ' + purchaserName + '\n'
        + 'Number of Items: ' + numPhones + '\n'
        + 'Phone Types Purchased: ' + phonesPurchased + '\n'
        + 'Subtotal: ' + subTotal.toLocaleString('en-CA', {currency: 'CAD', style: 'currency'}) + '\n'
        + 'Tax: ' + taxTotal.toLocaleString('en-CA', {currency: 'CAD', style: 'currency'}) + '\n'
        + 'Total: ' + total.toLocaleString('en-CA', {currency: 'CAD', style: 'currency'}) + '\n'

    return outputString;
}

//Run the phoneSalesApp
phoneSalesApp();
 