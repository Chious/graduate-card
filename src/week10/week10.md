
# Users

```
import users from "./data.json"
```

  * Use `console.log()` to show `users` values in  console info. Then
  * Right click on the console info and choose **store object as global variable**. (`temp1` will be created.)

```
users = temp1
// create an object
pos = Object()
users[0].map(
    (e,i)=>{
        pos[e]=i
    }
)
pos.imgSrc = pos.ThumbnailLink
pos.name = pos.Name
pos.grade = pos.Grade
pos.wish = pos.Wish
```

  * [React rendering list](https://react.dev/learn#rendering-lists)