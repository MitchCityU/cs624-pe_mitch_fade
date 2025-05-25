Input:
User inputs:
 - Country name
 - Currency name 

Process:
When the user presses "Add Country" on the AddCountry page
 - the app creates a new entry with a unique id
 - It stores the object in the app's state using SetState
 - it navigates back to the homepage
 - the state change triggers a re-render of the homepage 

Output:
 - The list of saved countries is shown on the homepage
 - a "No Saved Countries!" message is shown if no countries are added