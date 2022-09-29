To run the app, run the following code in one terminal to compile and watch TypeScript.
```yarn watch```

In another terminal, run
```yarn dev```


Visit the Graphql Playgroun at `http://localhost:3999/graphql` and test the `records` Query with the following.
```
query Records ($message: String!){
  records(message: $message){
    links{
      url
      title
    }
    mentions
    emoticons
  }
}
```
