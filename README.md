# Happy Thoughts / see the site here: https://mrsucodesproject11thehappythoughts.netlify.com/

Upon building this site, I was able to practice my React state skills by fetching and posting data to an API.

My school built a simple API with three endpoints, to collect 'happy thoughts'. We like to think of it as our own version of Twitter, but with less negativity, and 100% fewer US presidents using it. 

### How to fetch recent thoughts

`GET https://technigo-thoughts.herokuapp.com/`

This will return the latest 20 thoughts from the API, looking something like this:

```json
[
  {
    "_id": "5dd671c864cc480017f40979",
    "message": "I'm happy because we're starting a fun new project",
    "hearts": 0,
    "createdAt": "2019-11-21T11:15:20.888Z",
    "__v": 0
  },
  {
    "_id": "5dd6759064cc480017f4097a",
    "message": "I just ate a super tasty lunch",
    "hearts": 0,
    "createdAt": "2019-11-21T11:31:28.547Z",
    "__v": 0
  }
]
```

### Creating a thought

`POST https://technigo-thoughts.herokuapp.com/`

Send a POST request with a JSON body like this:

```json
{
  "message": "My happy thought"
}
```

When the request is successful and a thought is added, I get a response which looks like this:

```json
{
  "_id": "123456",
  "message": "My happy thought",
  "hearts": 0,
  "createdAt": "2019-11-21T11:31:28.547Z",
  "__v": 0
}
```

The message I send is validated - it must be present, and be between 5 and 140 characters long. 

### How to like a thought

`POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like`

When the user clicks the heart button on a thought, send a POST request (with no body) to this url. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**

## What I learned 🧠

* How to use APIs in React, firing requests within `useEffect`.
* How to put the result of API responses into React state to show in the page.
* What it's like to work with an API which you both send and receive data from.

## How I got started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## How I got to complete the project 🤓

I made a sketch of what kind of components I would need, what their responsibility should be, and what kind of state I would need. This helped me to have a clearer idea of what code you need to write. Once I did that, next step was to start with listing the thoughts which were already in the API. Then move on to building a form to post a new thought, and finally implement the heart button on an existing thought.

When I submitted the form to add a new thought, the API returned the new thought object in the same way it would look if it was part of the full list response. Tip to look at [react documentation](https://reactjs.org/docs/hooks-reference.html#usestate) for a more detailed explanation of adding an object to an existing array in state, but in a nutshell, I wanted to do something like this with the schools help:

```js
// Assuming you have this kind of state in your component:
const [thoughts, setThoughts] = useState([]) 

// Later, in your code which handles the form submission, you 
// could have something which looks like this to send the new 
// message, get the response from the API, and then add it to 
// the thoughts array:
const handleFormSubmit = (event) => {
  event.preventDefault()

  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
  fetch('https://technigo-thoughts.herokuapp.com/', { 
    method: 'POST', 
    body: JSON.stringify({ message: 'Hello world' })
  })
    .then((res) => res.json())
    .then((newThought) => {
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array: 
      setThoughts((previousThoughts) => [newThought, ...previousThoughts])
    })
}
```

## Requirements I reached 🧪

* The page follow the design as closely as possible
* The page lists the most recent thoughts
* The page has a form to post new thoughts
* The page has the heart button to send likes on a thought
* Code follows Technigo’s code guidelines.
