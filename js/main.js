// Can you describe the main difference between a .forEach loop and a .map() loop.
// why you would pick one versus the other?
// Give examples.

    // The main difference is that map creates a new array containing all the elements of the original array BUT modified by the function provided.
    // forEach on the other hand passes each element of the array to a function, performs the operations inside the function and returns UNDEFINED.
    // So, unless the function passed to the forEach is modifying a variable of wider scope or the array itself, nothing will change after the foreach runs.


    //I would use map to reformat the data provided in an array that I need to keep organized and grouped (in an array).
    //I would use the forEach to simply extract each data pont from a provided array and perform an operation on a variable using that value.

    //Examples:
    //map: modify object property structures
    //forEach: Increase a variable by each element of the array.


//Build a click counter in JS to display on the browser.
//Keep track of how many times the user has clicked the button during the current session.
//No storage. Just could clicks. 
//It’s simple. But I will have follow up questions after.

    //Variables

    let counterNum;

    //Cached Element References

    const counterEl = document.getElementById('counter');
    const btnEl = document.getElementById('btn');

    // Event Listeners

    btnEl.addEventListener('click', () => {
        counterNum++;
        counterEl.innerHTML = counterNum;
    });

    // Functions

    function init () {
        counterNum = 0;
        counterEl.innerHTML = counterNum;
    }

    init();

