import React, {useState} from "react";
import './Styles/App.css'
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import Counter from "./components/Counter";
import PostForm from "./components/postForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {
    let [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
    ])

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
const [selectedSort, setSelectedSort] = useState('')
const createPost = (newPost) => {
    setPosts([...posts, newPost])
}

const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
}
//dsfnvnsodfnbosndfbo
const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
}

  return (
    <div className="App">
        <Counter/>
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
                value = {selectedSort}
                onChange={sortPosts}
                defaultValue="Sorting"
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Description'}
                ]}
            />
        </div>
        {posts.length
            ?
            <Postlist remove={removePost} posts={posts} title='Post JS'/>
            :
            <h1 style={{textAlign: "center"}}>
                No Posts!
            </h1>
        }
    </div>
  );
}

export default App;

